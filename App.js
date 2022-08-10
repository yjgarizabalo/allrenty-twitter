import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  componentDidMount = () => {
    fetch('https://twitter154.p.rapidapi.com/user/id?user_id=831684179544985602', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a1b63d43c2msha035d86a859d696p18aa37jsnc666f95725de',
        'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
      }
    })
  
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })

    .catch((error) => {
      console.error(error)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>allrenty</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
