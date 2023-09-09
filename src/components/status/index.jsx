import React from 'react';
import { useSelector } from 'react-redux';

const Status = () => {
  const status = useSelector((state) => state.status.status);
  return (
    <div>
      <p>Ini Merupakan Status {status ? 'Benar' : 'Salah'}</p>
    </div>
  );
};

export default Status;
