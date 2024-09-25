import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const sixMonthCourses = [
  { id: '1', name: 'First Aid', price: 1500 },
  { id: '2', name: 'Sewing', price: 1500 },
  { id: '3', name: 'Landscaping', price: 1500 },
];

const sixWeekCourses = [
  { id: '4', name: 'Life Skills', price: 1500 },
  { id: '5', name: 'Child Minding', price: 750 },
  { id: '6', name: 'Cooking', price: 750 },
  { id: '7', name: 'Garden Maintenance', price: 750 },
];

const SelectScreen = ({ navigation }) => {    //The IIE, 2024
  const [selectedCourses, setSelectedCourses] = useState([]);

  const toggleCourse = (course) => {    devCamp[s.a.]
    setSelectedCourses((prevSelected) =>
      prevSelected.includes(course.id)
        ? prevSelected.filter((id) => id !== course.id)
        : [...prevSelected, course.id]
    );
  };

  const calculateTotal = () => {    //The IIE, 2024
    return selectedCourses.reduce((total, courseId) => {
      const course = [...sixMonthCourses, ...sixWeekCourses].find((c) => c.id === courseId);
      return total + (course ? course.price : 0);
    }, 0);
  };

  const calculateDiscount = (total) => {    //The IIE, 2024
    if (selectedCourses.length === 1) return 0;
    if (selectedCourses.length === 2) return total * 0.05;
    if (selectedCourses.length === 3) return total * 0.10;
    return total * 0.15;
  };

  const totalBeforeDiscount = calculateTotal();    //The IIE, 2024
  const discount = calculateDiscount(totalBeforeDiscount);
  const totalAfterDiscount = totalBeforeDiscount - discount;
  const vat = totalAfterDiscount * 0.15;
  const finalTotal = totalAfterDiscount + vat;

  return (    //The IIE, 2024
    <View style={styles.container}>    devCamp[s.a.]
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Select Your Courses</Text>

      <Text style={styles.categoryTitle}>Six-Month Courses</Text>
      <FlatList
        data={sixMonthCourses}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleCourse(item)}>
            <Text style={[styles.courseItem, selectedCourses.includes(item.id) && styles.selectedCourse]}>
              {item.name} - R{item.price}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />

      <Text style={styles.categoryTitle}>Six-Week Courses</Text>    
      <FlatList
        data={sixWeekCourses}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleCourse(item)}>
            <Text style={[styles.courseItem, selectedCourses.includes(item.id) && styles.selectedCourse]}>
              {item.name} - R{item.price}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />

      <Text style={styles.totalText}>Total: R{totalBeforeDiscount}</Text>

      <Button    
        title="CheckOut"
        onPress={() => navigation.navigate('SignIn', {
          selectedCourses: selectedCourses.map(id => [...sixMonthCourses, ...sixWeekCourses].find(course => course.id === id)),
          totalBeforeDiscount,
          discount,
          totalAfterDiscount,
          vat,
          finalTotal
        })}
        disabled={selectedCourses.length === 0} 
      />
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
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  courseItem: {
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },
  selectedCourse: {
    backgroundColor: '#d3d3d3',
  },
  totalText: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default SelectScreen;
