import { useDispatch } from 'react-redux'

export function useThunkDispatch() {
  const dispatch = useDispatch()
  return dispatch
}
