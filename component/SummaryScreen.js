import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SummaryScreen = ({ route, navigation }) => {
  const { score, total } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Complete!</Text>
      <Text style={styles.result}>You scored {score} out of {total}</Text>
      <Button title="Retake Quiz" onPress={() => navigation.navigate('Quiz')} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgreen",
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },
  result: {
    fontSize: 20,
    marginBottom: 30
  }
});
export default SummaryScreen;
