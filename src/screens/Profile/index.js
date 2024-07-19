import React, {useEffect, useState} from 'react';
import {Text, Image, View} from 'react-native';
import Layout from '../../components/Layout/Layout';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/Button/Button';

export default function Profile({navigation}) {
  const [token, setToken] = useState('');
  const [role, setRole] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [salesPersonCode, setSalesPersonCode] = useState('');
  const user = useSelector(state => state.main.user);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = await AsyncStorage.getItem('@token');
      const rolee = await AsyncStorage.getItem('@role');
      const eId = await AsyncStorage.getItem('@employeeId');
      const slpCode = await AsyncStorage.getItem('@salesPersonCode');

      setToken(accessToken);
      setRole(rolee);
      setEmployeeId(eId);
      setSalesPersonCode(slpCode);
    };

    fetchData();
  }, []);

  const clearToken = async () => {
    try {
      await AsyncStorage.removeItem('@token');
      setToken('');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error removing token from storage', error);
    }
  };

  return (
    <Layout>
      <View className="justify-center items-center mt-2">
        <Image
          source={require('../../assets/image/logo.png')}
          className="w-[30]  h-[30]"
        />
      </View>
      <Text className="text-xl text-blue-500">Profile</Text>
      <Text className="text-green-600">{token}</Text>
      <Text className="text-red-700">{role}</Text>
      <Text className="text-blue-700">{user} </Text>
      <Text className="text-red-700">{employeeId}</Text>
      <Text className="text-red-700">{salesPersonCode}</Text>

      <Button text="Logout" onPress={clearToken} />
    </Layout>
  );
}
