import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Modal,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Layout from '../../../../components/Layout/Layout';
import {api} from '../../../../service/http';
import {aggregateDocumentsWithDriver} from '../../../../utils/document';

export default function FinishedSales() {
  const [data, setData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('api/yakunlangansotuvlar');
        const resData = aggregateDocumentsWithDriver(res.data);
        setData(resData);
        console.log('Sales resData:', resData);
      } catch (error) {
        console.error('Error fetching sales data', error);
      }
    };

    fetchData();
  }, []);

  const handleRowPress = item => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => handleRowPress(item)}>
      <View className="flex-row border-b border-gray-300 py-2">
        <View className="w-48 border-r border-gray-300 px-2">
          <Text className="text-base">{item.cardName}</Text>
        </View>
        <View className="w-24 border-r border-gray-300 px-2">
          <Text className="text-base">{item.baseEntry}</Text>
        </View>
        <View className="w-[150] border-r border-gray-300 px-2">
          <Text className="text-base">{item.cardCode}</Text>
        </View>
        <View className="w-24 border-r border-gray-300 px-2">
          <Text className="text-base">{item.docTotal}</Text>
        </View>
        <View className="w-32 border-r border-gray-300 px-2">
          <Text className="text-base">{item.docTotalQuantity}</Text>
        </View>
        <View className="w-48 px-2">
          <Text className="text-base">{item.driver}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <Layout>
      <Text className="text-xl text-blue-500 mb-4">Home</Text>
      {data ? (
        <View>
          <Text className="text-lg my-2">Sales Data:</Text>
          <ScrollView horizontal>
            <View className="my-5">
              <View
                className="flex-row border-b border-gray-300"
                style={{height: 80}}>
                <View className="w-48 border-r border-gray-300 px-2 justify-center">
                  <Text className="text-base font-bold">Card Name</Text>
                </View>
                <View className="w-24 border-r border-gray-300 px-2 justify-center">
                  <Text className="text-base font-bold">Base Entry</Text>
                </View>
                <View className="w-[150] border-r border-gray-300 px-2 justify-center">
                  <Text className="text-base font-bold">Card Code</Text>
                </View>
                <View className="w-24 border-r border-gray-300 px-2 justify-center">
                  <Text className="text-base font-bold">Doc Total</Text>
                </View>
                <View className="w-32 border-r border-gray-300 px-2 justify-center">
                  <Text className="text-base font-bold">
                    Doc Total Quantity
                  </Text>
                </View>
                <View className="w-48 px-2 justify-center">
                  <Text className="text-base font-bold">Driver</Text>
                </View>
              </View>
              <ScrollView>
                {data.map((item, index) => (
                  <View key={index}>{renderItem({item})}</View>
                ))}
              </ScrollView>
            </View>
          </ScrollView>

          {/* Modal to show detailed information */}
          {selectedItem && (
            <Modal
              transparent={true}
              animationType="slide"
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}>
              <View className="flex-1 justify-center items-center bg-black/50">
                <View className="bg-white p-5 rounded-lg w-4/5 items-center">
                  <Text className="text-lg font-bold mb-4">Details</Text>
                  <Text>Card Name: {selectedItem.cardName}</Text>
                  <Text>Base Entry: {selectedItem.baseEntry}</Text>
                  <Text>Card Code: {selectedItem.cardCode}</Text>
                  <Text>Doc Total: {selectedItem.docTotal}</Text>
                  <Text>
                    Doc Total Quantity: {selectedItem.docTotalQuantity}
                  </Text>
                  <Text>Driver: {selectedItem.driver}</Text>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text className="mt-4 text-blue-500">Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          )}
        </View>
      ) : (
        <ActivityIndicator />
      )}
    </Layout>
  );
}
