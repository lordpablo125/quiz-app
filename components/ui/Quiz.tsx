import { Questions } from '@/components/ui/Questions'
import { Timer } from '@/components/ui/Timer'
import { useGetQuizData, useSaveQuizData } from '@/services/centerServices'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'

const Quiz = () => {
  const [answers, setAnswers] = useState<{ [questionId: number]: string }>({})
  const { data, isLoading } = useGetQuizData()
  const { mutate: saveQuizData } = useSaveQuizData()
  const quizData = data?.data ?? []
  const onPress = () => {
    saveQuizData(answers)
  }

  if (isLoading) {
    return (
      <>
        <Text style={styles.description}>Loading...</Text>
      </>
    )
  }

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.timer}>
        <Timer />
      </View>
      <Text style={styles.mainTitle}>Quiz</Text>
      {!isLoading &&
        quizData.map((item, indx) => (
          <View key={item.title + indx} style={styles.quizContainer}>
            <Text style={styles.title}>
              {indx + 1} - {item.title}
            </Text>
            <Text style={styles.description}>{item.description}</Text>
            <Questions
              dataIndex={indx}
              questions={item.questions}
              answers={answers}
              setAnswers={setAnswers}
            />
          </View>
        ))}
      <Button
        mode='contained'
        onPress={onPress}
        style={styles.button}
        labelStyle={styles.label}
      >
        Submit
      </Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 8
  },
  quizContainer: {
    backgroundColor: 'azure',
    marginBottom: 20,
    paddingVertical: 27,
    paddingHorizontal: 22
  },
  mainTitle: {
    color: 'black',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  title: {
    color: 'darkslategray',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 16
  },
  description: {
    color: 'rgba(0,0,0,0.7)',
    fontSize: 18,
    fontStyle: 'italic'
  },
  timer: {
    alignItems: 'center',
    marginBottom: 30
  },
  button: {
    backgroundColor: 'teal',
    borderRadius: 8,
    marginTop: 16
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default Quiz
