import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, ICONS, IMAGES, NAME_ICONS, SIZES} from '../constant/Constant';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {style} from './Style';

type Props = {
  url: string;
  category: string;
  title: string;
  tag: string;
  onPress?: Function;
};

export default function ItemFood(props: Props) {
  return (
    <TouchableOpacity
      style={[style.marginEndSmall]}
      onPress={() => {
        props.onPress != null ? props.onPress() : null;
      }}>
      <Image
        source={{uri: props.url}}
        resizeMode="cover"
        style={[style.itemImg]}
      />
      <View style={[style.itemCard]}>
        <View style={[style.itemCategory]}>
          <Text style={[style.itemTextColor]}>{props.category}</Text>
        </View>
        <View style={[style.itemContainerContent]}>
          <View style={{flex: 1}}>
            <Text style={[style.itemTextColor, style.itemTitle]}>
              {props.title}
            </Text>
            <Text style={[style.itemTextColor]}>{props.tag}</Text>
          </View>

          <Icon
            name={NAME_ICONS.bookMark}
            size={SIZES.iconSmall}
            color={COLORS.primary}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
