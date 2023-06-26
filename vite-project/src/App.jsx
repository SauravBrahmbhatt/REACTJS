import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count < 10 ? count + 1 : 10)}>
          Increment (+)
        </button>
        <button onClick={() => setCount((count) => count > 0 ? count - 1 : 0)}>
          Decrement (-)
        </button>
      </div>
      <div>
        Total count: {count}
      </div>
    </>
  )
}

export default App
