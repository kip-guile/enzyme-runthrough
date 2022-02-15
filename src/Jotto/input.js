import React from 'react'
import { useSelector } from 'react-redux'
import { useThunkDispatch } from './hooks/useThunkDIspatch'

const Input = () => {
  const dispatch = useThunkDispatch()
  const { success } = useSelector((state) => state.localState)

  return <div />
}

export default Input
