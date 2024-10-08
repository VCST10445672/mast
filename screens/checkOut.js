import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CheckOutScreen = ({ navigation, route }) => {    //The IIE, 2024
  const { selectedCourses, totalBeforeDiscount, discount, totalAfterDiscount, vat, finalTotal, email, phone, name } = route.params;

  return (
    <View style={styles.container}>    //The IIE, 2024
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Checkout</Text>

      <Text style={styles.subtitle}>Courses:</Text>
      {selectedCourses.map((course, index) => (
        <Text key={index}>{course.name} - R{course.price}</Text>
      ))}

      <Text>Number of courses: {selectedCourses.length}</Text>
      <Text>Discount: R{discount.toFixed(2)}</Text>
      <Text>Total Amount before VAT: R{totalAfterDiscount.toFixed(2)}</Text>
      <Text>VAT (15%): R{vat.toFixed(2)}</Text>
      <Text style={styles.finalTotal}>Final Total Amount: R{finalTotal.toFixed(2)}</Text>

      <Text style={styles.subtitle}>Contact Details:</Text>
      <Text>Email: {email}</Text>
      <Text>Phone: {phone}</Text>
      <Text>Name: {name}</Text>

      <Button title="Submit Contact Information" onPress={() => alert('You will be contacted soon.')} />
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
  subtitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  finalTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default CheckOutScreen;

