import "./App.css";
import CompoundWithHooks from "./patterns/compound-with-hooks/components/CompoundWithHooks";
import Compound from "./patterns/compound/components/Compound";

function App() {
	return (
		<section className="app">
			<Compound />

			{/* More flexibility. Able to change the logic. */}
			<CompoundWithHooks />
		</section>
	);
}

export default App;
