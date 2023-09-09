import React from 'react';

const ChangeCount = ({ count, setCount }) => {
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
};

export default ChangeCount;
