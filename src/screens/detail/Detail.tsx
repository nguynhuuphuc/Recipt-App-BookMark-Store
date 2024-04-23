import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Header from './components/Header';
import {useNavigation} from '@react-navigation/native';
import {DetailPush} from '../../navigation/TypeCheck';

export default function Detail() {
  const navigation = useNavigation<DetailPush>();
  const onBackPress = () => {
    navigation.pop();
  };
  return (
    <SafeAreaView>
      <Header onBackPress={onBackPress} />
    </SafeAreaView>
  );
}
