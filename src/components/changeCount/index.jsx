import React from 'react';

const ChangeCount = ({ count, setCount }) => {
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <InsideCount count={count} />
    </div>
  );
};

const InsideCount = ({ count }) => {
  return <div>{count}</div>;
};

export default ChangeCount;
