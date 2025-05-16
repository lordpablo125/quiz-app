import { arrayRadioOptions } from '@/constants/data'
import { View } from 'react-native'
import { RadioButton, Text } from 'react-native-paper'

const FourRadioButtons = ({
  value,
  onChange
}: {
  value: string
  onChange: (newValue: string) => void
}) => {
  return (
    <RadioButton.Group onValueChange={onChange} value={value}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20
        }}
      >
        {arrayRadioOptions.map((num) => (
          <View key={num} style={{ alignItems: 'center', marginHorizontal: 8 }}>
            <RadioButton value={num.toString()} />
            <Text>{num}</Text>
          </View>
        ))}
      </View>
    </RadioButton.Group>
  )
}

export default FourRadioButtons
