import "react-native-gesture-handler";  //nevegacao
import { StatusBar } from 'expo-status-bar'; //status bar
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading  from "expo-app-loading"; // loading
import{useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold} from '@expo-google-fonts/montserrat'
import Routes from "./src/router";

export default function App() {
  // CARREGAR AS FONTES
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
  });

  if (!fontsLoaded){
    return <AppLoading/>;
  }
  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={false}/>  
      <Routes/>
    </>
  );
}