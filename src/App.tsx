import "./App.scss";
import DiceRoller from "./DiceRoller";
import Tips from "./Tips";

function App() {
	return (
		<div className="App">
			<div className="header-container">
				<div className="header">
					SI<span className="x">X</span>ES
					<span>-lite</span>
					<div className="dotted" />
				</div>
				<span className="XX">XX</span>
			</div>

			<DiceRoller />
			{/* <Tips /> */}
		</div>
	);
}

export default App;
