import { shallow } from 'enzyme'
import Congrats from '../Congrats'
import { checkProps, findTestByAttrr } from '../../utils'

const defaultProps = { success: true }

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Congrats {...setupProps} />)
}

test('renders without error', () => {
  const wrapper = setup()
  const component = findTestByAttrr(wrapper, 'component-congrats')
  expect(component.length).toBe(1)
})

test('renders no text when success prop is false', () => {
  const wrapper = setup({ success: false })
  const component = findTestByAttrr(wrapper, 'component-congrats')
  expect(component.text()).toBe('')
})

test('renders non empty congrats message when success prop is true', () => {
  const wrapper = setup({ success: true })
  const message = findTestByAttrr(wrapper, 'congrats-message')
  expect(message.text().length).not.toBe(0)
})

test('does not throw warning with expected props', () => {
  const expectedProps = { success: true }
  checkProps(Congrats, expectedProps)
})
