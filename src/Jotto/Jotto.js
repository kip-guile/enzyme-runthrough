import Congrats from './Congrats'
import GuessedWords from './GuessedWords'
import Input from './input'

const Jotto = () => {
  return (
    <div className='container'>
      <h1>Jotto</h1>
      <Congrats success={true} />
      <Input />
      <GuessedWords
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
      />
    </div>
  )
}

export default Jotto
