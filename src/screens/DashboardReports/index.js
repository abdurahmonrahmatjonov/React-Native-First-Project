import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Layout from '../../components/Layout/Layout';
import DashboardReportIcon from '../../assets/icons/DashboardReportIcon';

export default function DashboardReportScreen() {
  return (
    <Layout>
      <TouchableOpacity className="flex-row justify-between  bg-white rounded-lg p-3  drop-shadow-xl mt-5">
        <Text className="text-blue-900 font-extrabold text-lg">
          Yo'ldagi tovarlar va Tracking hisobi
        </Text>
        <DashboardReportIcon color="#1e3a8a" />
      </TouchableOpacity>

      <TouchableOpacity className="flex-row justify-between  bg-white rounded-lg p-3  drop-shadow-xl mt-5">
        <Text className="text-blue-900 font-extrabold text-lg">
          Yuklangan buyurtmalar hisobi
        </Text>
        <DashboardReportIcon color="#1e3a8a" />
      </TouchableOpacity>
    </Layout>
  );
}
