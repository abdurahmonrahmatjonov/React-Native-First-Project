import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Layout from '../../components/Layout/Layout';
import {api} from '../../service/http';
import DeliveryIcon from '../../assets/icons/DeliveryIcon';
import PurchaseIcon from '../../assets/icons/PurchaseIcon';
import ReportsIcon from '../../assets/icons/ReportsIcon';
import SalesIcon from '../../assets/icons/SalesIcon';
import DashboardReportIcon from '../../assets/icons/DashboardReportIcon';

export default function Home({navigation}) {
  const [data, setData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <Layout>
      <View className="justify-center items-center mt-2">
        <Image
          source={require('../../assets/image/logo.png')}
          className="w-[30]  h-[30]"
        />
      </View>

      <View className="mt-4">
        <TouchableOpacity
          onPress={() => navigation.push('SalesScreen')}
          className="flex-row justify-between  bg-white rounded-lg p-3  drop-shadow-xl mt-5">
          <Text className="text-blue-900 font-extrabold text-lg">Sotuvlar</Text>
          <SalesIcon color="#1e3a8a" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.push('StockTransferlinesScreen')}
          className="flex-row justify-between  bg-white rounded-lg p-3  drop-shadow-xl mt-5">
          <Text className="text-blue-900 font-extrabold text-lg">
            Yuk ko'chirish
          </Text>
          <DeliveryIcon color="#1e3a8a" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between  bg-white rounded-lg p-3  drop-shadow-xl mt-5">
          <Text className="text-blue-900 font-extrabold text-lg">Haridlar</Text>
          <PurchaseIcon color="#1e3a8a" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between  bg-white rounded-lg p-3  drop-shadow-xl mt-5">
          <Text className="text-blue-900 font-extrabold text-lg">
            Ombor hisobi
          </Text>
          <ReportsIcon color="#1e3a8a" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.push('DashboardReportScreen')}
          className="flex-row justify-between  bg-white rounded-lg p-3  drop-shadow-xl mt-5">
          <Text className="text-blue-900 font-extrabold text-lg">
            Dashboard hisoboti
          </Text>
          <DashboardReportIcon color="#1e3a8a" />
        </TouchableOpacity>
      </View>
    </Layout>
  );
}
