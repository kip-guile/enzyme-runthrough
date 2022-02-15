import React from 'react'
import { useSelector } from 'react-redux'
import { useThunkDispatch } from './hooks/useThunkDIspatch'

const Input = () => {
  const dispatch = useThunkDispatch()
  const { success } = useSelector((state) => state.localState)
  const contents = success ? null : (
    <form className='form-inline'>
      <input
        data-test='input-box'
        className='mb-2 mx-sm-3'
        placeholder='enter guess'
      />
      <button
        data-test='submit-button'
        type='submit'
        className='btn btn-primary mb-2'
      >
        Submit
      </button>
    </form>
  )
  return <div data-test='component-input'>{contents}</div>
}

export default Input
