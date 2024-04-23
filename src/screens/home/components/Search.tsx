import {View, Text, Image} from 'react-native';
import React from 'react';
import {InputWithIcon} from '../../../components/CustomInput';
import {style} from '../Style';
import {IMAGES, NAME_ICONS} from '../../../constant/Constant';

export default function Search() {
  return (
    <View style={[style.searchContainer]}>
      <InputWithIcon hint="Search Recipes" nameIcon={NAME_ICONS.search} />
      <View style={[style.cHintRecipe]}>
        <Image source={IMAGES.reciptBookMark} style={[style.imgHintRecipe]} />
        <View style={[style.subHintRecipe]}>
          <Text style={[style.texHintRecipe]}>
            You have 12 recipes that you haven't tried yet
          </Text>
          <Text style={[style.hintLink]}>See recipes</Text>
        </View>
      </View>
    </View>
  );
}
