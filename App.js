import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Router from './routes/router';

const getFonts = () =>
  Font.loadAsync({
    'poppins-reguler': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return <Router />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.log('error')}
      />
    );
  }
}
