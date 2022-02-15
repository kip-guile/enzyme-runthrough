import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  success: false,
}

const localState = createSlice({
  name: 'state',
  initialState: initialState,
  reducers: {
    correctGuess: (state, { payload }) => {
      state.success = true
    },
  },
  extraReducers: (builder) => {},
})

export const { correctGuess: correctGuessActionCreator } = localState.actions

export default localState.reducer
