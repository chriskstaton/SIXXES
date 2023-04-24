import "./App.scss";
import DiceRoller from "./DiceRoller";

function App() {
	return (
		<div className="App">
			<DiceRoller />
			<div className="footer-tips">
				<p>Select dice to freeze value before a new roll.</p>
			</div>
		</div>
	);
}

export default App;
