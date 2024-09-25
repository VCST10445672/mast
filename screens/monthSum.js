import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image  } from 'react-native';

const MonthSumScreen = ({ navigation }) => {    //The IIE, 2024
  return (
    <View style={styles.container}>    //The IIE, 2024
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Select a Course</Text>

      <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('ChildMind')}>
        <Image source={require('../images/childMind.jpg')} style={styles.courseImage} />
        <Text style={styles.courseText}>Child Minding - R750</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('Cooking')}>
        <Image source={require('../images/cooking.jpg')} style={styles.courseImage} />
        <Text style={styles.courseText}>Cooking - R750</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('GardenMain')}>
        <Image source={require('../images/gardenMain.jpg')} style={styles.courseImage} />
        <Text style={styles.courseText}>Garden Maintenance - R750</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  courseButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  courseImage: {
    width: 100,
    height: 100,
  },
  courseText: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
});
export default MonthSumScreen;
