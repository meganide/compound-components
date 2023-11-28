import { createContext } from "react";

const CounterContext = createContext({
	count: 0
});

type CounterProviderProps = {
	children: React.ReactNode;
	value: {
		count: number;
	};
};

function CounterProvider({ children, value }: CounterProviderProps) {
	return (
		<CounterContext.Provider value={value}>{children}</CounterContext.Provider>
	);
}

export { CounterProvider, CounterContext };
