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

	// const diceState = [
	// 	{ position: "1", value: 5 },
	// 	{ position: "2", value: 4 },
	// 	{ position: "3", value: 3 },
	// 	{ position: "4", value: 2 },
	// 	{ position: "5", value: 1 },
	// ];

	// const [dice, setDice] = useState(initialDiceState);

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

	//const diceCurrentValueArray: number[] = [0, 0, 0, 0, 0];

	// const updateDiceState = (diceNewValueArray: number[]) => {
	// 	const newDiceState = dice.map((obj) => {
	// 		if (obj.value != "0") {
	// 			return { ...obj };
	// 		} else {
	// 			return { ...obj };
	// 		}

	// 		return obj;
	// 	});

	// 	setDice(newDiceState);
	// 	console.log(newDiceState);
	// };

	function timeout(delay: number) {
		return new Promise((res) => setTimeout(res, delay));
	}

	const rollDice = async () => {
		setRollCount(rollCount + 1);
		const diceNewValueArray: number[] = [0, 0, 0, 0, 0];
		// updateDiceState();
		if (isSelected1) {
			var randomNumber1 = Math.floor(Math.random() * 6);
			setImage1(diceImages[randomNumber1]);
			diceNewValueArray[0] = randomNumber1 + 1;
		}
		if (isSelected2) {
			var randomNumber2 = Math.floor(Math.random() * 6);
			setImage2(diceImages[randomNumber2]);
			diceNewValueArray[1] = randomNumber2 + 1;
		}
		if (isSelected3) {
			var randomNumber3 = Math.floor(Math.random() * 6);
			setImage3(diceImages[randomNumber3]);
			diceNewValueArray[2] = randomNumber3 + 1;
		}
		if (isSelected4) {
			var randomNumber4 = Math.floor(Math.random() * 6);
			setImage4(diceImages[randomNumber4]);
			diceNewValueArray[3] = randomNumber4 + 1;
		}
		if (isSelected5) {
			var randomNumber5 = Math.floor(Math.random() * 6);
			setImage5(diceImages[randomNumber5]);
			diceNewValueArray[4] = randomNumber5 + 1;
		}
		console.log(diceNewValueArray);
		return diceNewValueArray;
	};

	return (
		<>
			<div className="App">
				<h1>Yacht Dice Roller</h1>
				<div className="dice-container">
					{/* {diceState.map(({ position, value }, index) => {
						return (
							<img
								className={!isSelected1 ? "dice-selected" : "dice"}
								onClick={() => setIsSelected1(!isSelected1)}
								src={diceImages[value]}
								key={`${position}`} // still needs to change when new roll value is the same for animation to fire on render
							/>
						);
					})} */}

					<img
						className={!isSelected1 ? "dice-selected" : "dice"}
						onClick={() => setIsSelected1(!isSelected1)}
						src={image1}
						key={Dice1 + Math.random() * 100}
					/>
					<img
						className={!isSelected2 ? "dice-selected" : "dice"}
						onClick={() => setIsSelected2(!isSelected2)}
						src={image2}
						key={Dice2 + Math.random() * 100}
					/>
					<img
						className={!isSelected3 ? "dice-selected" : "dice"}
						onClick={() => setIsSelected3(!isSelected3)}
						src={image3}
						key={Dice3 + Math.random() * 100}
					/>
					<img
						className={!isSelected4 ? "dice-selected" : "dice"}
						onClick={() => setIsSelected4(!isSelected4)}
						src={image4}
						key={Dice4 + Math.random() * 100}
					/>
					<img
						className={!isSelected5 ? "dice-selected" : "dice"}
						onClick={() => setIsSelected5(!isSelected5)}
						src={image5}
						key={Dice5 + Math.random() * 100}
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
