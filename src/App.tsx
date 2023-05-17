import "./App.scss";
import DiceRoller from "./DiceRoller";
import Tips from "./Tips";

function App() {
	return (
		<div className="App">
			<h1>
				SIXES
				<span>-lite</span>
				<div className="dotted" />
			</h1>

			<DiceRoller />
			<Tips />
		</div>
	);
}

export default App;
