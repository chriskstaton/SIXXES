import { useState } from "react";
import Button from "@mui/material/Button";
import "./App.scss";

import Dice0 from "../src/images/dice0.svg";
import Dice1 from "../src/images/dice1.svg";
import Dice2 from "../src/images/dice2.svg";
import Dice3 from "../src/images/dice3.svg";
import Dice4 from "../src/images/dice4.svg";
import Dice5 from "../src/images/dice5.svg";
import Dice6 from "../src/images/dice6.svg";

function App() {
	var [rollCount, setRollCount] = useState(0);

	var [valueOne, setValueOne] = useState(0);
	var [valueTwo, setValueTwo] = useState(0);
	var [valueThree, setValueThree] = useState(0);
	var [valueFour, setValueFour] = useState(0);
	var [valueFive, setValueFive] = useState(0);

	var [rollingOne, setRollingOne] = useState(false);
	var [rollingTwo, setRollingTwo] = useState(false);
	var [rollingThree, setRollingThree] = useState(false);
	var [rollingFour, setRollingFour] = useState(false);
	var [rollingFive, setRollingFive] = useState(false);

	const diceImages = [Dice0, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

	// const diceState = [
	// 	{ position: "1", value: 5 },
	// 	{ position: "2", value: 4 },
	// 	{ position: "3", value: 3 },
	// 	{ position: "4", value: 2 },
	// 	{ position: "5", value: 1 },
	// ]; //add random key that changes on roll only (to fix animation firing while selecting dice)

	// const [dice, setDice] = useState(ini																																												tialDiceState);

	var [imageOne, setImageOne] = useState(diceImages[0]);
	var [imageTwo, setImageTwo] = useState(diceImages[0]);
	var [imageThree, setImageThree] = useState(diceImages[0]);
	var [imageFour, setImageFour] = useState(diceImages[0]);
	var [imageFive, setImageFive] = useState(diceImages[0]);

	const [isSelectedOne, setIsSelectedOne] = useState(true);
	const [isSelectedTwo, setIsSelectedTwo] = useState(true);
	const [isSelectedThree, setIsSelectedThree] = useState(true);
	const [isSelectedFour, setIsSelectedFour] = useState(true);
	const [isSelectedFive, setIsSelectedFive] = useState(true);

	const diceCurrentValueArray: number[] = [
		valueOne,
		valueTwo,
		valueThree,
		valueFour,
		valueFive,
	];

	console.log(diceCurrentValueArray);

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

	function handleRoll() {
		setRollingOne(true);
		setRollingTwo(true);
		setRollingThree(true);
		setRollingFour(true);
		setRollingFive(true);
		// setTimeout(() => rollDice(), 1000);
	}

	const rollDice = async () => {
		setRollCount(rollCount + 1);
		const delay = 1000;

		if (isSelectedOne) {
			var randomNumber1 = Math.floor(Math.random() * 6 + 1);
			setValueOne(randomNumber1);
			setTimeout(() => setImageOne(diceImages[randomNumber1]), delay / 2);
		}
		if (isSelectedTwo) {
			var randomNumber2 = Math.floor(Math.random() * 6 + 1);
			setValueTwo(randomNumber2);
			setTimeout(() => setImageTwo(diceImages[randomNumber2]), delay / 2);
		}
		if (isSelectedThree) {
			var randomNumber3 = Math.floor(Math.random() * 6 + 1);
			setValueThree(randomNumber3);
			setTimeout(() => setImageThree(diceImages[randomNumber3]), delay / 2);
		}
		if (isSelectedFour) {
			var randomNumber4 = Math.floor(Math.random() * 6 + 1);
			setValueFour(randomNumber4);
			setTimeout(() => setImageFour(diceImages[randomNumber4]), delay / 2);
		}
		if (isSelectedFive) {
			var randomNumber5 = Math.floor(Math.random() * 6 + 1);
			setValueFive(randomNumber5);
			setTimeout(() => setImageFive(diceImages[randomNumber5]), delay / 2);
		}
		setTimeout(() => setRollingOne(false), delay);
		setTimeout(() => setRollingTwo(false), delay);
		setTimeout(() => setRollingThree(false), delay);
		setTimeout(() => setRollingFour(false), delay);
		setTimeout(() => setRollingFive(false), delay);
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
						className={
							!isSelectedOne
								? "dice-selected"
								: rollingOne
								? "dice-roll"
								: "dice-static"
						}
						onClick={() => setIsSelectedOne(!isSelectedOne)}
						src={imageOne}
						key={"A"}
					/>
					<img
						className={
							!isSelectedTwo
								? "dice-selected"
								: rollingTwo
								? "dice-roll"
								: "dice-static"
						}
						onClick={() => setIsSelectedTwo(!isSelectedTwo)}
						src={imageTwo}
						key={"B"}
					/>
					<img
						className={
							!isSelectedThree
								? "dice-selected"
								: rollingThree
								? "dice-roll"
								: "dice-static"
						}
						onClick={() => setIsSelectedThree(!isSelectedThree)}
						src={imageThree}
						key={"C"}
					/>
					<img
						className={
							!isSelectedFour
								? "dice-selected"
								: rollingFour
								? "dice-roll"
								: "dice-static"
						}
						onClick={() => setIsSelectedFour(!isSelectedFour)}
						src={imageFour}
						key={"D"}
					/>
					<img
						className={
							!isSelectedFive
								? "dice-selected"
								: rollingFive
								? "dice-roll"
								: "dice-static"
						}
						onClick={() => setIsSelectedFive(!isSelectedFive)}
						src={imageFive}
						key={"E"}
					/>
				</div>

				<div className="button-container">
					<Button
						onClick={handleRoll}
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
