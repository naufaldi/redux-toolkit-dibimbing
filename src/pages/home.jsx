import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChangeStatus from '../components/changeStatus';
import Status from '../components/status';
import { decrement, increment } from '../redux/slice/countSlice';
const Home = () => {
  // const [count, setCount] = useState(100);

  const countRedux = useSelector((state) => state.count.count);

  // ini utk rubah si state
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline text-green-600">
          Hello world Tailwind!
        </h1>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <ChangeCount count={count} setCount={setCount} /> */}
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
};

export default Home;
