import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import { CartProvider} from './context/CartContext';

const App = () => {
    return (
        <CartProvider>
            <NavigationContainer>
                <DrawerNavigator />
            </NavigationContainer>
        </CartProvider>
    );
};

export default App;