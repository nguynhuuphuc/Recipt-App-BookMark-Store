import {View, Text, FlatList} from 'react-native';
import React from 'react';
import ItemFood from '../../../components/ItemFood';
import {style} from '../Style';
import {useGetTrendingMealQuery} from '../../../api/FoodApi';
import {useNavigation} from '@react-navigation/native';
import {DetailPush, MainPush} from '../../../navigation/TypeCheck';
import {SCREENS} from '../../../constant/Constant';

export default function Trending() {
  const navigation = useNavigation<DetailPush>();
  const {data, isLoading} = useGetTrendingMealQuery();
  const onSendToDetailPage = (id: string) => {
    navigation.push(SCREENS.DETAIL, {id});
  };
  return (
    <View style={[style.cTrending]}>
      <Text style={[style.titleTrending]}>Trending Recipe</Text>
      <FlatList
        horizontal
        data={data?.meals ?? []}
        renderItem={({item}) => (
          <ItemFood
            id={item.idMeal}
            onPress={onSendToDetailPage}
            url={item.strMealThumb}
            category={item.strCategory}
            title={item.strMeal}
            tag={item.strArea}
          />
        )}
      />
    </View>
  );
}
