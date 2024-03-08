import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounterContext = () => {
  const { counter, setCounter } = useContext(CounterContext);

  if (!counter || !setCounter) {
    console.log("Counter context not found");
  }

  return [counter, setCounter];
};
