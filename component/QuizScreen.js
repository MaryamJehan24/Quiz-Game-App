import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  StyleSheet,
  Image,
  ActivityIndicator
} from 'react-native';
import questions from '../data/questions.json';

const QuizScreen = ({ navigation }) => {
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleAnswer = (option) => {
    if (selectedOption !== null) return;

    setSelectedOption(option);
    const correctAnswer = questions[currentIndex].answer;
    if (option === correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
        setSelectedOption(null);
      } else {
        navigation.navigate('Summary', {
          score: option === correctAnswer ? score + 1 : score,
          total: questions.length
        });
      }
    }, 800);
  };

  const renderItem = () => {
    const item = questions[currentIndex];
    return (
      <View style={styles.container}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.question}>{item.question}</Text>
        {item.options.map((option, index) => {
          const isSelected = selectedOption === option;
          const isCorrect = option === item.answer;

          return (
            <TouchableHighlight
              key={index}
              style={styles.optionWrapper}
              underlayColor="#ccc"
              onPress={() => handleAnswer(option)}
            >
              <View style={styles.optionRow}>
                <View
                  style={[
                    styles.optionCircle,
                    isSelected && (isCorrect ? styles.correctCircle : styles.wrongCircle)
                  ]}
                >
                  {isSelected && (
                    <Text style={styles.checkmark}>
                      {isCorrect ? '✓' : '✗'}
                    </Text>
                  )}
                </View>
                <Text style={styles.optionText}>{option}</Text>
              </View>
            </TouchableHighlight>
          );
        })}
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={{ marginTop: 10 }}>Loading Quiz...</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={[questions[currentIndex]]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#d4fcd4'
  },
  container: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  optionWrapper: {
    marginVertical: 6
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  optionCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginRight: 12
  },
  correctCircle: {
    backgroundColor: 'green'
  },
  wrongCircle: {
    backgroundColor: 'red'
  },
  checkmark: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold'
  },
  optionText: {
    fontSize: 16
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default QuizScreen;


