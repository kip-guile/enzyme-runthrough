import { createSlice } from '@reduxjs/toolkit'
import { getLetterMatchCount } from '../../helpers'

export const initialState = {
  success: false,
  guessedWords: [],
  secretWord: '',
}

const localState = createSlice({
  name: 'state',
  initialState: initialState,
  reducers: {
    correctGuess: (state, { payload }) => {
      state.success = true
    },
    guessedWord: (state, { payload }) => {
      const letterMatchCount = getLetterMatchCount(
        payload.guessedWord,
        state.secretWord
      )
      state.guessedWords.push({
        guessedWord: payload.guessedWord,
        letterMatchCount,
      })
      if (payload.guessedWord === state.secretWord) {
        state.success = true
      }
    },
  },
  extraReducers: (builder) => {},
})

export const { correctGuess: correctGuessActionCreator } = localState.actions

export default localState.reducer
