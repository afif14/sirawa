import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FFE9D0',
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
  },
  textMd: {
    fontSize: 30,
    lineHeight: 45,
    fontWeight: 'bold',
    marginTop: 140,
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
