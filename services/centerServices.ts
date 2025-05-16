import { useMutation, useQuery } from '@tanstack/react-query'
import { getQuizData, saveQuizData } from './FakeHttpRequest'

export const useGetQuizData = () => {
  const query = useQuery({
    queryKey: ['quiz'],
    queryFn: getQuizData
  })

  return query
}

export const useSaveQuizData = () =>
  useMutation({
    mutationFn: saveQuizData
  })
