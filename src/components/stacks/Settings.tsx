import { StyleSheet, Text, View, Button } from 'react-native';

const Settings = ({ navigation }) => {


  return (
    <View>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Text>
         SETTINGS
      </Text>
    </View>
  )
}

export default Settings