import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Header from './components/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {DetailPush, PropsRouteDetail} from '../../navigation/TypeCheck';
import Body from './components/Body';
import {useGetDetailMealQuery} from '../../api/FoodApi';
import {Meal} from '../../api/Type';

export default function Detail() {
  const navigation = useNavigation<DetailPush>();
  const route = useRoute<PropsRouteDetail>();
  const id = route.params?.id ?? '';
  const {data, isLoading} = useGetDetailMealQuery(id);
  const meal = data?.meals[0];
  const onBackPress = () => {
    navigation.pop();
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        url={meal?.strMealThumb}
        onBackPress={onBackPress}
        id={meal?.idMeal ?? ''}
        title={meal?.strMeal ?? ''}
      />
      <Body meal={meal} />
    </SafeAreaView>
  );
}
