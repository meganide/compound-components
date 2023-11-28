import Counter from "./Counter/Counter";
import { useCounter } from "./Counter/useCounter";

export default function CompoundWithHooks() {
	const { count, handleDecrement, handleIncrement } = useCounter();

	function handleClickIncrement() {
		// custom logic
		const MAX_COUNT = 10;
		if (count < MAX_COUNT) {
			handleIncrement();
		}
	}

	return (
		<section>
			<h2>Compound component with custom hooks</h2>
			<Counter value={{ count }}>
				<Counter.Count />
				<Counter.Decrement
					icon="-"
					onClickDecrement={handleDecrement}
				/>
				<Counter.Increment
					icon="+"
					onClickIncrement={handleClickIncrement}
				/>
			</Counter>
		</section>
	);
}
