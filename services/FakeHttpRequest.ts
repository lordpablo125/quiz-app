import { data } from '@/constants/data'

function withDelay<T>(data: T, delay = 2000): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay)
  })
}

export const getQuizData = () => {
  const response = {
    data,
    status: 200
  }
  return withDelay(response)
}

export const saveQuizData = (data: { [questionId: number]: string }) => {
  console.log('***  ~ saveQuizData:', data)

  const response = {
    status: 200
  }
  return withDelay(response)
}
