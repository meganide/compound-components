import { createContext, useCallback, useState } from "react";

const CounterContext = createContext({
	count: 0,
	handleIncrement: () => {},
	handleDecrement: () => {}
});

type CounterProviderProps = {
	children: React.ReactNode;
};

function CounterProvider({ children }: CounterProviderProps) {
	const [count, setCount] = useState(0);

	const handleIncrement = useCallback(() => {
		setCount((prevCount) => prevCount + 1);
	}, []);

	const handleDecrement = useCallback(() => {
		setCount((prevCount) => prevCount - 1);
	}, []);

	const value = {
		count,
		handleIncrement,
		handleDecrement
	};

	return (
		<CounterContext.Provider value={value}>{children}</CounterContext.Provider>
	);
}

export { CounterProvider, CounterContext };
