import React from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

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
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  contactInfo: {
    fontSize: 16,
    marginVertical: 5,
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
  navButton: {
    backgroundColor: '#007BFF', // Bootstrap primary color
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%', // Adjust width to fit nicely
    alignItems: 'center',
  },
  navButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;


