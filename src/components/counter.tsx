import React, { useState, useEffect } from "react";

import { decrement, increment, incrementByAmount } from "./counterSlice";
import { store } from "../store/index";
import { useDispatch, useSelector } from "react-redux";
import "./counter.css";
interface CounterState {
  value: number;
}

function Counter() {
  const [incrementAmount, setIncrementAmount] = useState("2");
  const counterDispatch = useDispatch();
  const count = useSelector((state: CounterState) => {
    return state.value;
  });

  return (
    <div className="counter-container">
      <div className="counter-display__content">
        <button
          aria-label="Increment value"
          onClick={() => counterDispatch(increment())}
        >
          +
        </button>
        <span className="counter-span">{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => store.dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className="set-increment__content">
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() =>
            store.dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}
export default Counter;
