import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const CircleIcon = ({ name, onPress, style }) => {
  return <Icon name={name} raised type='font-awesome' onPress={onPress} style={style}/>;
};

export default CircleIcon;
