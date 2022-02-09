import { shallow } from 'enzyme'
import GuessedWords from '../GuessedWords'
import { checkProps, findTestByAttrr } from '../../utils'

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessedWords {...setupProps} />)
}

test('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps)
})

describe('if there are no words guessed', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] })
  })
  test('renders without error', () => {
    const appComponent = findTestByAttrr(wrapper, 'component-guessed-words')
    expect(appComponent.length).toBe(1)
  })
  test('renders instructions to a guessed word', () => {
    const instructions = findTestByAttrr(wrapper, 'guess-instructions')
    expect(instructions.text().length).not.toBe(0)
  })
})

describe('if there are words guessed', () => {
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 5 },
    { guessedWord: 'party', letterMatchCount: 9 },
  ]
  let wrapper
  beforeEach(() => {
    wrapper = setup({ guessedWords })
  })
  test('renders without error', () => {
    const appComponent = findTestByAttrr(wrapper, 'component-guessed-words')
    expect(appComponent.length).toBe(1)
  })
  test('renders guessed words section', () => {
    const guessedWordsNode = findTestByAttrr(wrapper, 'guessed-words')
    expect(guessedWordsNode.length).toBe(1)
  })
  test('renders correct number of guessed words', () => {
    const guessedWordsNodes = findTestByAttrr(wrapper, 'guessed-word')
    expect(guessedWordsNodes.length).toBe(guessedWords.length)
  })
})
