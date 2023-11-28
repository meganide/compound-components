import { useCallback, useState } from "react";

export function useCounter() {
	const [count, setCount] = useState(0);

	const handleIncrement = useCallback(() => {
		setCount((prevCount) => prevCount + 1);
	}, []);

	const handleDecrement = useCallback(() => {
		setCount((prevCount) => prevCount - 1);
	}, []);

	return {
		count,
		handleIncrement,
		handleDecrement
	};
}
