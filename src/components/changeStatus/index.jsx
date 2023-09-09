import React from 'react';
import { useDispatch } from 'react-redux';
import { setClose, setOpen } from '../../redux/slice/statusSlice';

const ChangeStatus = () => {
  // dispatch utk panggil action
  const dispatch = useDispatch();
  //function
  const handleStatusTrue = () => {
    // panggil action
    dispatch(setOpen());
  };
  const handleStatusFalse = () => {
    dispatch(setClose());
  };
  return (
    <div>
      <button onClick={handleStatusTrue}>Change Status to True</button>
      <button onClick={handleStatusFalse}>Change Status to False</button>
    </div>
  );
};

export default ChangeStatus;
