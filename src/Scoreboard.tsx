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
	rollCount: number;
}) {
	var [onesCatVal, setOnesCatVal] = useState(0);
	var [twosCatVal, setTwosCatVal] = useState(0);
	var [threesCatVal, setThreesCatVal] = useState(0);
	var [foursCatVal, setFoursCatVal] = useState(0);
	var [fivesCatVal, setFivesCatVal] = useState(0);
	var [sixesCatVal, setSixesCatVal] = useState(0);

	var [fourKindVal, setFourKindVal] = useState(0);
	var [fiveKindVal, setFiveKindVal] = useState(0);
	var [splitVal, setSplitVal] = useState(0);
	var [smallStraightVal, setSmallStraightVal] = useState(0);
	var [largeStraightVal, setLargeStraightVal] = useState(0);

	var [choiceCatVal, setChoiceCatVal] = useState(0);

	var [yachtCatVal, setYachtCatVal] = useState(0);

	var bonusVal = 0;

	function categoryFilter(arr: number[], value: number) {
		var onlyCategory = arr.filter((el) => {
			return el === value;
		});
		return onlyCategory.reduce((a, b) => a + b, 0); //reconsider extraction of this line
	}

	function onesAdder(arr: number[]) {
		var sumOnes = categoryFilter(props.diceCurrentValueArray, 1);
		return setOnesCatVal(sumOnes);
	}

	function twosAdder(arr: number[]) {
		var sumTwos = categoryFilter(props.diceCurrentValueArray, 2);
		return setTwosCatVal(sumTwos);
	}

	function threesAdder(arr: number[]) {
		var sumThrees = categoryFilter(props.diceCurrentValueArray, 3);
		return setThreesCatVal(sumThrees);
	}

	function foursAdder(arr: number[]) {
		var sumFours = categoryFilter(props.diceCurrentValueArray, 4);
		return setFoursCatVal(sumFours);
	}

	function fivesAdder(arr: number[]) {
		var sumFives = categoryFilter(props.diceCurrentValueArray, 5);
		return setFivesCatVal(sumFives);
	}

	function sixesAdder(arr: number[]) {
		var sumSixes = categoryFilter(props.diceCurrentValueArray, 6);
		return setSixesCatVal(sumSixes);
	}

	function choiceAdder(arr: number[]) {
		var choiceSum = arr.reduce((a, b) => a + b, 0);
		return setChoiceCatVal(choiceSum);
	}

	function checkSplit(arr: number[]) {}

	function checkFourKind(arr: number[]) {
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

		// console.log("filter lengths" + filterLengths);
		// console.log(
		// 	allFiltersArray[filterLengths.indexOf(Math.max(...filterLengths))]
		// );
		if (Math.max(...filterLengths) >= 4) {
			return setFourKindVal(
				props.diceCurrentValueArray.reduce((a, b) => a + b, 0)
			);
		}
		// filter currentDiceArray for each possible dice value
		// length of filtered array >= 4 kind minimum

		// return sum of filtered array
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

		if (Math.max(...filterLengths) >= 5) {
			return setFiveKindVal(
				props.diceCurrentValueArray.reduce((a, b) => a + b, 0)
			);
		} else return setFiveKindVal(0);
		// filter currentDiceArray for each possible dice value
		// length of filtered array >= 4 kind minimum
		// return sum of filtered array
	}

	function checkSmallStraight(arr: number[]) {
		const arrSmallStraight1 = [1, 2, 3, 4];
		const arrSmallStraight2 = [2, 3, 4, 5];
		const arrSmallStraight3 = [3, 4, 5, 6];
		if (
			arrSmallStraight1.every((i) => arr.includes(i)) ||
			arrSmallStraight2.every((i) => arr.includes(i)) ||
			arrSmallStraight3.every((i) => arr.includes(i))
		) {
			//console.log("small straight!");
			return setSmallStraightVal(45);
		} else return setSmallStraightVal(0);
	}
	function checkLargeStraight(arr: number[]) {
		const arrLargeStraight1 = [1, 2, 3, 4, 5];
		const arrLargeStraight2 = [2, 3, 4, 5, 6];
		if (
			arrLargeStraight1.every((i) => arr.includes(i)) ||
			arrLargeStraight2.every((i) => arr.includes(i))
		) {
			//console.log("large straight!");
			return setLargeStraightVal(60);
		} else return setLargeStraightVal(0);
	}

	function checkYacht(arr: number[]) {
		props.diceCurrentValueArray.filter((el, value) => {});
		// filter currentDiceArray for each possible dice value
		// length of filtered array >= 6 kind minimum
	}

	// var sumTwos = categoryFilter(props.diceCurrentValueArray, 2);
	// var sumThrees = categoryFilter(props.diceCurrentValueArray, 3);
	// var sumFours = categoryFilter(props.diceCurrentValueArray, 4);
	// var sumFives = categoryFilter(props.diceCurrentValueArray, 5);
	// var sumSixes = categoryFilter(props.diceCurrentValueArray, 6);
	// var sumChoice = choiceAdder(props.diceCurrentValueArray);

	var upperSum =
		onesCatVal +
		twosCatVal +
		threesCatVal +
		foursCatVal +
		fivesCatVal +
		sixesCatVal;

	if (upperSum >= 63) {
		bonusVal = 45;
	}

	var lowerSum = choiceCatVal;
	fourKindVal +
		fiveKindVal +
		splitVal +
		smallStraightVal +
		largeStraightVal +
		yachtCatVal;

	var totalSum = upperSum + lowerSum + bonusVal;

	// useEffect(() => {
	// 	if (sumOnes || sumTwos || sumThrees || sumFours || sumFives || sumSixes) {
	// 		console.log(
	// 			"sums ",
	// 			sumOnes,
	// 			sumTwos,
	// 			sumThrees,
	// 			sumFours,
	// 			sumFives,
	// 			sumSixes
	// 		);
	// 	}
	// }, [props.rollCount]);

	return (
		<div className="scoreboard-container">
			<div className="scoreboard">
				<table className="upper-categories">
					<thead>
						<tr onClick={() => onesAdder(props.diceCurrentValueArray)}>
							<th>Ones</th>
							<td>{onesCatVal}</td>
						</tr>
						<tr onClick={() => twosAdder(props.diceCurrentValueArray)}>
							<th>Twos</th>
							<td>{twosCatVal}</td>
						</tr>
						<tr onClick={() => threesAdder(props.diceCurrentValueArray)}>
							<th>Threes</th>
							<td>{threesCatVal}</td>
						</tr>
						<tr onClick={() => foursAdder(props.diceCurrentValueArray)}>
							<th>Fours</th>
							<td>{foursCatVal}</td>
						</tr>
						<tr onClick={() => fivesAdder(props.diceCurrentValueArray)}>
							<th>Fives</th>
							<td>{fivesCatVal}</td>
						</tr>
						<tr onClick={() => sixesAdder(props.diceCurrentValueArray)}>
							<th>Sixes</th>
							<td>{sixesCatVal}</td>
						</tr>
						<tr className="upper-sum">
							<th>Categories Sum</th>
							<td>{upperSum}</td>
						</tr>
						<tr
							onClick={() => choiceAdder(props.diceCurrentValueArray)}
							className="choice-category"
						>
							<th>Choice</th>
							<td>{choiceCatVal}</td>
						</tr>
						<tr onClick={() => checkFourKind(props.diceCurrentValueArray)}>
							<th>Four of a kind</th>
							<td>{fourKindVal}</td>
						</tr>
						<tr onClick={() => checkFiveKind(props.diceCurrentValueArray)}>
							<th>Five of a kind</th>
							<td>{fiveKindVal}</td>
						</tr>
						<tr onClick={() => checkSplit(props.diceCurrentValueArray)}>
							<th>Split</th>
							<td>{splitVal}</td>
						</tr>

						<tr onClick={() => checkSmallStraight(props.diceCurrentValueArray)}>
							<th>Small Straight</th>
							<td>{smallStraightVal}</td>
						</tr>
						<tr onClick={() => checkLargeStraight(props.diceCurrentValueArray)}>
							<th>Large Straight</th>
							<td>{largeStraightVal}</td>
						</tr>
						<tr onClick={() => checkYacht(props.diceCurrentValueArray)}>
							<th>Yacht!</th>
							<td>{yachtCatVal}</td>
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
