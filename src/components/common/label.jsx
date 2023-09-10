import React from 'react';
import { useSelector } from 'react-redux';
import Title from './title';

const Label = () => {
  const status = useSelector((state) => state.status.status);
  return (
    <>
      {status ? <Title /> : null}
      <label>{status ? 'Label True' : 'Label False'}</label>
    </>
  );
};

export default Label;
