import { combineReducers } from '@reduxjs/toolkit'
import localState from './slice'

export const rootReducer = combineReducers({
  localState: localState,
})
