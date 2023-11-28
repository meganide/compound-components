import Count from "./Count";
import Decrement from "./Decrement";
import Increment from "./Increment";
import { CounterProvider } from "../../contexts/CounterContext";

type CounterProps = {
	children: React.ReactNode;
};

export default function Counter({ children }: CounterProps) {
	return <CounterProvider>{children}</CounterProvider>;
}

Counter.Decrement = Decrement;
Counter.Increment = Increment;
Counter.Count = Count;
