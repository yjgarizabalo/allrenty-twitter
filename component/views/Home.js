import React, { useState, useEffect } from 'react';

import { Text, StyleSheet, View } from 'react-native';
import { Button, Card, Title, Paragraph, Appbar, Avatar } from 'react-native-paper';

const Home = () => {

    const [info, setInfo] = useState([]);
    const [tw, setTw] = useState([]);
    const _goBack = () => console.log('Regresar');

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3c9e641730mshbd64b171d613732p1e409fjsn0661031039e5',
                'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
            }
        };

        const fetchData = async () => {
            try {
                const response = await fetch('https://twitter154.p.rapidapi.com/user/details?username=YairG77', options);
                const json = await response.json();
                setInfo(json)
            } catch (error) {
                console.log("error", error);
            }
        };

        const fetchTw = async () => {
            try {
                const response = await fetch('https://twitter154.p.rapidapi.com/user/tweets?username=JairG77&limit=100', options);
                const tw = await response.json();
                setTw(tw)
                console.log(tw.results);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
        fetchTw();
    }, []);

    return (
        <View>
            <Appbar.Header style={{ backgroundColor: '#E5E5E5' }}>
                <Appbar.BackAction onPress={_goBack} style={{ paddingRight: '0px', fontSize: '17px', fontWeight: 'bold' }} />
                <Appbar.Content title={info.name} />
            </Appbar.Header>

            <View style={styles.container}>
                <Avatar.Image size={60} source={{ uri: info.profile_pic_url }} />
                <Text style={{ FontWeight: 'bold', fontSize: '25px' }}>{info.name}</Text>
                <Text style={{ FontWeight: 'bold', fontSize: '12px' }}>{info.location}</Text>
                <Text style={{ fontSize: '14px', textAlign: 'center' }}>{info.description}</Text>
            </View>

            <View style={styles.containerTw}>
                <Card>
                    <Card.Content>
                        <Title>{info.username}</Title>
                        <Paragraph>hola</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </Card>
            </View>
        </View>
    )




};

const styles = StyleSheet.create({
    container: {
        paddingTop: '40px',
        alignItems: 'center',
        padding: '10px'
    },

    containerTw: {
        marginTop: '70px',
        padding: '10px'
    }
});


export default Home;