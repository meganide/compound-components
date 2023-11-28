import { useContext } from "react";
import { CounterContext } from "../../contexts/CounterContext";

export function useCounterContext() {
	const context = useContext(CounterContext);

	return { ...context };
}
