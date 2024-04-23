import {View, Text, FlatList} from 'react-native';
import React from 'react';
import ItemCategory from '../../../components/ItemCategory';
import {style} from '../Style';
import {useGetCategoriesQuery} from '../../../api/FoodApi';

export default function Category() {
  const data = useGetCategoriesQuery().data?.categories ?? [];
  return (
    <View style={[style.cCategory]}>
      <View style={[style.cCategoryTitle]}>
        <Text style={[style.textColorBlack, style.categoryTitle]}>
          Categories
        </Text>
        <Text>View all</Text>
      </View>
      {data.map((item, index) => (
        <ItemCategory
          key={index}
          title={item.strCategory}
          url={item.strCategoryThumb}
          desc={item.strCategoryDescription}
        />
      ))}
    </View>
  );
}
