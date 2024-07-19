import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Layout from '../../../components/Layout/Layout';
import DeliveryIcon from '../../../assets/icons/DeliveryIcon';

export default function StockTransferlinesScreen() {
  return (
    <Layout>
      <TouchableOpacity className="flex-row justify-between  bg-white rounded-lg p-3  drop-shadow-xl mt-5">
        <Text className="text-blue-900 font-extrabold text-lg">
          Yuk ko'chirish so'rovnomasi
        </Text>
        <DeliveryIcon color="#1e3a8a" />
      </TouchableOpacity>

      <TouchableOpacity className="flex-row justify-between  bg-white rounded-lg p-3  drop-shadow-xl mt-5">
        <Text className="text-blue-900 font-extrabold text-lg">
          Yuk ko'chirish
        </Text>
        <DeliveryIcon color="#1e3a8a" />
      </TouchableOpacity>
    </Layout>
  );
}
