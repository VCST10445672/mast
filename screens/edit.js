import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const EditScreen = ({ navigation }) => {
  const [dishName, setDishName] = useState("Dish Name");
  const [dishPrice, setDishPrice] = useState("R 100.00");
  const [dishDescription, setDishDescription] = useState("Description of the dish");
  const [isStarter, setIsStarter] = useState(false);
  const [isMain, setIsMain] = useState(false);
  const [isDessert, setIsDessert] = useState(false);

  const handleSave = () => {
    // Logic to save the edited dish details
    console.log("Saved Dish Details:", {
      name: dishName,
      price: dishPrice,
      description: dishDescription,
      categories: {
        starter: isStarter,
        main: isMain,
        dessert: isDessert,
      },
    });
    // Optionally navigate back or show a success message
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Dish</Text>
      <View style={styles.imageUpload}>
        <Image source={require('../images/placeholder.png')} style={styles.image} />
        <Text style={styles.addImageText}>Edit Image</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox value={isStarter} onValueChange={setIsStarter} />
        <Text style={styles.checkboxLabel}>Starter</Text>
        <CheckBox value={isMain} onValueChange={setIsMain} />
        <Text style={styles.checkboxLabel}>Main</Text>
        <CheckBox value={isDessert} onValueChange={setIsDessert} />
        <Text style={styles.checkboxLabel}>Dessert</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Edit Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="R 0.00"
        value={dishPrice}
        onChangeText={setDishPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Edit description of food and ingredients."
        value={dishDescription}
        onChangeText={setDishDescription}
        multiline
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    backgroundColor: '#FF8C00',
    padding: 10,
  },
  imageUpload: {
    alignItems: 'center',
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
  },
  addImageText: {
    fontSize: 16,
    color: '#aaa',
  },
  image: {
    width: 150,
    height: 150,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkboxLabel: {
    marginRight: 10,
    marginLeft: 5,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    backgroundColor: '#90EE90',
    padding: 10,
    borderRadius: 5,
  },
  backButton: {
    backgroundColor: '#FFCCCB',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditScreen;
