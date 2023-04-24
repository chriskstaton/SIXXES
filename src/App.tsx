import "./App.scss";
import Dice from "./dice";

function App() {
	return (
		<div className="App">
			<Dice />
			<div className="footer-tips">
				<p>Select dice to freeze value before a new roll.</p>
			</div>
		</div>
	);
}

export default App;
