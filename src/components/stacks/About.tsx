import { StyleSheet, Text, View, Button } from 'react-native';
const About = ({ navigation }) => {


  return (
    <View>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Text>
        HGJFHGJHFJ GDFJ JSHJG HSJHG JHGJAH
      </Text>
    </View>
  )
}

export default About