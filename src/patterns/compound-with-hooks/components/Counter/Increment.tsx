type IncrementProps = {
	icon: string;
	onClickIncrement: () => void;
};

export default function Increment({ icon, onClickIncrement }: IncrementProps) {
	return <button onClick={onClickIncrement}>{icon}</button>;
}
