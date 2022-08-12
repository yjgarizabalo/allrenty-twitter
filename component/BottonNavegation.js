import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { BottomNavigation } from 'react-native-paper';

// COMPONENTS VISTA
import Home from './views/Home';
import Twitt from './views/Twitt';
import Buscar from './views/Buscar';

const HomeRoute = () => <Home/>;
const TwittRoute = () => <Twitt/>;
const BuscarRoute = () => <Buscar/>;

const Navegacion = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', icon: 'home', color: '#795548', unfocusedIcon: 'heart-outline' },
        { key: 'twitt', title: 'Twitt', icon: 'twitter', color: '#795548' },
        { key: 'buscar', title: 'Buscar', icon: 'magnify', color: '#795548' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        twitt: TwittRoute,
        buscar: BuscarRoute,
    });

    const barStyle = {
        backgroundColor: '#1d8ef0'
    }

    return (
        <BottomNavigation
            barStyle={barStyle}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

const styles = StyleSheet.create({

});
export default Navegacion;