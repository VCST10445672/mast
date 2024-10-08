import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import { startersInfo } from '../screens/dishes.js'; 

const StarterScreen = ({ navigation }) => {
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    setDishes(startersInfo);
  }, []);

  const handleRemove = (id) => {
    setDishes(prevDishes => prevDishes.filter(dish => dish.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Starters</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Add')}>
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {dishes.map((dish) => (
          <View key={dish.id} style={styles.dishContainer}>
            <Image source={require('../images/placeholder.png')} style={styles.image} />
            <View style={styles.dishDetails}>
              <Text style={styles.dishName}>{dish.name}</Text>
              <Text style={styles.price}>{dish.price}</Text>
              <Text style={styles.description}>{dish.description}</Text>
              <View style={styles.editRemoveContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
                  <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleRemove(dish.id)}>
                  <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF8C00',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  backButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
  },
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dishContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  dishDetails: {
    flex: 1,
  },
  dishName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'right',
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    color: 'gray',
  },
  editRemoveContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editText: {
    color: 'blue',
  },
  removeText: {
    color: 'red',
  },
});

export default StarterScreen;
