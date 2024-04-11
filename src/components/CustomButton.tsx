import {GestureResponderEvent, Text, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {style} from './Style';

interface iProps {
  title: string;
  style?: ViewStyle;
  onPress?:
    | (((event: GestureResponderEvent) => void) & (() => void))
    | undefined;
}

export const PrimaryButton = (props: iProps) => {
  return (
    <TouchableOpacity
      style={[style.btnPrimary, props.style]}
      onPress={props.onPress}>
      <Text style={[style.btnTextColorWhite]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export const OutlineButton = (props: iProps) => {
  return (
    <TouchableOpacity
      style={[style.btnOutLine, props.style]}
      onPress={props.onPress}>
      <Text style={style.btnTextColorWhite}>{props.title}</Text>
    </TouchableOpacity>
  );
};
