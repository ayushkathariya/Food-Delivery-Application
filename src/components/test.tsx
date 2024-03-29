"use client";

import React from "react";
import type { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/redux/slices/counterSlice";

export default function Test() {
  const count = useSelector((state: RootState) => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
