import { shallow, mount } from 'enzyme'
import Input from '../input'
import { Provider } from 'react-redux'
import store from '../store'
import { findTestByAttrr } from '../../utils'

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

describe('render', () => {
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
    test('renders component without error', () => {})
    test('does not render input box', () => {})
    test('does not render submit button', () => {})
  })
})

describe('update state', () => {})
