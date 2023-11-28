import { useCounterContext } from "./useCounterContext";

type IncrementProps = {
	icon: string;
};

export default function Increment({ icon }: IncrementProps) {
	const { handleIncrement } = useCounterContext();

	return <button onClick={handleIncrement}>{icon}</button>;
}
