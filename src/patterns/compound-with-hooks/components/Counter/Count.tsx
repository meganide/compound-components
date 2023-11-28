import { useCounterContext } from "./useCounterContext";

export default function Count() {
	const { count } = useCounterContext();

	return <div>Count is: {count}</div>;
}
