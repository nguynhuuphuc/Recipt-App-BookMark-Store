import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/splash/SplashScreen';
import HomeScreen from '../screens/home/HomeScreen';
import {SCREENS} from '../constant/Constant';
import MainScreen from '../bottomTab/MainScreen';
import Detail from '../screens/detail/Detail';
const Stack = createStackNavigator();
export const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREENS.SPLASHSCREEN} component={SplashScreen} />
      <Stack.Screen
        name={SCREENS.MAINSCREEN}
        component={MainScreen}
        options={{...TransitionPresets.SlideFromRightIOS}}
      />
      <Stack.Screen
        name={SCREENS.DETAIL}
        component={Detail}
        options={{...TransitionPresets.SlideFromRightIOS}}
      />
    </Stack.Navigator>
  );
};
