import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const Auth = createStackNavigator(); //navegação em pilhas

const AuthRoutes: React.FC = () => {

    /*posso passar as propriedades do header gerado automaticamente, atraves da opção screenOptions exemplo screenOptions={{color: "#fff"}}*/
    return (
        <Auth.Navigator screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#312e38'}
        }}>
            <Auth.Screen name='SignIn' component={SignIn}></Auth.Screen>
            <Auth.Screen name='SignUp' component={SignUp}></Auth.Screen>
        </Auth.Navigator>
    );
}

export default AuthRoutes;