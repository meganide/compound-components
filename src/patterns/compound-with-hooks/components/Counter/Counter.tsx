import Count from "./Count";
import Decrement from "./Decrement";
import Increment from "./Increment";
import { CounterProvider } from "../../contexts/CounterContext";

type CounterProps = {
	children: React.ReactNode;
	value: {
		count: number;
	};
};

export default function Counter({ children, value }: CounterProps) {
	return <CounterProvider value={value}>{children}</CounterProvider>;
}

Counter.Decrement = Decrement;
Counter.Increment = Increment;
Counter.Count = Count;
