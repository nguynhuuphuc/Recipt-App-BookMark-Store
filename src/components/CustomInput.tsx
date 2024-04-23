import {Image, TextInput, View} from 'react-native';
import {style} from './Style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, NAME_ICONS} from '../constant/Constant';

type Props = {
  hint?: string;
  nameIcon: string;
};

export const InputWithIcon = ({hint, nameIcon}: Props) => {
  return (
    <View style={[style.inputView]}>
      <Icon name={nameIcon} size={25} color={COLORS.gray} />
      <TextInput style={[style.input]} placeholder={hint} />
    </View>
  );
};
