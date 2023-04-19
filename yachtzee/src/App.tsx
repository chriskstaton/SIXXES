import { useState } from "react";
import Button from "@mui/material/Button";
import "./App.scss";

import Dice1 from "../src/images/dice1.svg";
import Dice2 from "../src/images/dice2.svg";
import Dice3 from "../src/images/dice3.svg";
import Dice4 from "../src/images/dice4.svg";
import Dice5 from "../src/images/dice5.svg";
import Dice6 from "../src/images/dice6.svg";
import Dice7 from "../src/images/dice7.svg";

function App() {
	var [rollCount, setRollCount] = useState(0);

	const diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Dice7];

	var [image1, setImage1] = useState(diceImages[6]);
	var [image2, setImage2] = useState(diceImages[6]);
	var [image3, setImage3] = useState(diceImages[6]);
	var [image4, setImage4] = useState(diceImages[6]);
	var [image5, setImage5] = useState(diceImages[6]);

	const [isSelected1, setIsSelected1] = useState(true);
	const [isSelected2, setIsSelected2] = useState(true);
	const [isSelected3, setIsSelected3] = useState(true);
	const [isSelected4, setIsSelected4] = useState(true);
	const [isSelected5, setIsSelected5] = useState(true);

	const rollDice = () => {
		setRollCount(rollCount + 1);

		var randomNumber1 = Math.floor(Math.random() * 6);
		var randomNumber2 = Math.floor(Math.random() * 6);
		var randomNumber3 = Math.floor(Math.random() * 6);
		var randomNumber4 = Math.floor(Math.random() * 6);
		var randomNumber5 = Math.floor(Math.random() * 6);

		if (isSelected1) {
			setImage1(diceImages[randomNumber1]);
		}
		if (isSelected2) {
			setImage2(diceImages[randomNumber2]);
		}
		if (isSelected3) {
			setImage3(diceImages[randomNumber3]);
		}
		if (isSelected4) {
			setImage4(diceImages[randomNumber4]);
		}
		if (isSelected5) {
			setImage5(diceImages[randomNumber5]);
		}
	};

	return (
		<>
			<div className="App">
				<h1>Yachtzee Dice Roller</h1>
				<div className="dice-container">
					<img
						className={!isSelected1 ? "dice-selected" : "dice"}
						onClick={() => setIsSelected1(!isSelected1)}
						src={image1}
					/>
					<img
						className={!isSelected2 ? "dice-selected" : "dice"}
						onClick={() => setIsSelected2(!isSelected2)}
						src={image2}
					/>
					<img
						className={!isSelected3 ? "dice-selected" : "dice"}
						onClick={() => setIsSelected3(!isSelected3)}
						src={image3}
					/>
					<img
						className={!isSelected4 ? "dice-selected" : "dice"}
						onClick={() => setIsSelected4(!isSelected4)}
						src={image4}
					/>
					<img
						className={!isSelected5 ? "dice-selected" : "dice"}
						onClick={() => setIsSelected5(!isSelected5)}
						src={image5}
					/>
				</div>

				<div className="button-container">
					<Button
						onClick={rollDice}
						className="roll-dice-button"
						sx={{
							color: "white",
							backgroundColor: "#bc40ff",
							borderRadius: "15%",
							fontSize: "25px",
							fontFamily: "'Roboto Mono', monospace",
						}}
					>
						Roll Dice
					</Button>
				</div>
				<div className="roll-counter">Roll Count: {rollCount}</div>
			</div>
			<div className="footer-tips">
				<p>Select dice to freeze value before a new roll.</p>
			</div>
		</>
	);
}

export default App;
