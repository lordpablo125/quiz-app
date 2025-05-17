import { StyleSheet, View } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import FiveRadioButtons from './FourRadioButtons'

type Question = {
  id: number
  index: number
  text: string
  answerType: string
}

type QuestionsProps = {
  dataIndex: number
  questions: Question[]
  answers: { [key: string]: string }
  setAnswers: React.Dispatch<
    React.SetStateAction<{ [questionId: number]: string }>
  >
}

export default function Questions({
  dataIndex,
  questions,
  answers,
  setAnswers
}: QuestionsProps) {
  return (
    <View style={styles.questions}>
      {questions.map((question, idx) => (
        <View key={question.text + idx}>
          <FiveRadioButtons
            value={answers[`${question.id}${dataIndex}`] || ''}
            onChange={(newVal) =>
              setAnswers((prev) => ({
                ...prev,
                [`${question.id}${dataIndex}`]: newVal
              }))
            }
          />
          <Text style={styles.description}>{question.text}</Text>
          <Divider style={styles.divider} />
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  questions: {
    padding: 12,
    marginBottom: 20
  },
  divider: {
    marginVertical: 20
  },
  description: {
    color: 'rgba(0,0,0,0.7)',
    fontSize: 18
  }
})
