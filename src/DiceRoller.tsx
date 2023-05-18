import { LegacyRef, Ref, useEffect, useState } from "react";
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

export function DiceRoller(props: {
	headerScrollElement: LegacyRef<HTMLDivElement> | undefined;
	diceScrollElement: LegacyRef<HTMLDivElement> | undefined;
	setScrollPosition: Function;
}) {
	var [rollCount, setRollCount] = useState(0);
	var [turnCount, setTurnCount] = useState(0);

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
	var [buttonDumping, setButtonDumping] = useState(false);

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

	useEffect(() => console.log(diceCurrentValueArray), [rollCount]);

	const maxRolls = 4;
	const totalTurns = 13;
	const rollDelay = 1400;
	const resetDelay = 1500;
	const dumpDelay = 2000;

	function handleRoll() {
		if (turnCount < totalTurns) {
			setRollDisable(true);
			setRollingOne(true);
			setRollingTwo(true);
			setRollingThree(true);
			setRollingFour(true);
			setRollingFive(true);
			setRollingSix(true);
			setButtonDumping(true);
			setTimeout(() => setButtonDumping(false), dumpDelay);
			rollDice();
			setRollCount(rollCount + 1);
			setTimeout(() => setRollDisable(false), rollDelay);
		} else return;
	}

	function resetDice() {
		if (turnCount < totalTurns) {
			props.setScrollPosition(
				window.innerWidth < 800
					? props.diceScrollElement
					: props.headerScrollElement
			);
			setTurnCount(turnCount + 1);
			setResetAllDice(true);
			setRollCount(0);
			setValueOne(0);
			setValueTwo(0);
			setValueThree(0);
			setValueFour(0);
			setValueFive(0);
			setValueSix(0);
			setTimeout(() => setImageOne(diceImages[0]), resetDelay / 2);
			setTimeout(() => setImageTwo(diceImages[0]), resetDelay / 2);
			setTimeout(() => setImageThree(diceImages[0]), resetDelay / 2);
			setTimeout(() => setImageFour(diceImages[0]), resetDelay / 2);
			setTimeout(() => setImageFive(diceImages[0]), resetDelay / 2);
			setTimeout(() => setImageSix(diceImages[0]), resetDelay / 2);
			setIsSelectedOne(true);
			setIsSelectedTwo(true);
			setIsSelectedThree(true);
			setIsSelectedFour(true);
			setIsSelectedFive(true);
			setIsSelectedSix(true);
			setTimeout(() => setResetAllDice(false), resetDelay);
		} else return;
	}

	function rollDice() {
		if (isSelectedOne) {
			var randomNumber1 = Math.floor(Math.random() * 6 + 1);
			setValueOne(randomNumber1);
			setTimeout(() => setImageOne(diceImages[randomNumber1]), rollDelay);
		}
		if (isSelectedTwo) {
			var randomNumber2 = Math.floor(Math.random() * 6 + 1);
			setValueTwo(randomNumber2);
			setTimeout(() => setImageTwo(diceImages[randomNumber2]), rollDelay);
		}
		if (isSelectedThree) {
			var randomNumber3 = Math.floor(Math.random() * 6 + 1);
			setValueThree(randomNumber3);
			setTimeout(() => setImageThree(diceImages[randomNumber3]), rollDelay);
		}
		if (isSelectedFour) {
			var randomNumber4 = Math.floor(Math.random() * 6 + 1);
			setValueFour(randomNumber4);
			setTimeout(() => setImageFour(diceImages[randomNumber4]), rollDelay);
		}
		if (isSelectedFive) {
			var randomNumber5 = Math.floor(Math.random() * 6 + 1);
			setValueFive(randomNumber5);
			setTimeout(() => setImageFive(diceImages[randomNumber5]), rollDelay);
		}

		if (isSelectedSix) {
			var randomNumber6 = Math.floor(Math.random() * 6 + 1);
			setValueSix(randomNumber6);
			setTimeout(() => setImageSix(diceImages[randomNumber6]), rollDelay);
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
			<div className="dice-container" ref={props.diceScrollElement}>
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

			<div className={"button-container"}>
				<div>
					<Button
						onClick={handleRoll}
						className={buttonDumping ? "cup-dumping" : "roll-dice-button"}
						sx={
							rollCount >= maxRolls
								? {
										color: "white",
										backgroundColor: "rgb(200, 200, 200)",
										borderRadius: "20%",
										fontSize: "25px",
										fontFamily: "'Roboto Mono', monospace",
								  }
								: {
										color: "white",
										backgroundColor: "#bc40ff !important",
										borderRadius: "20%",
										fontSize: "25px",
										fontFamily: "'Roboto Mono', monospace",
								  }
						}
						disabled={rollCount >= maxRolls ? true : rollDisable}
					>
						Roll Dice
					</Button>
				</div>
			</div>
			<div className="roll-counter">
				Rolls remaining: {maxRolls - rollCount}
			</div>
			<div>
				<Scoreboard
					diceCurrentValueArray={diceCurrentValueArray}
					turnCount={turnCount}
					setTurnCount={setTurnCount}
					resetDice={resetDice}
					//scrollPosition={props.scrollPosition}
					//setScrollPosition={props.setScrollPosition}
				/>
				{/* rollCount={rollCount} */}
			</div>
			<div className="turn-counter">
				<p>Turns remaining: {totalTurns - turnCount}</p>
			</div>
		</>
	);
}

export default DiceRoller;
