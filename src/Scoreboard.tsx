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

	var bonusScore = 0;
	var bonusVal = 54;
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
		bonusScore = bonusVal;
	}

	var lowerSum =
		splitScore +
		threePairScore +
		choiceScore +
		fourKindScore +
		fiveKindScore +
		smallStraightScore +
		largeStraightScore +
		yachtScore;

	var totalSum = upperSum + lowerSum + bonusScore;

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

	var [reveal, setReveal] = useState(false);

	function handleReveal() {
		setReveal(!reveal);
		//setTimeout(() => setReveal(false), 5000);
	}

	return (
		<div className="scoreboard-container" ref={props.refEl}>
			<div className="scoreboard">
				<table className="upper-categories">
					<thead>
						<tr className={onesLocked ? "locked-row" : ""}>
							<th onClick={handleReveal}>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "Sum of only Ones" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{!reveal ? "Ones" : ""}
								</span>
							</th>
							<td
								onClick={
									onesLocked
										? () => {}
										: () => {
												onesAdder(props.diceCurrentValueArray),
													setReveal(false);
										  }
								}
							>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{onesLocked ? onesScore : !reveal ? sumOnes : ""}
								</span>
							</td>
						</tr>
						<tr className={twosLocked ? "locked-row" : ""}>
							<th onClick={handleReveal}>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "Sum of only Twos" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{!reveal ? "Twos" : ""}
								</span>
							</th>
							<td
								onClick={
									twosLocked
										? () => {}
										: () => {
												twosAdder(props.diceCurrentValueArray),
													setReveal(false);
										  }
								}
							>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{twosLocked
										? twosScore
										: !reveal
										? sumTwos
										: twosLocked
										? twosScore
										: ""}
								</span>
							</td>
						</tr>
						<tr className={threesLocked ? "locked-row" : ""}>
							<th onClick={handleReveal}>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "Sum of only Threes" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{!reveal ? "Threes" : ""}
								</span>
							</th>
							<td
								onClick={
									threesLocked
										? () => {}
										: () => {
												threesAdder(props.diceCurrentValueArray),
													setReveal(false);
										  }
								}
							>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{threesLocked ? threesScore : !reveal ? sumThrees : ""}
								</span>
							</td>
						</tr>
						<tr className={foursLocked ? "locked-row" : ""}>
							<th onClick={handleReveal}>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "Sum of only Fours" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{!reveal ? "Fours" : ""}
								</span>
							</th>
							<td
								onClick={
									foursLocked
										? () => {}
										: () => {
												foursAdder(props.diceCurrentValueArray),
													setReveal(false);
										  }
								}
							>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{foursLocked ? foursScore : !reveal ? sumFours : ""}
								</span>
							</td>
						</tr>
						<tr className={fivesLocked ? "locked-row" : ""}>
							<th onClick={handleReveal}>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "Sum of only Fives" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{!reveal ? "Fives" : ""}
								</span>
							</th>
							<td
								onClick={
									fivesLocked
										? () => {}
										: () => {
												fivesAdder(props.diceCurrentValueArray),
													setReveal(false);
										  }
								}
							>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{fivesLocked ? fivesScore : !reveal ? sumFives : ""}
								</span>
							</td>
						</tr>
						<tr className={sixesLocked ? "locked-row" : ""}>
							<th onClick={handleReveal}>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "Sum of only Sixes" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{!reveal ? "Sixes" : ""}
								</span>
							</th>
							<td
								onClick={
									sixesLocked
										? () => {}
										: () => {
												sixesAdder(props.diceCurrentValueArray),
													setReveal(false);
										  }
								}
							>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{sixesLocked ? sixesScore : !reveal ? sumSixes : ""}
								</span>
							</td>
						</tr>
						<tr className="upper-sum">
							<th onClick={handleReveal}>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "if Upper Sum >=" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{!reveal ? "Upper Sum" : ""}
								</span>
							</th>
							<td onClick={handleReveal}>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? bonusMin + "pts" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{!reveal ? upperSum : ""}
								</span>
							</td>
						</tr>
						<tr className={bonusVal >= bonusMin ? "bonus-true" : "bonus-false"}>
							<th onClick={handleReveal}>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "then Bonus =" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{!reveal ? "Bonus" : ""}
								</span>
							</th>
							<td onClick={handleReveal}>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? bonusVal + "pts" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{!reveal ? bonusScore : ""}
								</span>
							</td>
						</tr>
						<tr className={choiceLock ? "locked-row" : ""}>
							<th onClick={handleReveal}>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "Sum of all current dice" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{!reveal ? "Choice" : ""}
								</span>
							</th>
							<td
								onClick={
									choiceLock
										? () => {}
										: () => {
												choiceAdder(props.diceCurrentValueArray),
													setReveal(false);
										  }
								}
							>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{choiceLock ? choiceScore : !reveal ? sumChoice : ""}
								</span>
							</td>
						</tr>
						<tr className={splitLock ? "locked-row" : ""}>
							<th onClick={handleReveal}>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "Sum if [ X X X + Y Y Y ]" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{!reveal ? "Split" : ""}
								</span>
							</th>
							<td
								onClick={
									splitLock
										? () => {}
										: () => {
												checkSplit(props.diceCurrentValueArray),
													setReveal(false);
										  }
								}
							>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{splitLock ? splitScore : !reveal ? sumSplit : ""}
								</span>
							</td>
						</tr>
						<tr className={threePairLock ? "locked-row" : ""}>
							<th onClick={handleReveal}>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "Sum if [ X X + Y Y + Z Z ]" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{!reveal ? "Three Pairs" : ""}
								</span>
							</th>
							<td
								onClick={
									threePairLock
										? () => {}
										: () => {
												checkThreePair(props.diceCurrentValueArray),
													setReveal(false);
										  }
								}
							>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{threePairLock ? threePairScore : !reveal ? sumThreePair : ""}
								</span>
							</td>
						</tr>
						<tr className={fourKindLock ? "locked-row" : ""}>
							<th onClick={handleReveal}>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "Sum all dice if [ four ] are identical" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{!reveal ? "Four of a Kind" : ""}
								</span>
							</th>
							<td
								onClick={
									fourKindLock
										? () => {}
										: () => {
												checkFourKind(props.diceCurrentValueArray),
													setReveal(false);
										  }
								}
							>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{fourKindLock ? fourKindScore : !reveal ? sumFourKind : ""}
								</span>
							</td>
						</tr>
						<tr className={fiveKindLock ? "locked-row" : ""}>
							<th onClick={handleReveal}>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "Sum all dice if [ five ] are identical" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{!reveal ? "Five of a Kind" : ""}
								</span>
							</th>
							<td
								onClick={
									fiveKindLock
										? () => {}
										: () => {
												checkFiveKind(props.diceCurrentValueArray),
													setReveal(false);
										  }
								}
							>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{fiveKindLock ? fiveKindScore : !reveal ? sumFiveKind : ""}
								</span>
							</td>
						</tr>
						<tr className={smallStraightLock ? "locked-row" : ""}>
							<th onClick={handleReveal}>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "Four consecutive dice" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{!reveal ? "Small Straight" : ""}
								</span>
							</th>
							<td
								onClick={
									smallStraightLock
										? () => {}
										: () => {
												checkSmallStraight(props.diceCurrentValueArray),
													setReveal(false);
										  }
								}
							>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "45pts" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{smallStraightLock && !reveal
										? smallStraightScore
										: !reveal
										? sumSmallStraight
										: ""}
								</span>
							</td>
						</tr>
						<tr className={largeStraightLock ? "locked-row" : ""}>
							<th onClick={handleReveal}>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "Five consecutive dice" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{!reveal ? "Large Straight" : ""}
								</span>
							</th>
							<td
								onClick={
									largeStraightLock
										? () => {}
										: () => {
												checkLargeStraight(props.diceCurrentValueArray),
													setReveal(false);
										  }
								}
							>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "60pts" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{largeStraightLock && !reveal
										? largeStraightScore
										: !reveal
										? sumLargeStraight
										: ""}
								</span>
							</td>
						</tr>
						<tr className={yachtLock ? "locked-row" : ""}>
							<th onClick={handleReveal}>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "Six identical dice!" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{!reveal ? "Yacht!" : ""}
								</span>
							</th>
							<td
								onClick={
									yachtLock
										? () => {}
										: () => {
												checkYacht(props.diceCurrentValueArray),
													setReveal(false);
										  }
								}
							>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "100pts" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{yachtLock && !reveal ? yachtScore : !reveal ? sumYacht : ""}
								</span>
							</td>
						</tr>
						<tr className="total-score">
							<th onClick={handleReveal}>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? "Turns remaining" : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{!reveal ? "Total Score" : ""}
								</span>
							</th>
							<td onClick={handleReveal}>
								<span className={reveal ? "reveal-fade-in" : "reveal-fade-out"}>
									{reveal ? props.totalTurns - props.turnCount : ""}
								</span>
								<span
									className={!reveal ? "reveal-fade-in" : "reveal-fade-out"}
								>
									{!reveal ? totalSum : ""}
								</span>
							</td>
						</tr>
					</thead>
				</table>
			</div>
		</div>
	);
}

export default Scoreboard;
