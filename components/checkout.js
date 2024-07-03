import * as React from 'react-native';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Alert, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function Checkout() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Checkout} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}