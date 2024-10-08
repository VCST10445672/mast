import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const WeekSumScreen = ({ navigation }) => {    //The IIE, 2024
  return (
    <View style={styles.container}>    //The IIE, 2024
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('FirstAid')}>
        <Image source={require('../images/firstAid.jpg')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>First Aid - R1500</Text>
        <Text style={styles.courseDescription}>Provide first aid awareness and basic life support</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('Sewing')}>
        <Image source={require('../images/sewing.jpg')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Sewing - R1500</Text>
        <Text style={styles.courseDescription}>Provide alterations and new garment tailoring services</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('Landscaping')}>
        <Image source={require('../images/landScaping.jpg')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Landscaping - R1500</Text>
        <Text style={styles.courseDescription}>Provide landscaping services for new and established gardens</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.courseButton} onPress={() => navigation.navigate('LifeSkills')}>
        <Image source={require('../images/lifeSkills.jpg')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Life Skills - R1500</Text>
        <Text style={styles.courseDescription}>Provide skills to navigate basic life necessities</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({    //The IIE, 2024
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  courseButton: {
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  courseDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: 'gray',
  },
});

export default WeekSumScreen;

