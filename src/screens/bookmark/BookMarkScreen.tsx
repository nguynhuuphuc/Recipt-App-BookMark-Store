import {View, Text, SafeAreaView, ScrollView, Touchable} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/Store';
import ItemCategory from '../../components/ItemCategory';
import {SIZES} from '../../constant/Constant';

export default function BookMarkScreen() {
  const listBookmark = useSelector((state: RootState) => state.bookmark.values);

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{paddingBottom: 64}}>
        {listBookmark.map((value, index) => (
          <ItemCategory
            url={value.url}
            title={value.id}
            desc={value.title}
            key={index}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
