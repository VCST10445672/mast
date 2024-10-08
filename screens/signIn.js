import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

const SignInScreen = ({ navigation, route }) => {    //The IIE, 2024
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const { selectedCourses, totalBeforeDiscount, discount, totalAfterDiscount, vat, finalTotal } = route.params || { selectedCourses: [], totalBeforeDiscount: 0, discount: 0, totalAfterDiscount: 0, vat: 0, finalTotal: 0 }; // Default to empty values

  const handleLogin = () => {    //The IIE, 2024
    if (!email || !phone || !name) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    navigation.navigate('CheckOut', {
      email,
      phone,
      name,
      selectedCourses,
      totalBeforeDiscount,
      discount,
      totalAfterDiscount,
      vat,
      finalTotal,
    });
  };

  return (
    <View style={styles.container}>    //The IIE, 2024
      <Text style={styles.title}>The following is how you will receive more info after checkout</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <Button title="Login" onPress={handleLogin} />
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
  title: {
    justifyContent: 'center',
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default SignInScreen;

