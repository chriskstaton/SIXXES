import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div></div>
			<h1>Yachtzee Dice Roller</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
			<div className="container"></div>
		</div>
	);
}

export default App;
