import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {
  login,
  setToken,
  setEmployeeId,
  setRole,
  setSalesPersonCode,
  setUser,
} from '../../slice/mainSlice';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {api} from '../../service/http';
import Button from '../../components/Button/Button';

export default function Login({navigation}) {
  const dispatch = useDispatch();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [enabled, SetEnabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [isMeLoading, setMeLoading] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setMeLoading(true);
      try {
        const token = await AsyncStorage.getItem('@token');
        const {data} = await api.get('api/auth/me', {
          headers: {Authorization: `Bearer ${token}`},
        });
        if (data) {
          const {
            accessToken,
            firstName,
            lastName,
            jobTitle: role,
            employeeId,
            salesPersonCode,
          } = data;
          const user = `${firstName} ${lastName}`;
          dispatch(login(user));
          dispatch(setUser(user));
          dispatch(setToken(accessToken));
          dispatch(setRole(role));
          dispatch(setEmployeeId(employeeId));
          dispatch(setSalesPersonCode(salesPersonCode));
          navigation.navigate('Tabs');

          // const prevLocation = sessionStorage.getItem('prevLocation');
          // const extractedData = prevLocation.slice(1);
          // console.log(extractedData);
          // dispatch(setSelectedPath(extractedData || 'my-sales'));
        }
      } catch (err) {
        console.log(err);
      } finally {
        setMeLoading(false);
      }
    };
    fetchData();
  }, [dispatch, navigation]);

  const handleLogin = async () => {
    setLoading(true);
    try {
      if (username && password) {
        const {data} = await api.get(
          `api/auth?EmployeeCode=${username}&ExternalEmployeeNumber=${password}`,
        );

        console.log(data);
        if (data) {
          const {
            accessToken: token,
            firstName,
            lastName,
            jobTitle: role,
            employeeId,
            salesPersonCode,
          } = data;
          const user = `${firstName} ${lastName}`;
          dispatch(login(user));
          dispatch(setUser(user));
          dispatch(setToken(token));
          dispatch(setRole(role));
          dispatch(setEmployeeId(employeeId));
          dispatch(setSalesPersonCode(salesPersonCode));
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          await AsyncStorage.multiSet([
            ['@user', user],
            ['@token', token],
            ['@role', role],
            ['@employeeId', employeeId.toString()],
            ['@salesPersonCode', salesPersonCode.toString()],
          ]);
          navigation.navigate('Tabs');
        }
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  if (isMeLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <StatusBar backgroundColor={'#1e3a8a'} />

      <Text className="text-center text-3xl font-bold	text-blue-900 tracking-wider mt-14 ">
        Login
      </Text>

      <View className="mt-5 p-3 mx-1">
        <Text className="text-gray-400 text-lg font-medium">Kirish</Text>
        <TextInput
          // placeholder="Enter username"
          className=" bg-white rounded-lg p-3 text-blue-900 drop-shadow-xl mt-5"
          placeholderTextColor={'white'}
          onChangeText={text => setUsername(text)}
        />
      </View>
      <View className="mt-5 p-3 mx-1">
        <Text className="text-gray-400 text-lg font-medium">Parol</Text>
        <View className="flex-row justify-between items-center bg-white rounded-lg  text-blue-900 drop-shadow-xl mt-5">
          <TextInput
            // placeholder="Password"
            placeholderTextColor={'white'}
            secureTextEntry={enabled}
            className="flex-1  text-blue-900 ml-2"
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity
            onPress={() => SetEnabled(!enabled)}
            className="mr-5 ">
            <Text className="text-black">{enabled ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className=" flex-1 p-3 justify-end mt-5 ">
        <Button
          text="Kirish"
          loading={loading}
          onPress={handleLogin}
          bgColor={'bg-blue-900'}
        />
      </View>
    </SafeAreaView>
  );
}
