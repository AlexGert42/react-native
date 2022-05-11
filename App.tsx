import { store } from '@context/store';
import { Provider } from 'react-redux';
import { Home, About, Settings } from '@components/stacks'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <Provider store={store}>
     
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>


    </Provider>
  )
}


