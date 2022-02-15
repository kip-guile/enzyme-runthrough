import { createStore } from '@reduxjs/toolkit'
import checkPropTypes from 'prop-types/checkPropTypes'
import localSlice from '../Jotto/store'

export const findTestByAttrr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  )
  expect(propError).toBeUndefined()
}

export const storeFactory = (initialState) => {
  return createStore(localSlice, initialState)
}
