import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./DiceRoller.scss";

import Dice0 from "../src/images/dice0.svg";
import Dice1 from "../src/images/dice1.svg";
import Dice2 from "../src/images/dice2.svg";
import Dice3 from "../src/images/dice3.svg";
import Dice4 from "../src/images/dice4.svg";
import Dice5 from "../src/images/dice5.svg";
import Dice6 from "../src/images/dice6.svg";

import Scoreboard from "./Scoreboard";

function DiceRoller() {
	var [rollCount, setRollCount] = useState(0);

	var [rollDisable, setRollDisable] = useState(false);

	var [valueOne, setValueOne] = useState(0);
	var [valueTwo, setValueTwo] = useState(0);
	var [valueThree, setValueThree] = useState(0);
	var [valueFour, setValueFour] = useState(0);
	var [valueFive, setValueFive] = useState(0);
	var [valueSix, setValueSix] = useState(0);

	var [rollingOne, setRollingOne] = useState(false);
	var [rollingTwo, setRollingTwo] = useState(false);
	var [rollingThree, setRollingThree] = useState(false);
	var [rollingFour, setRollingFour] = useState(false);
	var [rollingFive, setRollingFive] = useState(false);
	var [rollingSix, setRollingSix] = useState(false);

	var [resetAllDice, setResetAllDice] = useState(false);

	const diceImages = [Dice0, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

	var [imageOne, setImageOne] = useState(diceImages[0]);
	var [imageTwo, setImageTwo] = useState(diceImages[0]);
	var [imageThree, setImageThree] = useState(diceImages[0]);
	var [imageFour, setImageFour] = useState(diceImages[0]);
	var [imageFive, setImageFive] = useState(diceImages[0]);
	var [imageSix, setImageSix] = useState(diceImages[0]);

	const [isSelectedOne, setIsSelectedOne] = useState(true);
	const [isSelectedTwo, setIsSelectedTwo] = useState(true);
	const [isSelectedThree, setIsSelectedThree] = useState(true);
	const [isSelectedFour, setIsSelectedFour] = useState(true);
	const [isSelectedFive, setIsSelectedFive] = useState(true);
	const [isSelectedSix, setIsSelectedSix] = useState(true);

	var diceCurrentValueArray: number[] = [
		valueOne,
		valueTwo,
		valueThree,
		valueFour,
		valueFive,
		valueSix,
	];

	//console.log(diceCurrentValueArray);
	//console.log(valueOne, valueTwo, valueThree, valueFour, valueFive);

	const rollDelay = 1000;
	const resetDelay = 1500;

	function handleRoll() {
		setRollDisable(true);
		setRollingOne(true);
		setRollingTwo(true);
		setRollingThree(true);
		setRollingFour(true);
		setRollingFive(true);
		setRollingSix(true);
		rollDice();
		setTimeout(() => setRollDisable(false), rollDelay);
	}

	function resetDice() {
		setResetAllDice(true);
		setRollCount(0);
		setValueOne(0);
		setValueTwo(0);
		setValueThree(0);
		setValueFour(0);
		setValueFive(0);
		setValueSix(0);
		setTimeout(() => setImageOne(diceImages[0]), resetDelay * 0.5);
		setTimeout(() => setImageTwo(diceImages[0]), resetDelay * 0.5);
		setTimeout(() => setImageThree(diceImages[0]), resetDelay * 0.5);
		setTimeout(() => setImageFour(diceImages[0]), resetDelay * 0.5);
		setTimeout(() => setImageFive(diceImages[0]), resetDelay * 0.5);
		setTimeout(() => setImageSix(diceImages[0]), resetDelay * 0.5);
		setIsSelectedOne(true);
		setIsSelectedTwo(true);
		setIsSelectedThree(true);
		setIsSelectedFour(true);
		setIsSelectedFive(true);
		setIsSelectedSix(true);
		setTimeout(() => setResetAllDice(false), resetDelay);
	}

	function rollDice() {
		setRollCount(rollCount + 1);

		if (isSelectedOne) {
			var randomNumber1 = Math.floor(Math.random() * 6 + 1);
			setValueOne(randomNumber1);
			setTimeout(() => setImageOne(diceImages[randomNumber1]), rollDelay / 2.5);
		}
		if (isSelectedTwo) {
			var randomNumber2 = Math.floor(Math.random() * 6 + 1);
			setValueTwo(randomNumber2);
			setTimeout(() => setImageTwo(diceImages[randomNumber2]), rollDelay / 2.5);
		}
		if (isSelectedThree) {
			var randomNumber3 = Math.floor(Math.random() * 6 + 1);
			setValueThree(randomNumber3);
			setTimeout(
				() => setImageThree(diceImages[randomNumber3]),
				rollDelay / 2.5
			);
		}
		if (isSelectedFour) {
			var randomNumber4 = Math.floor(Math.random() * 6 + 1);
			setValueFour(randomNumber4);
			setTimeout(
				() => setImageFour(diceImages[randomNumber4]),
				rollDelay / 2.5
			);
		}
		if (isSelectedFive) {
			var randomNumber5 = Math.floor(Math.random() * 6 + 1);
			setValueFive(randomNumber5);
			setTimeout(
				() => setImageFive(diceImages[randomNumber5]),
				rollDelay / 2.5
			);
		}

		if (isSelectedSix) {
			var randomNumber6 = Math.floor(Math.random() * 6 + 1);
			setValueSix(randomNumber6);
			setTimeout(() => setImageSix(diceImages[randomNumber6]), rollDelay / 2.5);
		}
		setTimeout(() => setRollingOne(false), rollDelay);
		setTimeout(() => setRollingTwo(false), rollDelay);
		setTimeout(() => setRollingThree(false), rollDelay);
		setTimeout(() => setRollingFour(false), rollDelay);
		setTimeout(() => setRollingFive(false), rollDelay);
		setTimeout(() => setRollingSix(false), rollDelay);
	}

	useEffect(() => {
		if (diceCurrentValueArray) {
			console.log("scoreboard " + diceCurrentValueArray);
		}
	}, [rollCount]);

	return (
		<>
			<h1>Yacht Dice</h1>
			<div className="dice-container">
				<img
					className={
						!isSelectedOne
							? "dice-selected"
							: rollingOne
							? "dice-roll"
							: resetAllDice
							? "dice-reset"
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
							: resetAllDice
							? "dice-reset"
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
							: resetAllDice
							? "dice-reset"
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
							: resetAllDice
							? "dice-reset"
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
							: resetAllDice
							? "dice-reset"
							: "dice-static"
					}
					onClick={() => setIsSelectedFive(!isSelectedFive)}
					src={imageFive}
					key={"E"}
				/>
				<img
					className={
						!isSelectedSix
							? "dice-selected"
							: rollingSix
							? "dice-roll"
							: resetAllDice
							? "dice-reset"
							: "dice-static"
					}
					onClick={() => setIsSelectedSix(!isSelectedSix)}
					src={imageSix}
					key={"F"}
				/>
			</div>

			<div className="button-container">
				<Button
					onClick={handleRoll}
					className="roll-dice-button"
					sx={{
						color: "white",
						backgroundColor: "#bc40ff",
						borderRadius: "20%",
						fontSize: "25px",
						fontFamily: "'Roboto Mono', monospace",
						marginRight: "35px",
					}}
					disabled={rollDisable}
				>
					Roll Dice
				</Button>
			</div>
			<div className="button-container">
				<Button
					onClick={resetDice}
					className="reset-dice-button"
					sx={{
						color: "white",
						backgroundColor: "#FF0000",
						borderRadius: "20%",
						fontSize: "25px",
						fontFamily: "'Roboto Mono', monospace",
						marginLeft: "35px",
					}}
					disabled={rollDisable}
				>
					Reset Dice
				</Button>
			</div>
			{/* <div className="roll-counter">Roll Count: {rollCount}</div> */}
			<Scoreboard
				diceCurrentValueArray={diceCurrentValueArray}
				rollCount={rollCount}
			/>
		</>
	);
}

export default DiceRoller;
