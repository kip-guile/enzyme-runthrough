import localSlice, { correctGuessActionCreator, initialState } from '../slice'

describe('correctGuess', () => {
  test('returns an action with type `CORRECT GUESS`', () => {
    const action = correctGuessActionCreator(initialState, {
      type: 'state/correctGuess',
    })
    expect(action).toEqual({
      type: 'state/correctGuess',
      payload: { success: false },
    })
  })

  test('returns default initial success state of `false` when no action is passed', () => {
    const newState = localSlice(initialState, { type: '', payload: {} })
    expect(newState).toEqual({
      success: false,
    })
  })

  test('returns default initial success state of `true` when `CORRECT GUESS` action is passed', () => {
    const newState = localSlice(initialState, {
      type: 'state/correctGuess',
      payload: {},
    })
    expect(newState).toEqual({
      success: true,
    })
  })
})
