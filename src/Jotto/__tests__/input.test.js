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

// const setup = (initialState = {}) => {
//   console.log(wrapped.)
// }

// setup()

describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders component without error', () => {})
    test('renders input box', () => {})
    test('renders submit button', () => {})
  })
  describe('word has been guessed', () => {
    test('renders component without error', () => {})
    test('does not render input box', () => {})
    test('does not render submit button', () => {})
  })
})

describe('update state', () => {})
