import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SCREENS} from '../constant/Constant';

type MainStackParams = {
  SPLASHSCREEN: undefined;
  MAINSCREEN: undefined;
  DETAIL: {id: string};
};

export type MainPush = NativeStackNavigationProp<
  MainStackParams,
  SCREENS.MAINSCREEN
>;
export type DetailPush = NativeStackNavigationProp<
  MainStackParams,
  SCREENS.DETAIL
>;
export type PropsRouteDetail = RouteProp<MainStackParams, SCREENS.DETAIL>;
