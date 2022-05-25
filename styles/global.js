import { StyleSheet } from 'react-native';
import {ratioHeight, ratioWidth} from './metric.js'

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FFE9D0',
    padding: 24,
    flex: 1,
    fontFamily: 'poppins-reguler',
  },
  centerContainer: {
    alignItems: 'center',
  },
  textLg: {
    fontFamily: 'poppins-bold',
    fontSize: 48,
    lineHeight: 72,
    marginTop: 250 + ratioHeight,
  },
  textMd: {
    fontSize: 30,
    lineHeight: 45,
    fontWeight: 'bold',
    marginTop: 140 + ratioHeight,
    marginBottom: 20,
  },
  textSm: {
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
});
