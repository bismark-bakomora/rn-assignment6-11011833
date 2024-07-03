import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTitle: () => (
                    <Image source={require('../assets/Logo.png')}
                    style={styles.headerImage}/>
                ),
                headerRight: () => (
                    <View style={styles.headerRightContainer}>
                        <TouchableOpacity onPress={() => console.log('Pressed the search icon')}>
                            <Image source={require('../assets/Search.png')}
                            style={styles.headerIcon}/>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => console.log('Pressed the shopping bag')}>
                            <Image source={require('../assets/shoppingBag.png')}
                            style={styles.headerIcon}/>
                        </TouchableOpacity>
                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerTintColor: '#000000',
                headerTitleAlign: 'center',
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Cart" component={CartScreen} />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    headerRightContainer: {
        flexDirection: 'row',
        marginRight: 10,
    },
    headerIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    headerImage: {
        width: 100,
        height: 40,
        resizeMode: 'contain',
    },
});

export default DrawerNavigator;
