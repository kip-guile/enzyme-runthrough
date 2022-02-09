import propTypes from 'prop-types'

const GuessedWords = ({ guessedWords }) => {
  let contents
  if (guessedWords.length === 0) {
    contents = (
      <span data-test='guess-instructions'>Try to guess the secret word!</span>
    )
  }
  return <div data-test='component-guessed-words'>{contents}</div>
}

GuessedWords.propTypes = {
  guessedWords: propTypes.arrayOf(
    propTypes.shape({
      guessedWord: propTypes.string.isRequired,
      letterMatchCount: propTypes.number.isRequired,
    })
  ).isRequired,
}

export default GuessedWords
