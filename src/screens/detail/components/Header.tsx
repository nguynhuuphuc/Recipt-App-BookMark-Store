import {View, Text, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import React from 'react';
import {
  COLORS,
  ICONS,
  IMAGES,
  NAME_ICONS,
  STORAGE_KEY,
} from '../../../constant/Constant';
import {style} from '../Style';
import {BlurView} from '@react-native-community/blur';
import storage from '../../../storage/storage';
import Toast from 'react-native-toast-message';
import {BookmarkType} from '../../../api/Type';

type Props = {
  url?: string;
  onBackPress?: Function;
  title?: string;
  id?: string;
};

export default function Header({url, onBackPress, id, title}: Props) {
  const onBookMark = () => {
    const dataBookmark = {
      id,
      title,
      url,
    };
    storage
      .load({key: STORAGE_KEY.bookmark})
      .then((data: BookmarkType[]) => {
        const filterData = data.filter(item => item.id == id);
        if (filterData.length > 0) return;
        const newData = [...data, dataBookmark];
        storage.save({
          key: STORAGE_KEY.bookmark,
          data: newData,
        });
      })
      .catch(reason => {
        storage.save({
          key: STORAGE_KEY.bookmark,
          data: [dataBookmark],
        });
      });
    Toast.show({
      type: 'success',
      text1: 'Bookmark Success',
    });
  };
  return (
    <View>
      <Image
        source={url != null ? {uri: url} : IMAGES.backgroundSplashScreen}
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

          <TouchableOpacity onPress={onBookMark}>
            <Image
              source={ICONS.bookMark}
              style={[style.icon24, style.tintPrimary]}
            />
          </TouchableOpacity>
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
