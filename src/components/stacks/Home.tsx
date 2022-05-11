import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {


  return (
    <View>
      <Button
        title="About"
        onPress={() => navigation.navigate('About')}
      />
        <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Text>
         fhgsuguygiuhfdgiu fhg hfkgjhfkjhgkjfhkgjfhjkg hjh fjghfjgh jagh iot'
      </Text>
    </View>
  )
}

export default Home