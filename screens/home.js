import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert, Modal, TextInput } from 'react-native';

<<<<<<< HEAD
const HomeScreen = ({ navigation }) => {
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [targetScreen, setTargetScreen] = useState('');

  const handlePasswordSubmit = () => {
    if (inputPassword === 'pass123') {
      setPasswordModalVisible(false);
      navigation.navigate(targetScreen);
    } else {
      Alert.alert('Error', 'Incorrect password. Please try again.');
    }
  };

  const openPasswordModal = (screenName) => {
    setTargetScreen(screenName);
    setPasswordModalVisible(true);
    setInputPassword('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Today's Menu</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Starter</Text>
        <View style={styles.course}>
          <Image source={require('../images/peaSoup.jpg')} style={styles.image} />
          <View style={styles.courseDetails}>
            <Text style={styles.dishName}>Cat Vommit</Text>
            <Text style={styles.price}>R5.50</Text>
            <Text style={styles.description}>
              A beautiful clasic pea soup. The perfect stater for any meal. With each bowl of the soup you get a stick of cut up polony. This creamy, delisios, high protien soup is very healthy.
            </Text>
            <Text style={styles.description}>120g of Protein, 500g of Calories and 2g of Fat.</Text>
            <TouchableOpacity style={styles.changeButton} onPress={() => openPasswordModal('Starters')}>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Main</Text>
        <View style={styles.course}>
          <Image source={require('../images/dinoNug.jpg')} style={styles.image} />
          <View style={styles.courseDetails}>
            <Text style={styles.dishName}>Mount Magestic Nugs</Text>
            <Text style={styles.price}>R0.00</Text>
            <Text style={styles.description}>
              In a world long before you and me, the planet was rulled by oversized chickens. This meal is but a scale replica of the time long foggoten. This dish is sure to make any history buff enjou their veggies.
            </Text>
            <Text style={styles.description}>320g of Protein, 1500g of Calories and 10g of Fat.</Text>
            <TouchableOpacity style={styles.changeButton} onPress={() => openPasswordModal('Mains')}>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dessert</Text>
        <View style={styles.course}>
          <Image source={require('../images/smile.jpg')} style={styles.image} />
          <View style={styles.courseDetails}>
            <Text style={styles.dishName}>Pure Joy</Text>
            <Text style={styles.price}>R0.00</Text>
            <Text style={styles.description}>
              This dish captures the essiance of what makes the wold good. The chocolate topped waffle with a side of mapple syrup is sure to turn any frown that touches it into a smile.
            </Text>
            <Text style={styles.description}>4g of Protein, 4300g of Calories and 500g of Fat.</Text>
            <TouchableOpacity style={styles.changeButton} onPress={() => openPasswordModal('Deserts')}>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={passwordModalVisible}
        onRequestClose={() => setPasswordModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter Admin Password</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.passwordInput}
              placeholder="Enter password"
              value={inputPassword}
              onChangeText={setInputPassword}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={handlePasswordSubmit}>
                <Text style={styles.modalButtonText}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={() => setPasswordModalVisible(false)}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
=======
const HomeScreen = ({ navigation }) => {    //The IIE, 2024
  return (
    <View style={styles.container}>    //The IIE, 2024
      <Image source={require('../images/logo.png')} style={styles.logo} />
      
      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('WeekSum')}>
        <Text style={styles.navButtonText}>Go to Week Summary</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('MonthSum')}>
        <Text style={styles.navButtonText}>Go to Month Summary</Text>
      </TouchableOpacity>
      
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        Empowering a nation means helping it grow stronger in its economy, society, and politics. This involves giving all citizens the tools, knowledge, and opportunities they need to participate fully in the nation's development. It's about more than just economic growth; it includes creating a sense of belonging, equality, and cultural richness. By investing in education, healthcare, infrastructure, and innovation, a nation aims to improve people's lives and encourage personal growth. It also means ensuring that everyone has fair access to resources and opportunities, eliminating unfairness, and valuing different perspectives. In essence, empowering a nation is about building a resilient, progressive, and self-reliant society that can shape its own future. This involves teaching people values that help them live fulfilling lives while contributing to the society's shared goals. Investing in education is crucial for empowering a nation, as it equips people with the skills they need for success. Promoting gender equality, protecting human rights, ensuring good governance, and fostering peace and security are also essential for a strong and prosperous nation.
      </Text>

      <Text style={styles.contactTitle}>CONTACT DETAILS:</Text>
      <Text style={styles.contactInfo}>• TEL: (012) 942-5457</Text>
      <Text style={styles.contactInfo}>• WHATSAPP: (087) 015-5546</Text>
      <Text style={styles.contactInfo}>• EMAIL: info@empowernation.com</Text>
>>>>>>> 5bb3547fcd725b0b2d02ba67d67c4fc4653584c2
    </View>
  );
};

const styles = StyleSheet.create({    //The IIE, 2024
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    backgroundColor: '#FF8C00',
    padding: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: '#FF8C00',
    padding: 10,
  },
  course: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    position: 'relative',
  },
  image: {
    width: 190,
    height: 190,
    marginRight: 10,
  },
  courseDetails: {
    flex: 1,
  },
  dishName: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'right',
  },
  description: {
    marginTop: 2,
    fontSize: 16,
    color: 'black',
  },
  changeButton: {
    position: 'absolute',
    right: 1,
    bottom: 1,
    backgroundColor: '#FFCCCB',
    padding: 5,
    borderRadius: 5,
  },
  changeText: {
    color: 'black',
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  passwordInput: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    backgroundColor: '#FF8C00',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: 'red',
  },
});

export default HomeScreen;
