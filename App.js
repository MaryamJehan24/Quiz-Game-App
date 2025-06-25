
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './component/SplashScreen'; // Import the SplashScreen
import QuizScreen from './component/QuizScreen';
import SummaryScreen from './component/SummaryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash" // Set Splash as the initial route
        screenOptions={{
          headerStyle: {
            backgroundColor: 'green', 
          },
          headerTintColor: '#fff', // white 
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
            fontFamily: 'sans-serif-condensed', 
          },
          headerTitleAlign: 'center'
        }}
      >
        {/* Splash Screen - header is hidden */}
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Quiz Game" component={QuizScreen} />
        <Stack.Screen name="Summary" component={SummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
