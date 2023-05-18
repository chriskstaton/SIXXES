import { useEffect, useState } from "react";
import "./Scoreboard.scss";

interface Categories {
	ones: number;
	twos: number;
	threes: number;
	fours: number;
	fives: number;
	sixes: number;
}

function Scoreboard(props: {
	diceCurrentValueArray: number[];
	//rollCount: number;
	turnCount: number;
	setTurnCount: Function;
	resetDice(): void;
	//setScrollPosition: Function;
	//scrollPosition: number;
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

	var [fourKindScore, setFourKindVal] = useState(0);
	var [fiveKindScore, setFiveKindVal] = useState(0);
	var [splitVal, setSplitVal] = useState(0);
	var [smallStraightVal, setSmallStraightVal] = useState(0);
	var [largeStraightVal, setLargeStraightVal] = useState(0);

	var [fourKindLock, setFourKindLock] = useState(false);
	var [fiveKindLock, setFiveKindLock] = useState(false);
	var [splitLock, setSplitLock] = useState(false);
	var [smallStraightLock, setSmallStraightLock] = useState(false);
	var [largeStraightLock, setLargeStraightLock] = useState(false);

	var [choiceScore, setChoiceScore] = useState(0);
	var [choiceLock, setChoiceLock] = useState(false);

	var [yachtScore, setYachtScore] = useState(0);
	var [yachtLock, setYachtLock] = useState(false);

	var bonusVal = 0;
	const bonusMin = 5;

	function categoryFilter(arr: number[], value: number) {
		var onlyCategory = arr.filter((el) => {
			return el === value;
		});
		return onlyCategory.reduce((a, b) => a + b, 0); //reconsider extraction of this line
	}

	function onesAdder(arr: number[]) {
		var sumOnes = categoryFilter(props.diceCurrentValueArray, 1);
		setOnesLocked(true);
		props.resetDice();
		props.setTurnCount(props.turnCount + 1);
		return setOnesScore(sumOnes);
	}

	function twosAdder(arr: number[]) {
		var sumTwos = categoryFilter(props.diceCurrentValueArray, 2);
		setTwosLocked(true);
		props.resetDice();
		props.setTurnCount(props.turnCount + 1);
		return setTwosScore(sumTwos);
	}

	function threesAdder(arr: number[]) {
		var sumThrees = categoryFilter(props.diceCurrentValueArray, 3);
		setThreesLocked(true);
		props.resetDice();
		props.setTurnCount(props.turnCount + 1);
		return setThreesScore(sumThrees);
	}

	function foursAdder(arr: number[]) {
		var sumFours = categoryFilter(props.diceCurrentValueArray, 4);
		setFoursLocked(true);
		props.resetDice();
		props.setTurnCount(props.turnCount + 1);
		return setFoursScore(sumFours);
	}

	function fivesAdder(arr: number[]) {
		var sumFives = categoryFilter(props.diceCurrentValueArray, 5);
		setFivesLocked(true);
		props.resetDice();
		props.setTurnCount(props.turnCount + 1);
		return setFivesScore(sumFives);
	}

	function sixesAdder(arr: number[]) {
		var sumSixes = categoryFilter(props.diceCurrentValueArray, 6);
		setSixesLocked(true);
		props.resetDice();
		props.setTurnCount(props.turnCount + 1);
		return setSixesScore(sumSixes);
	}

	function choiceAdder(arr: number[]) {
		var choiceSum = arr.reduce((a, b) => a + b, 0);
		setChoiceLock(true);
		props.resetDice();
		props.setTurnCount(props.turnCount + 1);
		return setChoiceScore(choiceSum);
	}

	function checkSplit(arr: number[]) {
		var filterOnes = arr.filter((el) => {
			return el === 1;
		});
		var filterTwos = arr.filter((el) => {
			return el === 2;
		});
		var filterThrees = arr.filter((el) => {
			return el === 3;
		});
		var filterFours = arr.filter((el) => {
			return el === 4;
		});
		var filterFives = arr.filter((el) => {
			return el === 5;
		});
		var filterSixes = arr.filter((el) => {
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

		setSplitLock(true);

		props.resetDice();
		props.setTurnCount(props.turnCount + 1);

		if (filterLengthThree.length == 2 || Math.max(...filterLengths) == 6) {
			return setSplitVal(
				props.diceCurrentValueArray.reduce((a, b) => a + b, 0)
			);
		} else return setSplitVal(0);
	}

	function checkFourKind(arr: number[]) {
		// filter currentDiceArray for each possible dice value
		// length of filtered array >= 4 kind minimum
		// return sum of filtered array

		var filterOnes = arr.filter((el) => {
			return el === 1;
		});
		var filterTwos = arr.filter((el) => {
			return el === 2;
		});
		var filterThrees = arr.filter((el) => {
			return el === 3;
		});
		var filterFours = arr.filter((el) => {
			return el === 4;
		});
		var filterFives = arr.filter((el) => {
			return el === 5;
		});
		var filterSixes = arr.filter((el) => {
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
		// console.log(filterLengths.indexOf(Math.max(...filterLengths))); //
		console.log("max filterLength:" + Math.max(...filterLengths));

		setFourKindLock(true);

		props.resetDice();
		props.setTurnCount(props.turnCount + 1);

		if (Math.max(...filterLengths) >= 4) {
			return setFourKindVal(
				props.diceCurrentValueArray.reduce((a, b) => a + b, 0)
			);
		}
	}

	function checkFiveKind(arr: number[]) {
		var filterOnes = arr.filter((el) => {
			return el === 1;
		});
		var filterTwos = arr.filter((el) => {
			return el === 2;
		});
		var filterThrees = arr.filter((el) => {
			return el === 3;
		});
		var filterFours = arr.filter((el) => {
			return el === 4;
		});
		var filterFives = arr.filter((el) => {
			return el === 5;
		});
		var filterSixes = arr.filter((el) => {
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

		console.log("max filterLength:" + Math.max(...filterLengths));

		props.resetDice();
		setFiveKindLock(true);

		props.setTurnCount(props.turnCount + 1);

		if (Math.max(...filterLengths) >= 5) {
			return setFiveKindVal(
				props.diceCurrentValueArray.reduce((a, b) => a + b, 0)
			);
		} else return setFiveKindVal(0);
	}

	function checkSmallStraight(arr: number[]) {
		const arrSmallStraight1 = [1, 2, 3, 4];
		const arrSmallStraight2 = [2, 3, 4, 5];
		const arrSmallStraight3 = [3, 4, 5, 6];

		setSmallStraightLock(true);

		props.resetDice();
		props.setTurnCount(props.turnCount + 1);

		if (
			arrSmallStraight1.every((i) => arr.includes(i)) ||
			arrSmallStraight2.every((i) => arr.includes(i)) ||
			arrSmallStraight3.every((i) => arr.includes(i))
		) {
			return setSmallStraightVal(45);
		} else return setSmallStraightVal(0);
	}
	function checkLargeStraight(arr: number[]) {
		const arrLargeStraight1 = [1, 2, 3, 4, 5];
		const arrLargeStraight2 = [2, 3, 4, 5, 6];

		setLargeStraightLock(true);

		props.resetDice();
		props.setTurnCount(props.turnCount + 1);

		if (
			arrLargeStraight1.every((i) => arr.includes(i)) ||
			arrLargeStraight2.every((i) => arr.includes(i))
		) {
			//console.log("large straight!");
			return setLargeStraightVal(60);
		} else return setLargeStraightVal(0);
	}

	function checkYacht(arr: number[]) {
		var filterOnes = arr.filter((el) => {
			return el === 1;
		});
		var filterTwos = arr.filter((el) => {
			return el === 2;
		});
		var filterThrees = arr.filter((el) => {
			return el === 3;
		});
		var filterFours = arr.filter((el) => {
			return el === 4;
		});
		var filterFives = arr.filter((el) => {
			return el === 5;
		});
		var filterSixes = arr.filter((el) => {
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

		console.log("max filterLength:" + Math.max(...filterLengths));

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

	var lowerSum =
		choiceScore +
		fourKindScore +
		fiveKindScore +
		splitVal +
		smallStraightVal +
		largeStraightVal +
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
		<div className="scoreboard-container">
			<div className="scoreboard">
				<table className="upper-categories">
					<thead>
						<tr
							onClick={
								onesLocked
									? () => {}
									: () => onesAdder(props.diceCurrentValueArray)
							}
							className={onesLocked ? "locked-row" : ""}
						>
							<th>Ones</th>
							<td>{onesScore}</td>
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
							<td>{twosScore}</td>
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
							<td>{threesScore}</td>
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
							<td>{foursScore}</td>
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
							<td>{fivesScore}</td>
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
							<td>{sixesScore}</td>
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
							<td>{choiceScore}</td>
						</tr>
						<tr
							onClick={
								fourKindLock
									? () => {}
									: () => checkFourKind(props.diceCurrentValueArray)
							}
							className={fourKindLock ? "locked-row" : ""}
						>
							<th>Four of a kind</th>
							<td>{fourKindScore}</td>
						</tr>
						<tr
							onClick={
								fiveKindLock
									? () => {}
									: () => checkFiveKind(props.diceCurrentValueArray)
							}
							className={fiveKindLock ? "locked-row" : ""}
						>
							<th>Five of a kind</th>
							<td>{fiveKindScore}</td>
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
							<td>{splitVal}</td>
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
							<td>{smallStraightVal}</td>
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
							<td>{largeStraightVal}</td>
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
							<td>{yachtScore}</td>
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
