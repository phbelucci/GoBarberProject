import 'react-native-gesture-handler'; //este import é responsavel pela navegação por gestos no react-native
import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes/index';


const App: React.FC = () => (
 
        <NavigationContainer>
            
            <StatusBar barStyle="light-content" backgroundColor="#312e38" ></StatusBar>
            <View style={{flex: 1, backgroundColor: '#312e38'}}>
                <Routes></Routes>
            </View>
        </NavigationContainer>

) 

export default App;