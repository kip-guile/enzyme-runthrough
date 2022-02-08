import { shallow } from 'enzyme'
import Counter from '../Counter'

test('renders without error', () => {
  const wrapper = shallow(<Counter />)
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1)
})

test('renders increment button', () => {})

test('renders counter display', () => {})

test('renders counter starts at 0', () => {})

test('renders clicking button increments counter display', () => {})
