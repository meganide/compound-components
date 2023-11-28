import Counter from "./Counter/Counter";

export default function Compound() {
	return (
		<section>
			<h2>Compound</h2>
			<Counter>
				<Counter.Count />
				<Counter.Decrement icon="-" />
				<Counter.Increment icon="+" />
			</Counter>
		</section>
	);
}
