import localSlice, { correctGuessActionCreator, initialState } from '../slice'

describe('correctGuess', () => {
  test('returns an action with type `CORRECT GUESS`', () => {
    const action = correctGuessActionCreator(initialState, {
      type: 'state/correctGuess',
    })
    expect(action).toEqual({
      type: 'state/correctGuess',
      payload: initialState,
    })
  })

  test('returns default initial success state of `false` when no action is passed', () => {
    const newState = localSlice(initialState, { type: '', payload: {} })
    expect(newState).toEqual({
      success: false,
      guessedWords: [],
      secretWord: '',
    })
  })

  test('returns default initial success state of `true` when `CORRECT GUESS` action is passed', () => {
    const newState = localSlice(initialState, {
      type: 'state/correctGuess',
      payload: {},
    })
    expect(newState).toEqual({
      success: true,
      guessedWords: [],
      secretWord: '',
    })
  })
})

describe('quessedWord action dispatcher', () => {
  const secretWord = 'party'
  const unsucessfulGuess = 'train'
  describe('no guessed words', () => {
    const initialGuessedState = { ...initialState, secretWord }
    test('updates state correctly for unsuccesful guess', () => {
      const newState = localSlice(initialGuessedState, {
        type: 'state/guessedWord',
        payload: { guessedWord: unsucessfulGuess, letterMatchCount: 3 },
      })
      expect(newState).toEqual({
        success: false,
        guessedWords: [{ guessedWord: unsucessfulGuess, letterMatchCount: 3 }],
        secretWord: 'party',
      })
    })
    test('updates state correctly for succesful guess', () => {
      const newState = localSlice(initialGuessedState, {
        type: 'state/guessedWord',
        payload: { guessedWord: secretWord, letterMatchCount: 5 },
      })
      expect(newState).toEqual({
        success: true,
        guessedWords: [{ guessedWord: secretWord, letterMatchCount: 5 }],
        secretWord: 'party',
      })
    })
  })
  describe('some guessed words', () => {
    const initialGuessedState = {
      ...initialState,
      guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
      secretWord,
    }
    test('updates state correctly for unsuccesful guess', () => {
      const newState = localSlice(initialGuessedState, {
        type: 'state/guessedWord',
        payload: { guessedWord: unsucessfulGuess, letterMatchCount: 3 },
      })
      expect(newState).toEqual({
        success: false,
        guessedWords: [
          { guessedWord: 'agile', letterMatchCount: 1 },
          { guessedWord: unsucessfulGuess, letterMatchCount: 3 },
        ],
        secretWord: 'party',
      })
    })
    test('updates state correctly for succesful guess', () => {
      const newState = localSlice(initialGuessedState, {
        type: 'state/guessedWord',
        payload: { guessedWord: 'party', letterMatchCount: 5 },
      })
      expect(newState).toEqual({
        success: true,
        guessedWords: [
          { guessedWord: 'agile', letterMatchCount: 1 },
          { guessedWord: 'party', letterMatchCount: 5 },
        ],
        secretWord: 'party',
      })
    })
  })
})
