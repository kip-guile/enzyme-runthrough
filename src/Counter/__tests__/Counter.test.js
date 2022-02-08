import { shallow } from 'enzyme'
import Counter from '../Counter'
import { findTestByAttrr } from '../../utils'

const setup = (props = {}, state = null) => {
  return shallow(<Counter {...props} />)
}

test('renders without error', () => {
  const wrapper = setup()
  const appComponent = findTestByAttrr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
})

test('renders increment button', () => {
  const wrapper = setup()
  const incrementButton = findTestByAttrr(wrapper, 'increment-button')
  expect(incrementButton.length).toBe(1)
})

test('renders decrement button', () => {
  const wrapper = setup()
  const decrementButton = findTestByAttrr(wrapper, 'decrement-button')
  expect(decrementButton.length).toBe(1)
})

test('renders counter display', () => {
  const wrapper = setup()
  const counterDisplay = findTestByAttrr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1)
})

test('ensure counter starts at 0', () => {
  const wrapper = setup()
  const initialCounterState = findTestByAttrr(wrapper, 'counter-display')
  expect(initialCounterState.text()).toEqual('0')
})

test('clicking button increments counter display', () => {
  const wrapper = setup()
  const button = findTestByAttrr(wrapper, 'increment-button')
  button.simulate('click')
  const counterState = findTestByAttrr(wrapper, 'counter-display')
  expect(counterState.text()).toBe('1')
})

test('clicking button decrements counter display', () => {
  const wrapper = setup()
  const incrementButton = findTestByAttrr(wrapper, 'increment-button')
  incrementButton.simulate('click')
  incrementButton.simulate('click')
  incrementButton.simulate('click')
  const decrementButton = findTestByAttrr(wrapper, 'decrement-button')
  decrementButton.simulate('click')
  const counterState = findTestByAttrr(wrapper, 'counter-display')
  expect(counterState.text()).toBe('2')
})

test('counter display doesnt go below 0', () => {
  const wrapper = setup()
  const decrementButton = findTestByAttrr(wrapper, 'decrement-button')
  decrementButton.simulate('click')
  decrementButton.simulate('click')
  decrementButton.simulate('click')
  decrementButton.simulate('click')
  const counterState = findTestByAttrr(wrapper, 'counter-display')
  expect(counterState.text()).toBe('0')
})

test('error pops up when counter tries to go below 0', () => {
  const wrapper = setup()
  const decrementButton = findTestByAttrr(wrapper, 'decrement-button')
  decrementButton.simulate('click')
  decrementButton.simulate('click')
  const errorText = findTestByAttrr(wrapper, 'error-text')
  expect(errorText.text()).toBe('counter doesnt go below 0')
})

test('error clears on successful increment or decrement', () => {
  const wrapper = setup()
  const decrementButton = findTestByAttrr(wrapper, 'decrement-button')
  decrementButton.simulate('click')
  decrementButton.simulate('click')
  const incrementButton = findTestByAttrr(wrapper, 'increment-button')
  incrementButton.simulate('click')
  const errorText = findTestByAttrr(wrapper, 'error-text')
  expect(errorText.length).toBe(0)
})
