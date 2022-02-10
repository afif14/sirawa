import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const CircleIcon = ({ name, onPress }) => {
  return <Icon name={name} raised type='font-awesome' onPress={onPress} />;
};

export default CircleIcon;
