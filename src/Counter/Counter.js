import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const handleCounter = (sign) => {
    setCounter((prev) => (sign === '+' ? prev + 1 : prev - 1))
  }
  return (
    <div data-test='component-app' className='App'>
      <p>Counter is at {counter}</p>
      <button onClick={() => handleCounter('+')}>increase</button>
      <button onClick={() => handleCounter('-')}>decrease</button>
    </div>
  )
}

export default Counter
