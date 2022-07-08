import { StyleSheet } from 'react-native';
import { normalize } from '../utils/normalize'

export const globalStyles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    fontFamily: 'roboto-reguler',
  },
  centerContainer: {
    alignItems: 'center',
  },
  textLg: {
    fontFamily: 'roboto-bold',
    fontSize: 48,
    lineHeight: 72,
    marginTop: 250,
    color: 'white'
  },
  textMd: {
    fontSize: 40,
    lineHeight: 45,
    fontWeight: 'bold',
    marginTop: 140,
    marginBottom: 20,
    color: '#EA855B'
  },
  textSm: {
    fontSize: 14,
    color: 'white'
  },
  textMenu: {
    fontSize: normalize(35),
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 70,
    marginLeft: 20,
    color: '#EA855B',
    fontFamily: 'serif'
  },
  textMenuSecond: {
    fontSize: normalize(25),
    color: '#EAC28F',
    marginBottom: 20,
    marginLeft: 20,
    marginTop: -8,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'serif'
  },
  input: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 34,
    marginTop: 8,
    backgroundColor: '#8E806A',
    marginVertical: 20
  },
  buttonText: {
    color: 'black',
    fontSize: normalize(16),
    fontFamily: 'roboto-bold',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
