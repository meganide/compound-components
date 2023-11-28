type DecrementProps = {
	icon: string;
	onClickDecrement: () => void;
};

export default function Decrement({ icon, onClickDecrement }: DecrementProps) {
	return <button onClick={onClickDecrement}>{icon}</button>;
}
