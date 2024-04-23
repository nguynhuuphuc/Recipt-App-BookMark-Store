import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant/Constant';
import ToolBar from './components/ToolBar';
import {InputWithIcon} from '../../components/CustomInput';
import Search from './components/Search';
import {style} from './Style';
import Trending from './components/Trending';
import Category from './components/Category';

export default function HomeScreen() {
  return (
    <SafeAreaView style={[style.home]}>
      <ToolBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 56}}>
        <Search />
        <Trending />
        <Category />
      </ScrollView>
    </SafeAreaView>
  );
}
