import { mount } from 'enzyme'
import Input from '../input'
import { Provider } from 'react-redux'
import store from '../store'
import { correctGuessActionCreator } from '../store/slice'
import { findTestByAttrr } from '../../utils'

describe('render', () => {
  let wrapped

  beforeEach(() => {
    wrapped = mount(
      <Provider store={store}>
        <Input />
      </Provider>
    )
  })

  afterEach(() => {
    wrapped.unmount()
  })
  describe('word has not been guessed', () => {
    test('renders component without error', () => {
      const component = findTestByAttrr(wrapped, 'component-input')
      expect(component.length).toBe(1)
    })
    test('renders input box', () => {
      const inputBox = findTestByAttrr(wrapped, 'input-box')
      expect(inputBox.length).toBe(1)
    })
    test('renders submit button', () => {
      const submitButton = findTestByAttrr(wrapped, 'submit-button')
      expect(submitButton.length).toBe(1)
    })
  })

  describe('word has been guessed', () => {
    let wrapped
    beforeEach(() => {
      wrapped = mount(
        <Provider store={store}>
          <Input />
        </Provider>
      )
      store.dispatch(correctGuessActionCreator())
    })

    afterEach(() => {
      wrapped.unmount()
    })
    test('renders component without error', () => {
      const component = findTestByAttrr(wrapped, 'component-input')
      expect(component.length).toBe(1)
    })
    test('does not render input box', () => {
      const inputBox = findTestByAttrr(wrapped, 'input-box')
      expect(inputBox.length).toBe(0)
    })
    test('does not render submit button', () => {
      const submitButton = findTestByAttrr(wrapped, 'submit-button')
      expect(submitButton.length).toBe(0)
    })
  })
})

describe('update state', () => {})
