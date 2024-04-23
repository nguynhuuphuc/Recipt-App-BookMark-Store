import {View, Text, Image} from 'react-native';
import React from 'react';
import {IMAGES} from '../constant/Constant';
import {style} from './Style';

type Props = {
  url: string;
  title: string;
  desc: string;
};

export default function ItemCategory({url, title, desc}: Props) {
  return (
    <View style={[style.cItemCategory]}>
      <Image
        resizeMode="contain"
        source={{uri: url}}
        style={[style.itemCategoryImg]}
      />
      <View style={[style.itemCategoryWrapper]}>
        <Text style={[style.itemCategoryTitle, style.textColorBlack]}>
          {title}
        </Text>
        <Text numberOfLines={1} style={[style.textColorBlack]}>
          {desc}
        </Text>
      </View>
    </View>
  );
}
