import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { decrement, increment } from './store/slices/counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Pokemons } from './Pokemons';

function App() {
  const [count, setCount] = useState(0);

  const {counter} = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card">
        <div>{counter}</div>
        <button onClick={() => dispatch(increment())}>
          increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>
        <Pokemons />
      </div>
    </>
  )
}

export default App
