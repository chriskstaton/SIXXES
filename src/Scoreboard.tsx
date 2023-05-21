import { LegacyRef, useEffect, useState } from "react";
import "./Scoreboard.scss";

function Scoreboard(props: {
	diceCurrentValueArray: number[];
	turnCount: number;
	setTurnCount: Function;
	resetDice(): void;
	totalTurns: number;
	refEl: LegacyRef<HTMLDivElement> | undefined;
}) {
	var [onesScore, setOnesScore] = useState(0);
	var [twosScore, setTwosScore] = useState(0);
	var [threesScore, setThreesScore] = useState(0);
	var [foursScore, setFoursScore] = useState(0);
	var [fivesScore, setFivesScore] = useState(0);
	var [sixesScore, setSixesScore] = useState(0);

	var [onesLocked, setOnesLocked] = useState(false);
	var [twosLocked, setTwosLocked] = useState(false);
	var [threesLocked, setThreesLocked] = useState(false);
	var [foursLocked, setFoursLocked] = useState(false);
	var [fivesLocked, setFivesLocked] = useState(false);
	var [sixesLocked, setSixesLocked] = useState(false);

	var [fourKindScore, setFourKindScore] = useState(0);
	var [fiveKindScore, setFiveKindScore] = useState(0);
	var [splitScore, setSplitScore] = useState(0);
	var [threePairScore, setThreePairScore] = useState(0);
	var [smallStraightScore, setSmallStraightScore] = useState(0);
	var [largeStraightScore, setLargeStraightScore] = useState(0);

	var [fourKindLock, setFourKindLock] = useState(false);
	var [fiveKindLock, setFiveKindLock] = useState(false);
	var [splitLock, setSplitLock] = useState(false);
	var [threePairLock, setThreePairLock] = useState(false);
	var [smallStraightLock, setSmallStraightLock] = useState(false);
	var [largeStraightLock, setLargeStraightLock] = useState(false);

	var [choiceScore, setChoiceScore] = useState(0);
	var [choiceLock, setChoiceLock] = useState(false);

	var [yachtScore, setYachtScore] = useState(0);
	var [yachtLock, setYachtLock] = useState(false);

	var bonusVal = 0;
	const bonusMin = 66;

	var sumOnes = categoryFilter(props.diceCurrentValueArray, 1);
	var sumTwos = categoryFilter(props.diceCurrentValueArray, 2);
	var sumThrees = categoryFilter(props.diceCurrentValueArray, 3);
	var sumFours = categoryFilter(props.diceCurrentValueArray, 4);
	var sumFives = categoryFilter(props.diceCurrentValueArray, 5);
	var sumSixes = categoryFilter(props.diceCurrentValueArray, 6);

	var sumChoice = props.diceCurrentValueArray.reduce((a, b) => a + b, 0);

	//todo map filter
	var filterOnes = props.diceCurrentValueArray.filter((el) => {
		return el === 1;
	});
	var filterTwos = props.diceCurrentValueArray.filter((el) => {
		return el === 2;
	});
	var filterThrees = props.diceCurrentValueArray.filter((el) => {
		return el === 3;
	});
	var filterFours = props.diceCurrentValueArray.filter((el) => {
		return el === 4;
	});
	var filterFives = props.diceCurrentValueArray.filter((el) => {
		return el === 5;
	});
	var filterSixes = props.diceCurrentValueArray.filter((el) => {
		return el === 6;
	});

	var allFiltersArray = [
		filterOnes,
		filterTwos,
		filterThrees,
		filterFours,
		filterFives,
		filterSixes,
	];

	var filterLengths = allFiltersArray.map((a) => a.length);
	var filterLengthThree = filterLengths.filter((el) => {
		return el === 3;
	});
	var filterLengthTwo = filterLengths.filter((el) => {
		return el === 2;
	});

	const arrSmallStraight1 = [1, 2, 3, 4];
	const arrSmallStraight2 = [2, 3, 4, 5];
	const arrSmallStraight3 = [3, 4, 5, 6];
	const arrLargeStraight1 = [1, 2, 3, 4, 5];
	const arrLargeStraight2 = [2, 3, 4, 5, 6];

	var sumSplit = splitAdder(props.diceCurrentValueArray);
	var sumThreePair = threePairAdder(props.diceCurrentValueArray);
	var sumFourKind = fourKindAdder(props.diceCurrentValueArray);
	var sumFiveKind = fiveKindAdder(props.diceCurrentValueArray);
	var sumSmallStraight = smallStraightAdder(props.diceCurrentValueArray);
	var sumLargeStraight = largeStraightAdder(props.diceCurrentValueArray);
	var sumYacht = yachtAdder(props.diceCurrentValueArray);

	function categoryFilter(arr: number[], value: number) {
		var onlyCategory = arr.filter((el) => {
			return el === value;
		});
		return onlyCategory.reduce((a, b) => a + b, 0); //reconsider extraction of this line
	}

	function onesAdder(arr: number[]) {
		setOnesLocked(true);
		props.resetDice();
		props.setTurnCount(props.turnCount + 1);
		return setOnesScore(sumOnes);
	}

	function twosAdder(arr: number[]) {
		setTwosLocked(true);
		props.resetDice();
		props.setTurnCount(props.turnCount + 1);
		return setTwosScore(sumTwos);
	}

	function threesAdder(arr: number[]) {
		setThreesLocked(true);
		props.resetDice();
		props.setTurnCount(props.turnCount + 1);
		return setThreesScore(sumThrees);
	}

	function foursAdder(arr: number[]) {
		setFoursLocked(true);
		props.resetDice();
		props.setTurnCount(props.turnCount + 1);
		return setFoursScore(sumFours);
	}

	function fivesAdder(arr: number[]) {
		setFivesLocked(true);
		props.resetDice();
		props.setTurnCount(props.turnCount + 1);
		return setFivesScore(sumFives);
	}

	function sixesAdder(arr: number[]) {
		setSixesLocked(true);
		props.resetDice();
		props.setTurnCount(props.turnCount + 1);
		return setSixesScore(sumSixes);
	}

	function choiceAdder(arr: number[]) {
		setChoiceLock(true);
		props.resetDice();
		props.setTurnCount(props.turnCount + 1);
		return setChoiceScore(sumChoice);
	}

	function splitAdder(arr: number[]): number {
		if (filterLengthThree.length == 2 || Math.max(...filterLengths) == 6) {
			sumSplit = props.diceCurrentValueArray.reduce((a, b) => a + b, 0);
		} else sumSplit = 0;
		return sumSplit;
	}

	function checkSplit(arr: number[]) {
		setSplitLock(true);

		props.resetDice();
		props.setTurnCount(props.turnCount + 1);

		if (filterLengthThree.length == 2 || Math.max(...filterLengths) == 6) {
			return setSplitScore(sumSplit);
		} else return setSplitScore(0);
	}

	function threePairAdder(arr: number[]): number {
		if (filterLengthTwo.length == 3 || Math.max(...filterLengths) == 6) {
			sumThreePair = props.diceCurrentValueArray.reduce((a, b) => a + b, 0);
		} else sumThreePair = 0;
		return sumThreePair;
	}

	function checkThreePair(arr: number[]) {
		setThreePairLock(true);

		props.resetDice();
		props.setTurnCount(props.turnCount + 1);

		if (filterLengthTwo.length == 3 || Math.max(...filterLengths) == 6) {
			return setThreePairScore(sumThreePair);
		} else return setThreePairScore(0);
	}

	function fourKindAdder(arr: number[]): number {
		if (Math.max(...filterLengths) >= 4) {
			sumFourKind = props.diceCurrentValueArray.reduce((a, b) => a + b, 0);
		} else sumFourKind = 0;
		return sumFourKind;
	}

	function checkFourKind(arr: number[]) {
		// filter currentDiceArray for each possible dice value
		// length of filtered array >= 4 kind minimum
		// return sum of filtered array
		setFourKindLock(true);

		props.resetDice();
		props.setTurnCount(props.turnCount + 1);

		if (Math.max(...filterLengths) >= 4) {
			return setFourKindScore(sumFourKind);
		} else return setFourKindScore(0);
	}

	function fiveKindAdder(arr: number[]): number {
		if (Math.max(...filterLengths) >= 5) {
			sumFiveKind = props.diceCurrentValueArray.reduce((a, b) => a + b, 0);
		} else sumFiveKind = 0;
		return sumFiveKind;
	}

	function checkFiveKind(arr: number[]) {
		setFiveKindLock(true);

		props.resetDice();
		props.setTurnCount(props.turnCount + 1);

		if (Math.max(...filterLengths) >= 5) {
			return setFiveKindScore(sumFiveKind);
		} else return setFiveKindScore(0);
	}

	function smallStraightAdder(arr: number[]): number {
		if (
			arrSmallStraight1.every((i) => arr.includes(i)) ||
			arrSmallStraight2.every((i) => arr.includes(i)) ||
			arrSmallStraight3.every((i) => arr.includes(i))
		) {
			return (sumSmallStraight = 45);
		} else return (sumSmallStraight = 0);
	}

	function checkSmallStraight(arr: number[]) {
		setSmallStraightLock(true);

		props.resetDice();
		props.setTurnCount(props.turnCount + 1);

		if (
			arrSmallStraight1.every((i) => arr.includes(i)) ||
			arrSmallStraight2.every((i) => arr.includes(i)) ||
			arrSmallStraight3.every((i) => arr.includes(i))
		) {
			return setSmallStraightScore(45);
		} else return setSmallStraightScore(0);
	}

	function largeStraightAdder(arr: number[]): number {
		if (
			arrLargeStraight1.every((i) => arr.includes(i)) ||
			arrLargeStraight2.every((i) => arr.includes(i))
		) {
			return (sumLargeStraight = 60);
		} else return (sumLargeStraight = 0);
	}

	function checkLargeStraight(arr: number[]) {
		setLargeStraightLock(true);

		props.resetDice();
		props.setTurnCount(props.turnCount + 1);

		if (
			arrLargeStraight1.every((i) => arr.includes(i)) ||
			arrLargeStraight2.every((i) => arr.includes(i))
		) {
			return setLargeStraightScore(60);
		} else return setLargeStraightScore(0);
	}

	function yachtAdder(arr: number[]): number {
		if (Math.max(...filterLengths) == 6) {
			return (sumYacht = 100);
		} else return (sumYacht = 0);
	}

	function checkYacht(arr: number[]) {
		setYachtLock(true);

		props.resetDice();
		props.setTurnCount(props.turnCount + 1);

		if (Math.max(...filterLengths) == 6) {
			return setYachtScore(100);
		} else return setYachtScore(0);
	}

	var upperSum =
		onesScore + twosScore + threesScore + foursScore + fivesScore + sixesScore;

	if (upperSum >= bonusMin) {
		bonusVal = 54;
	}

	var lowerSum = splitScore + threePairScore;
	choiceScore +
		fourKindScore +
		fiveKindScore +
		smallStraightScore +
		largeStraightScore +
		yachtScore;

	var totalSum = upperSum + lowerSum + bonusVal;

	// useEffect(() => {
	// 	console.log(
	// 		"sums ",
	// 		onesScore,
	// 		twosScore,
	// 		threesScore,
	// 		foursScore,
	// 		fivesScore,
	// 		sixesScore
	// 	);
	// }, [props.rollCount]);

	return (
		<div className="scoreboard-container" ref={props.refEl}>
			<div className="scoreboard">
				<table className="upper-categories">
					<thead>
						{window.innerHeight >= 800 ? (
							<tr className="turn-count">
								<th>Turns</th>
								<td>{props.totalTurns - props.turnCount}</td>
							</tr>
						) : (
							<></>
						)}
						<tr
							onClick={
								onesLocked
									? () => {}
									: () => onesAdder(props.diceCurrentValueArray)
							}
							className={onesLocked ? "locked-row" : ""}
						>
							<th>Ones</th>
							<td>{onesLocked ? onesScore : sumOnes}</td>
						</tr>
						<tr
							onClick={
								twosLocked
									? () => {}
									: () => twosAdder(props.diceCurrentValueArray)
							}
							className={twosLocked ? "locked-row" : ""}
						>
							<th>Twos</th>
							<td>{twosLocked ? twosScore : sumTwos}</td>
						</tr>
						<tr
							onClick={
								threesLocked
									? () => {}
									: () => threesAdder(props.diceCurrentValueArray)
							}
							className={threesLocked ? "locked-row" : ""}
						>
							<th>Threes</th>
							<td>{threesLocked ? threesScore : sumThrees}</td>
						</tr>
						<tr
							onClick={
								foursLocked
									? () => {}
									: () => foursAdder(props.diceCurrentValueArray)
							}
							className={foursLocked ? "locked-row" : ""}
						>
							<th>Fours</th>
							<td>{foursLocked ? foursScore : sumFours}</td>
						</tr>
						<tr
							onClick={
								fivesLocked
									? () => {}
									: () => fivesAdder(props.diceCurrentValueArray)
							}
							className={fivesLocked ? "locked-row" : ""}
						>
							<th>Fives</th>
							<td>{fivesLocked ? fivesScore : sumFives}</td>
						</tr>
						<tr
							onClick={
								sixesLocked
									? () => {}
									: () => sixesAdder(props.diceCurrentValueArray)
							}
							className={sixesLocked ? "locked-row" : ""}
						>
							<th>Sixes</th>
							<td>{sixesLocked ? sixesScore : sumSixes}</td>
						</tr>
						<tr className="upper-sum">
							<th>Upper Sum</th>
							<td>{upperSum}</td>
						</tr>
						<tr className={bonusVal >= bonusMin ? "bonus-true" : "bonus-false"}>
							<th>Bonus</th>
							<td>{bonusVal}</td>
						</tr>
						<tr
							onClick={
								choiceLock
									? () => {}
									: () => choiceAdder(props.diceCurrentValueArray)
							}
							className={choiceLock ? "locked-row" : ""}
						>
							<th>Choice</th>
							<td>{choiceLock ? choiceScore : sumChoice}</td>
						</tr>
						<tr
							onClick={
								splitLock
									? () => {}
									: () => checkSplit(props.diceCurrentValueArray)
							}
							className={splitLock ? "locked-row" : ""}
						>
							<th>Split</th>
							<td>{splitLock ? splitScore : sumSplit}</td>
						</tr>
						<tr
							onClick={
								threePairLock
									? () => {}
									: () => checkThreePair(props.diceCurrentValueArray)
							}
							className={threePairLock ? "locked-row" : ""}
						>
							<th>Three Pairs</th>
							<td>{threePairLock ? threePairScore : sumThreePair}</td>
						</tr>
						<tr
							onClick={
								fourKindLock
									? () => {}
									: () => checkFourKind(props.diceCurrentValueArray)
							}
							className={fourKindLock ? "locked-row" : ""}
						>
							<th>Four of a Kind</th>
							<td>{fourKindLock ? fourKindScore : sumFourKind}</td>
						</tr>
						<tr
							onClick={
								fiveKindLock
									? () => {}
									: () => checkFiveKind(props.diceCurrentValueArray)
							}
							className={fiveKindLock ? "locked-row" : ""}
						>
							<th>Five of a Kind</th>
							<td>{fiveKindLock ? fiveKindScore : sumFiveKind}</td>
						</tr>
						<tr
							onClick={
								smallStraightLock
									? () => {}
									: () => checkSmallStraight(props.diceCurrentValueArray)
							}
							className={smallStraightLock ? "locked-row" : ""}
						>
							<th>Small Straight</th>
							<td>
								{smallStraightLock ? smallStraightScore : sumSmallStraight}
							</td>
						</tr>
						<tr
							onClick={
								largeStraightLock
									? () => {}
									: () => checkLargeStraight(props.diceCurrentValueArray)
							}
							className={largeStraightLock ? "locked-row" : ""}
						>
							<th>Large Straight</th>
							<td>
								{largeStraightLock ? largeStraightScore : sumLargeStraight}
							</td>
						</tr>
						<tr
							onClick={
								yachtLock
									? () => {}
									: () => checkYacht(props.diceCurrentValueArray)
							}
							className={yachtLock ? "locked-row" : ""}
						>
							<th>Yacht!</th>
							<td>{yachtLock ? yachtScore : sumYacht}</td>
						</tr>
						<tr className="total-score">
							<th>Total Score</th>
							<td>{totalSum}</td>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	);
}

export default Scoreboard;
