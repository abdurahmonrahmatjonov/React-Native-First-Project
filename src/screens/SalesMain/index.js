import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Layout from '../../components/Layout/Layout';
import DeliveryIcon from '../../assets/icons/DeliveryIcon';
import PurchaseIcon from '../../assets/icons/PurchaseIcon';
import ReportsIcon from '../../assets/icons/ReportsIcon';
import SalesIcon from '../../assets/icons/SalesIcon';

export default function SalesScreen({navigation}) {
  const [data, setData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <Layout>
      <TouchableOpacity
        onPress={() => navigation.push('MySales')}
        className="flex-row justify-between  bg-white rounded-lg p-3  drop-shadow-xl mt-5">
        <Text className="text-blue-900 font-extrabold text-lg">
          Sotuv so'rovnomasi
        </Text>
        <SalesIcon color="#1e3a8a" />
      </TouchableOpacity>

      <TouchableOpacity className="flex-row justify-between  bg-white rounded-lg p-3  drop-shadow-xl mt-5">
        <Text className="text-blue-900 font-extrabold text-lg">
          Tasdiqlangan sotuv buyurtmalari
        </Text>
        <SalesIcon color="#1e3a8a" />
      </TouchableOpacity>

      <TouchableOpacity className="flex-row justify-between  bg-white rounded-lg p-3  drop-shadow-xl mt-5">
        <Text className="text-blue-900 font-extrabold text-lg">
          Yuklangan buyurtmalar
        </Text>
        <SalesIcon color="#1e3a8a" />
      </TouchableOpacity>

      <TouchableOpacity className="flex-row justify-between  bg-white rounded-lg p-3  drop-shadow-xl mt-5">
        <Text className="text-blue-900 font-extrabold text-lg">
          Qaytarilgan Maxsulotlar
        </Text>
        <SalesIcon color="#1e3a8a" />
      </TouchableOpacity>

      <TouchableOpacity className="flex-row justify-between  bg-white rounded-lg p-3  drop-shadow-xl mt-5">
        <Text className="text-blue-900 font-extrabold text-lg">
          Yakunlangan sotuvlar
        </Text>
        <SalesIcon color="#1e3a8a" />
      </TouchableOpacity>
    </Layout>
  );
}
