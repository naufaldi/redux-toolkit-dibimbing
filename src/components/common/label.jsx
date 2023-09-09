import React from 'react';
import { useSelector } from 'react-redux';

const Label = () => {
  const status = useSelector((state) => state.status.status);
  return <label>{status ? 'Label True' : 'Label False'}</label>;
};

export default Label;
