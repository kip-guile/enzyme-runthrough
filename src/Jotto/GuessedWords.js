import propTypes from 'prop-types'

const GuessedWords = ({ guessedWords }) => {
  let contents
  if (guessedWords.length === 0) {
    contents = (
      <span data-test='guess-instructions'>Try to guess the secret word!</span>
    )
  } else {
    const guessedWordRows = guessedWords.map((word, i) => (
      <tr data-test='guessed-word' key={i}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ))
    contents = (
      <div data-test='guessed-words'>
        <h3>Guessed words</h3>
        <table className='table table-sm'>
          <thead className='thead-light'>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordRows}</tbody>
        </table>
      </div>
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
