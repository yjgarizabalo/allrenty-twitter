import React from "react"

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

// COMPONENTES
import Navegacion from "./component/BottonNavegation";

const App = () => {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navegacion />
    </View>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;