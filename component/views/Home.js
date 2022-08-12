import React, { useState, useEffect } from 'react';

import { Text, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Appbar } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Home = () => {

    const [info, setInfo] = useState([]);
    const _goBack = () => console.log('Regresar');

    // useEffect(() => {
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': 'a1b63d43c2msha035d86a859d696p18aa37jsnc666f95725de',
    //             'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
    //         }
    //     };

    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('https://twitter154.p.rapidapi.com/user/details?username=YairG77', options);
    //             const json = await response.json();
    //             console.log(json);
    //             setInfo(json)
    //         } catch (error) {
    //             console.log("error", error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        
        <Appbar.Header style={{ backgroundColor: '#E5E5E5' }}>
            <Appbar.BackAction onPress={_goBack} style={{ paddingRight: "15px" }} />
            <Appbar.Content title="" />
        </Appbar.Header>
    )



    //   <Card>
    //     <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    //     <Card.Content>
    //       <Title>Card title</Title>
    //       <Paragraph>Card content</Paragraph>
    //     </Card.Content>
    //     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    //     <Card.Actions>
    //       <Button>Cancel</Button>
    //       <Button>Ok</Button>
    //     </Card.Actions>
    //   </Card>
    };

const styles = StyleSheet.create({
    bar: {
        backgroundColor: '#1d8ef0'
    }
});


export default Home;