import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/slice/countSlice';
import ChangeStatus from './components/changeStatus';
import ChangeCount from './components/changeCount';
import Status from './components/status';

function App() {
  const [count, setCount] = useState(100);
  const [isDisble, setDisable] = useState(100);
  const [isStatus, setStatus] = useState(100);
  //ini utk panggil state
  const countRedux = useSelector((state) => state.count.count);

  // ini utk rubah si state
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ChangeCount count={count} setCount={setCount} />
        <p>Ini Merupakan {countRedux} dari React Redux Toolkit</p>
        <button onClick={() => dispatch(increment())}>Add +1</button>
        <button onClick={() => dispatch(decrement())}>Add -1</button>
        <Status />
        <ChangeStatus />
        {/* <button onClick={() => dispatch(statusTrue())}>Add -1</button>
        <button onClick={() => dispatch(statusFalse())}>Add -1</button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
