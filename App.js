import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './src/pages/Home';
import Sobre from './src/pages/sobre';
import Formacao from './src/pages/Formacao';
import Experiencia from './src/pages/Experiencia';
import Cursos from './src/pages/Cursos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Formacao" component={Formacao} />
        <Stack.Screen name="Experiencia" component={Experiencia} />
        <Stack.Screen name="Cursos" component={Cursos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
