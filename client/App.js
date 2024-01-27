import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TouchableOpacity, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.titleText}>
      {'Back To The Market'}
      {'\n'}
      </Text>

      <TouchableOpacity onPress={() => Alert.alert('Negotiation starting')} style={styles.button}>
        <Text style={styles.text}>Negotiate</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />

    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    fontSize: 40,
  },

  button: {
    borderRadius: 200, // High value to ensure it's completely round
    width: 200, // Diameter of the circle
    height: 200, // Diameter of the circle
    backgroundColor: '#007bff', // Choose your color
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
  },

  text: {
    color: 'white',
    fontSize: 35, // Adjust as needed
  },
});
