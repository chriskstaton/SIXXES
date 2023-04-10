import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";

import Dice1 from "../src/images/dice1.svg";
import Dice2 from "../src/images/dice2.svg";
import Dice3 from "../src/images/dice3.svg";
import Dice4 from "../src/images/dice4.svg";
import Dice5 from "../src/images/dice5.svg";
import Dice6 from "../src/images/dice6.svg";
import Dice7 from "../src/images/dice7.svg";

function App() {
	const diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Dice7];

	var [image1, setImage1] = useState(diceImages[6]);
	var [image2, setImage2] = useState(diceImages[6]);
	var [image3, setImage3] = useState(diceImages[6]);
	var [image4, setImage4] = useState(diceImages[6]);
	var [image5, setImage5] = useState(diceImages[6]);

	const rollDice = () => {
		var randomNumber1 = Math.floor(Math.random() * 6);
		var randomNumber2 = Math.floor(Math.random() * 6);
		var randomNumber3 = Math.floor(Math.random() * 6);
		var randomNumber4 = Math.floor(Math.random() * 6);
		var randomNumber5 = Math.floor(Math.random() * 6);
		setImage1(diceImages[randomNumber1]);
		setImage2(diceImages[randomNumber2]);
		setImage3(diceImages[randomNumber3]);
		setImage4(diceImages[randomNumber4]);
		setImage5(diceImages[randomNumber5]);
	};

	return (
		<div className="App">
			<div></div>
			<h1>Yachtzee Dice Roller</h1>

			<div className="container">
				<img className="square" src={image1} />
				<img className="square" src={image2} />
				<img className="square" src={image3} />
				<img className="square" src={image4} />
				<img className="square" src={image5} />
			</div>

			<Button variant="outlined" onClick={rollDice}>
				Roll Dice
			</Button>
		</div>
	);
}

export default App;
