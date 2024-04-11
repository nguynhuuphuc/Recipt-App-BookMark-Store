import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SCREENS} from '../constant/Constant';

type MainStackParams = {
  SPLASHSCREEN: undefined;
  MAINSCREEN: undefined;
};

export type PropsPush = NativeStackNavigationProp<
  MainStackParams,
  SCREENS.MAINSCREEN
>;
export type PropsRoute = RouteProp<MainStackParams, SCREENS.MAINSCREEN>;
