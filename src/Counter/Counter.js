import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [error, setError] = useState('')
  const handleCounter = (sign) => {
    if (sign === '-' && counter === 0) {
      setError('counter doesnt go below 0')
      return
    }
    if (error) setError('')
    setCounter((prev) => (sign === '+' ? prev + 1 : prev - 1))
  }
  return (
    <div data-test='component-app' className='App'>
      <p>
        Counter is at <span data-test='counter-display'>{counter}</span>
      </p>
      <button data-test='decrement-button' onClick={() => handleCounter('-')}>
        decrease
      </button>
      <button data-test='increment-button' onClick={() => handleCounter('+')}>
        increase
      </button>
      {error && <p data-test='error-text'>{error}</p>}
    </div>
  )
}

export default Counter
