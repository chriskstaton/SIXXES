import { LegacyRef, useEffect, useState } from "react";

import Dice0 from "../src/images/dice0.svg";
import Dice1 from "../src/images/dice1.svg";
import Dice2 from "../src/images/dice2.svg";
import Dice3 from "../src/images/dice3.svg";
import Dice4 from "../src/images/dice4.svg";
import Dice5 from "../src/images/dice5.svg";
import Dice6 from "../src/images/dice6.svg";

import Scoreboard from "./Scoreboard";
import DiceElement from "./DiceElement";
import RollButton from "./RollButton";
import "./DiceRoller.scss";

export function DiceRoller(props: {
	headerScrollElement: LegacyRef<HTMLDivElement> | undefined;
	diceScrollElement: LegacyRef<HTMLDivElement> | undefined;
	scoreboardScrollElement: LegacyRef<HTMLDivElement> | undefined;
	setScrollPosition: Function;
}) {
	var [rollCount, setRollCount] = useState(0);
	var [turnCount, setTurnCount] = useState(0);

	var [rollDisable, setRollDisable] = useState(false);
	var [turnComplete, setTurnComplete] = useState(false);

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
	const scrollDelay = 500;
	const totalTurns = 13;
	const rollDelay = 1500;
	const resetDelay = 1500;
	const dumpDelay = 2000;

	function rollDice() {
		if (isSelectedOne) {
			var randomNumber1 = Math.floor(Math.random() * 6 + 1);
			setValueOne(randomNumber1);
			setTimeout(() => setImageOne(diceImages[randomNumber1]), rollDelay / 2);
		}
		if (isSelectedTwo) {
			var randomNumber2 = Math.floor(Math.random() * 6 + 1);
			setValueTwo(randomNumber2);
			setTimeout(() => setImageTwo(diceImages[randomNumber2]), rollDelay / 2);
		}
		if (isSelectedThree) {
			var randomNumber3 = Math.floor(Math.random() * 6 + 1);
			setValueThree(randomNumber3);
			setTimeout(() => setImageThree(diceImages[randomNumber3]), rollDelay / 2);
		}
		if (isSelectedFour) {
			var randomNumber4 = Math.floor(Math.random() * 6 + 1);
			setValueFour(randomNumber4);
			setTimeout(() => setImageFour(diceImages[randomNumber4]), rollDelay / 2);
		}
		if (isSelectedFive) {
			var randomNumber5 = Math.floor(Math.random() * 6 + 1);
			setValueFive(randomNumber5);
			setTimeout(() => setImageFive(diceImages[randomNumber5]), rollDelay / 2);
		}
		if (isSelectedSix) {
			var randomNumber6 = Math.floor(Math.random() * 6 + 1);
			setValueSix(randomNumber6);
			setTimeout(() => setImageSix(diceImages[randomNumber6]), rollDelay / 2);
		}

		setTimeout(() => setRollingOne(false), rollDelay);
		setTimeout(() => setRollingTwo(false), rollDelay);
		setTimeout(() => setRollingThree(false), rollDelay);
		setTimeout(() => setRollingFour(false), rollDelay);
		setTimeout(() => setRollingFive(false), rollDelay);
		setTimeout(() => setRollingSix(false), rollDelay);
	}

	function handleRoll() {
		if (turnCount < totalTurns) {
			setTimeout(
				() =>
					props.setScrollPosition(
						window.innerWidth < 800
							? props.diceScrollElement
							: props.headerScrollElement
					),
				scrollDelay
			);

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
			setTimeout(() => setRollCount(rollCount + 1), rollDelay * 0.75);
			setTimeout(() => setRollDisable(false), rollDelay);

			if (rollCount == maxRolls - 1) {
				setTurnComplete(true);
			}
		} else return;
	}

	function resetDice() {
		if (turnCount < totalTurns - 1) {
			setTurnComplete(false);
			setTimeout(
				() =>
					props.setScrollPosition(
						window.innerWidth < 800
							? props.diceScrollElement
							: props.headerScrollElement
					),
				scrollDelay
			);
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

	function handleLock() {
		if (rollCount == maxRolls) {
			props.setScrollPosition(props.scoreboardScrollElement);
		}
	}

	useEffect(() => {
		if (diceCurrentValueArray) {
			console.log("scoreboard " + diceCurrentValueArray);
		}
	}, [rollCount]);

	return (
		<>
			<div className="dice-container" ref={props.diceScrollElement}>
				<DiceElement
					isSelected={isSelectedOne}
					rollingNumber={rollingOne}
					resetAllDice={resetAllDice}
					setIsSelected={setIsSelectedOne}
					imageSrc={imageOne}
					key="A"
				/>
				<DiceElement
					isSelected={isSelectedTwo}
					rollingNumber={rollingTwo}
					resetAllDice={resetAllDice}
					setIsSelected={setIsSelectedTwo}
					imageSrc={imageTwo}
					key="B"
				/>
				<DiceElement
					isSelected={isSelectedThree}
					rollingNumber={rollingThree}
					resetAllDice={resetAllDice}
					setIsSelected={setIsSelectedThree}
					imageSrc={imageThree}
					key="C"
				/>
				<DiceElement
					isSelected={isSelectedFour}
					rollingNumber={rollingFour}
					resetAllDice={resetAllDice}
					setIsSelected={setIsSelectedFour}
					imageSrc={imageFour}
					key="D"
				/>
				<DiceElement
					isSelected={isSelectedFive}
					rollingNumber={rollingFive}
					resetAllDice={resetAllDice}
					setIsSelected={setIsSelectedFive}
					imageSrc={imageFive}
					key="E"
				/>
				<DiceElement
					isSelected={isSelectedSix}
					rollingNumber={rollingSix}
					resetAllDice={resetAllDice}
					setIsSelected={setIsSelectedSix}
					imageSrc={imageSix}
					key="F"
				/>
			</div>

			<RollButton
				handleLock={handleLock}
				handleRoll={handleRoll}
				buttonDumping={buttonDumping}
				rollCount={rollCount}
				maxRolls={maxRolls}
				turnComplete={turnComplete}
				rollDisable={rollDisable}
			/>

			<Scoreboard
				diceCurrentValueArray={diceCurrentValueArray}
				turnCount={turnCount}
				setTurnCount={setTurnCount}
				resetDice={resetDice}
				totalTurns={totalTurns}
				refEl={props.scoreboardScrollElement}
			/>
		</>
	);
}

export default DiceRoller;
