import "./App.scss";
import DiceRoller from "./DiceRoller";
import Scoreboard from "./Scoreboard";
import Tips from "./Tips";

function App() {
	return (
		<div className="App">
			<DiceRoller />
			<Scoreboard />
			<Tips />
		</div>
	);
}

export default App;
