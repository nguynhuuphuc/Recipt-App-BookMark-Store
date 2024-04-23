import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, ICONS, IMAGES, NAME_ICONS} from '../../../constant/Constant';
import {style} from '../Style';
import {BlurView} from '@react-native-community/blur';

type Props = {
  onBackPress?: Function;
};

export default function Header({onBackPress}: Props) {
  return (
    <View>
      <Image
        source={IMAGES.backgroundSplashScreen}
        style={{width: '100%', height: 300}}
      />
      <View style={[style.headerAbsolute]}>
        <View style={[style.headerToolBar]}>
          <TouchableOpacity
            style={[style.borderRadiusBlurViewInside]}
            onPress={() => (onBackPress ? onBackPress() : null)}>
            <BlurView blurAmount={10}>
              <Image
                source={ICONS.back}
                style={[style.icon32, style.tintWhite]}
              />
            </BlurView>
          </TouchableOpacity>

          <Image
            source={ICONS.bookMark}
            style={[style.icon24, style.tintPrimary]}
          />
        </View>
        <View style={[style.borderRadiusBlurViewInside]}>
          <BlurView blurType="dark" blurAmount={10}>
            <View style={[style.authorWrapper]}>
              <Image source={IMAGES.avatar} style={[style.avatar]} />
              <View>
                <Text style={[style.colorGray]}>Recipe by:</Text>
                <Text style={[style.authorName]}>Maria</Text>
              </View>
              <TouchableOpacity style={[style.authorMore]}>
                <Image
                  source={ICONS.right_arrow}
                  style={[style.icon32, style.tintColorWhite]}
                />
              </TouchableOpacity>
            </View>
          </BlurView>
        </View>
      </View>
    </View>
  );
}
