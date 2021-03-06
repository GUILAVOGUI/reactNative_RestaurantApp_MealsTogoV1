import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Searchbar } from 'react-native-paper';
import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Platform
} from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';

import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';




import { theme } from './src/infrastructure/theme';
import RestaurantScreen from './src/features/restaurants/screens/restaurant-screen'



export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });


  const [latoLoaded] = useLato({
    Lato_400Regular,
  });



  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

  return (

    <>
      <ThemeProvider
        theme={theme}
      >
        <RestaurantScreen />
        <ExpoStatusBar style="auto" />

      </ThemeProvider>


    </>

  );
}

