import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLORS, IMAGES, SCREENS, TEXTS} from '../../constant/Constant';
import LinearGradient from 'react-native-linear-gradient';
import {style} from './Style';
import {OutlineButton, PrimaryButton} from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {PropsPush, PropsRoute} from '../../navigation/TypeCheck';

export default function SplashScreen() {
  const navigation = useNavigation<PropsPush>();
  const onPressLogin = () => {
    navigation.push(SCREENS.MAINSCREEN);
  };

  return (
    <View style={[style.container]}>
      <Image
        source={IMAGES.backgroundSplashScreen}
        style={{width: '100%', height: '100%'}}
      />
      <LinearGradient
        style={[style.absolute]}
        colors={[COLORS.transparent, COLORS.black]}>
        <View style={[style.absolute, style.containerContent]}>
          <Text style={[style.title]}>Cooking a Delicious Food Easily</Text>
          <Text style={[style.subTitle]}>
            Discover more than 1200 food recipes in your hands and cooking it
            easily!
          </Text>
          <PrimaryButton
            style={style.mtLarge}
            title={TEXTS.LOGIN}
            onPress={() => onPressLogin()}
          />
          <OutlineButton
            style={style.mtSmall}
            title={TEXTS.SIGN_UP}
            onPress={() => ''}
          />
        </View>
      </LinearGradient>
    </View>
  );
}
