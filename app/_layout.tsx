import QueryProvider from '@/providers/QueryProvider'
import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })

  if (!loaded) return null

  return (
    <ThemeProvider value={DefaultTheme}>
      <QueryProvider>
        <Stack>
          <Stack.Screen
            name='index'
            options={{
              title: 'index',
              headerShown: true
            }}
          />
        </Stack>
        <StatusBar style='auto' />
      </QueryProvider>
    </ThemeProvider>
  )
}
