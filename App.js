import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Router from './routes/router';

const getFonts = () =>
  Font.loadAsync({
    'roboto-reguler': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return <Router />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts()}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.log('error')}
      />
    );
  }
}
