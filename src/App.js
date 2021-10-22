import React from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incrementNumber, decrementNumber } from './action/action';

const App = () => {

  const numberState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h1>Increment / Decrement Counter</h1>
        <h4>Using React and Redux</h4>
        <div className="quantity">
          <a className="quantity__minus"
            title="Decrement"
            onClick={() => dispatch(decrementNumber())}
          >
            <span> - </span></a>
          <input name="quantity" type="number" className="quantity__input"
            value={numberState}
            readOnly
          />
          <a className="quantity__plus"
            title="Increment"
            onClick={() => dispatch(incrementNumber())}
          >
            <span> + </span></a>
        </div>
      </div>
    </>
  )
}

export default App;