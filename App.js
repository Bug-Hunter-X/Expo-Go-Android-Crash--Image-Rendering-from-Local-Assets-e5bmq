import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.box} >
          <Image source={require('./assets/image1.png')} style={styles.image} />
          <Text style={styles.text}>Image 1</Text>
        </View>

        <View style={styles.box} >
          <Image source={require('./assets/image2.png')} style={styles.image} />
          <Text style={styles.text}>Image 2</Text>
        </View>

        {/* More boxes here */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  box: {
    width: '90%',
    height: 200,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;