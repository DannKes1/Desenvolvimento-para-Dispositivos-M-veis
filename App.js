
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screen/Home';
import Detalhes from './screen/Detalhes';
import Sobre from './screen/Sobre';
import Autor from './screen/Autor'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
   <Stack.Navigator initialRouteName = "Home">
    <Stack.Screen name = "Home" component = {Home} />
    <Stack.Screen name = "Detalhes" component = {Detalhes} />
    <Stack.Screen name = "Sobre" component = {Sobre} />
    <Stack.Screen name = "Autor" component = {Autor}/>
   </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
