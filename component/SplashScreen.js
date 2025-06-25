import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Navigate to the QuizScreen after 2 seconds
    const timer = setTimeout(() => {
      navigation.replace('Quiz Game');
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); 
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={require('../assets/adaptive-icon.png')} style={styles.logo} /> 
      <ActivityIndicator size="large" color="#007AFF" />
      <Text style={styles.text}>Welcome to the Quiz App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d4fcd4',
  },
  text: {
    fontSize: 24,
    marginTop: 20,
  },
  logo: {
    width: 150,  
    height: 150, 
    resizeMode: 'contain', 
  },
});
export default SplashScreen;
