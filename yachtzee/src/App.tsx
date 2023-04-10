import { useState } from "react";
import "./App.css";

import Dice1 from "../src/images/dice1.svg";
import Dice2 from "../src/images/dice2.svg";
import Dice3 from "../src/images/dice3.svg";
import Dice4 from "../src/images/dice4.svg";
import Dice5 from "../src/images/dice5.svg";
import Dice6 from "../src/images/dice6.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div></div>
			<h1>Yachtzee Dice Roller</h1>

			<div className="container">
				<div className="square"></div>
				<div className="square"></div>
				<div className="square"></div>
				<div className="square"></div>
				<div className="square"></div>
				<div className="square"></div>
			</div>

			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
		</div>
	);
}

export default App;
