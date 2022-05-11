import { StyleSheet, Text, View, Button } from 'react-native';
import { Home, About } from '@components/stacks'


import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

const Navigation = () => {


  return (
   
    
  )
}

export default Navigation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textActive: {
    fontSize: 30,
    color: 'red'
  },
  text: {
    fontSize: 30,
    color: 'blue'
  },
});