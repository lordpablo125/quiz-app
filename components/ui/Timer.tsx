import { StyleSheet, Text, View } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

export function Timer() {
  return (
    <View style={styles.timer}>
      <CountdownCircleTimer
        isPlaying
        duration={30}
        colors='#90EE90'
        onComplete={() => {
          // do your stuff here
          return { shouldRepeat: true, delay: 1.5 } // repeat animation in 1.5 seconds
        }}
      >
        {({ remainingTime }) => (
          <Text style={styles.description}>{remainingTime}</Text>
        )}
      </CountdownCircleTimer>
    </View>
  )
}

const styles = StyleSheet.create({
  description: {
    color: 'rgba(0,0,0,0.7)',
    fontSize: 32,
    fontStyle: 'normal'
  },
  timer: {
    alignItems: 'center',
    marginBottom: 30
  }
})
