import { useCounterContext } from "./useCounterContext";

type DecrementProps = {
	icon: string;
};

export default function Decrement({ icon }: DecrementProps) {
	const { handleDecrement } = useCounterContext();

	return <button onClick={handleDecrement}>{icon}</button>;
}
