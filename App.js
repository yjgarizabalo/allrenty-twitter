import React, { useState, useEffect } from "react"

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const App = () => {

  const [data, setInfo] = useState([]);

  const getInfo = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a1b63d43c2msha035d86a859d696p18aa37jsnc666f95725de',
        'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
      }
    };

    fetch('https://twitter154.p.rapidapi.com/user/id?user_id=831684179544985602', options)
      .then(res=> res.json())
      .then(resJson => {
        console.log('data', resJson);
        setInfo(resJson);
      }).catch(err => {console.log(err)})
  }

  useEffect(() => {
    getInfo();
  }, []);



  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <View>
                <Text>{item.username}</Text>
              </View>
            )

          }}
        />
    </View>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    TextColor: '#232323',
  },
});

export default App;