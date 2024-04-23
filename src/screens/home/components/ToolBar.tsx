import {View, Text, Image} from 'react-native';
import React from 'react';
import {IMAGES} from '../../../constant/Constant';
import {style} from '../Style';

export default function ToolBar() {
  return (
    <View style={[style.toolBarContainer]}>
      <View>
        <Text style={[style.toolBarTitle]}>Hello ByProgrammer,</Text>
        <Text style={[style.toolBarSubTitle]}>What you want to cook today</Text>
      </View>
      <Image source={IMAGES.avatar} style={[style.avatar]} />
    </View>
  );
}
