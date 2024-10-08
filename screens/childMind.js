import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

const ChildMindScreen = ({ navigation }) => {    //The IIE, 2024
  return (
    <View style={styles.container}>    //The IIE, 2024
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Text style={styles.backButtonText}>Back</Text>
    </TouchableOpacity>

    <Image source={require('../images/childMind.jpg')} style={styles.logo} />

    <Text style={styles.title}>Child Minding</Text>
    <Text style={styles.price}>R750</Text>
    <Text style={styles.description}>
      Provide basic child and baby care.
    </Text>

    <Text style={styles.subTitle}>Topics Covered:</Text>
    <Text style={styles.topic}>
      - Safety and supervision practices{"\n"}
      - Feeding and nutrition guidelines{"\n"}
      - Age-appropriate activities
    </Text>

    <Text style={styles.duration}>Duration: 6 weeks</Text>

    <Button title="Go to CheckOut" onPress={() => navigation.navigate('Select')} />
  </View>
);
};

const styles = StyleSheet.create({    //The IIE, 2024
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
},
backButton: {
  backgroundColor: 'red',
  position: 'absolute',
  top: 40,
  left: 10,
  padding: 10,
  borderRadius: 5,
},
backButtonText: {
  color: 'white',
},
logo: {
  width: 300,
  height: 300,
  marginBottom: 20,
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
});


export default ChildMindScreen
