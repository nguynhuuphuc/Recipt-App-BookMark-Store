import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {IMAGES} from '../../../constant/Constant';
import {style} from '../Style';
import {useRoute} from '@react-navigation/native';
import {useGetDetailMealQuery} from '../../../api/FoodApi';
import {PropsRouteDetail} from '../../../navigation/TypeCheck';
import {Meal} from '../../../api/Type';

type Props = {
  meal?: Meal;
};

export default function Body({meal}: Props) {
  return (
    <ScrollView
      style={[style.bodyContainer]}
      contentContainerStyle={{paddingBottom: 24}}>
      <View style={[style.bTitleWrapper]}>
        <Text style={[style.bTitleText, style.colorBlack]}>
          {meal?.strMeal}
        </Text>
        <Image source={IMAGES.avatar} style={[style.avatar]} />
        <Image source={IMAGES.avatar} style={[style.avatarLeft]} />
        <Image source={IMAGES.avatar} style={[style.avatarLeft]} />
        <Image source={IMAGES.avatar} style={[style.avatarLeft]} />
      </View>
      <View style={[style.bTitleWrapper]}>
        <Text style={[style.bSubText]}>
          {meal?.strCategory} | {meal?.strArea}
        </Text>
        <View>
          <Text style={[style.bSubText, style.textAlignRight]}>4 people</Text>
          <Text style={[style.bSubText, style.textAlignRight]}>
            Already try this
          </Text>
        </View>
      </View>
      <Text style={[style.bIngredientText, style.colorBlack]}>
        Instructions
      </Text>
      <Text style={[style.colorBlack]}>{meal?.strInstructions}</Text>

      <View>
        <View style={[style.bTitleWrapper]}>
          <Text style={[style.bIngredientText, style.colorBlack]}>
            Ingredients
          </Text>
          <Text style={[style.flex_end]}>6 items</Text>
        </View>
        <View style={[style.bIngredientItems]}>
          <Text>{meal?.strIngredient1}</Text>
          <Text>{meal?.strMeasure1}</Text>
        </View>

        <View style={[style.bIngredientItems]}>
          <Text>{meal?.strIngredient2}</Text>
          <Text>{meal?.strMeasure2}</Text>
        </View>

        <View style={[style.bIngredientItems]}>
          <Text>{meal?.strIngredient3}</Text>
          <Text>{meal?.strMeasure3}</Text>
        </View>

        <View style={[style.bIngredientItems]}>
          <Text>{meal?.strIngredient4}</Text>
          <Text>{meal?.strMeasure4}</Text>
        </View>

        <View style={[style.bIngredientItems]}>
          <Text>{meal?.strIngredient5}</Text>
          <Text>{meal?.strMeasure5}</Text>
        </View>

        <View style={[style.bIngredientItems]}>
          <Text>{meal?.strIngredient6}</Text>
          <Text>{meal?.strMeasure6}</Text>
        </View>

        <View style={[style.bIngredientItems]}>
          <Text>{meal?.strIngredient7}</Text>
          <Text>{meal?.strMeasure7}</Text>
        </View>

        <View style={[style.bIngredientItems]}>
          <Text>{meal?.strIngredient8}</Text>
          <Text>{meal?.strMeasure8}</Text>
        </View>

        <View style={[style.bIngredientItems]}>
          <Text>{meal?.strIngredient9}</Text>
          <Text>{meal?.strMeasure9}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
