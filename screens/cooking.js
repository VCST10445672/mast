import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

const CookingScreen = ({ navigation }) => {    //The IIE, 2024
  return (
    <View style={styles.container}>    //The IIE, 2024
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      
      <Image source={require('../images/cooking.jpg')} style={styles.logo} />
      
      <Text style={styles.title}>Cooking</Text>
      <Text style={styles.price}>R750</Text>
      <Text style={styles.description}>
        Prepare and cook nutritious family meals.
      </Text>

      <Text style={styles.subTitle}>Topics Covered:</Text>
      <Text style={styles.topic}>
        - Nutritional requirements for a healthy body{"\n"}
        - Types of protein, carbohydrates, and vegetables{"\n"}
        - Planning meals{"\n"}
        - Preparation and cooking of meals
      </Text>

      <Text style={styles.duration}>Duration: 6 weeks</Text>

      <Button title="Go to CheckOut" onPress={() => navigation.navigate('Select')} />
    </View>
  );
};

const styles = StyleSheet.create({    //The IIE, 2024
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  topic: {
    fontSize: 16,
    marginBottom: 20,
  },
  duration: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 40,
    left: 10,
    padding: 5,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
  },
});

export default CookingScreen;
