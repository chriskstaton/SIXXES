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
	var [fullHouseVal, setFullHouseVal] = useState(0);
	var [smallStraightVal, setSmallStraightVal] = useState(0);
	var [largeStraightVal, setLargeStraightVal] = useState(0);

	var [choiceCatVal, setChoiceCatVal] = useState(0);

	var [yachtCatVal, setYachtCatVal] = useState(0);

	var bonusVal = 0;

	function categoryFilter(arr: number[], value: number) {
		var onlyCategory = arr.filter((el) => {
			return el === value;
		});
		return onlyCategory.reduce((a, b) => a + b, 0);
	}

	function choiceAdder(arr: number[]) {
		return arr.reduce((a, b) => a + b, 0);
	}
	function fullHouseAdder(arr: number[]) {}

	function kindFourFilter(arr: number[]) {}
	function kindFiveFilter(arr: number[]) {}

	function straightSmallChecker(arr: number[]) {
		const arrSmallStraight1 = [1, 2, 3, 4];
		const arrSmallStraight2 = [2, 3, 4, 5];
		const arrSmallStraight3 = [3, 4, 5, 6];
		if (
			arrSmallStraight1.every((i) => arr.includes(i)) ||
			arrSmallStraight2.every((i) => arr.includes(i)) ||
			arrSmallStraight3.every((i) => arr.includes(i))
		) {
			console.log("small straight!");
			return setSmallStraightVal(45);
		}
	}
	function straightLargeChecker(arr: number[]) {
		const arrLargeStraight1 = [1, 2, 3, 4, 5];
		const arrLargeStraight2 = [2, 3, 4, 5, 6];
		if (
			arrLargeStraight1.every((i) => arr.includes(i)) ||
			arrLargeStraight2.every((i) => arr.includes(i))
		) {
			console.log("large straight!");
			return setLargeStraightVal(60);
		}
	}

	function yachtChecker(arr: number[]) {}

	var sumOnes = categoryFilter(props.diceCurrentValueArray, 1);
	var sumTwos = categoryFilter(props.diceCurrentValueArray, 2);
	var sumThrees = categoryFilter(props.diceCurrentValueArray, 3);
	var sumFours = categoryFilter(props.diceCurrentValueArray, 4);
	var sumFives = categoryFilter(props.diceCurrentValueArray, 5);
	var sumSixes = categoryFilter(props.diceCurrentValueArray, 6);
	var sumChoice = choiceAdder(props.diceCurrentValueArray);

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

	var lowerSum =
		fourKindVal +
		fiveKindVal +
		fullHouseVal +
		smallStraightVal +
		largeStraightVal +
		yachtCatVal;

	var totalSum = upperSum + lowerSum + bonusVal;

	useEffect(() => {
		if (sumOnes || sumTwos || sumThrees || sumFours || sumFives || sumSixes) {
			console.log(
				"sums ",
				sumOnes,
				sumTwos,
				sumThrees,
				sumFours,
				sumFives,
				sumSixes
			);
		}
	}, [props.rollCount]);

	return (
		<div className="scoreboard-container">
			<table className="upper-categories">
				<thead>
					<tr onClick={() => setOnesCatVal(sumOnes)}>
						<th>Ones</th>
						<td>{onesCatVal}</td>
					</tr>
					<tr onClick={() => setTwosCatVal(sumTwos)}>
						<th>Twos</th>
						<td>{twosCatVal}</td>
					</tr>
					<tr onClick={() => setThreesCatVal(sumThrees)}>
						<th>Threes</th>
						<td>{threesCatVal}</td>
					</tr>
					<tr onClick={() => setFoursCatVal(sumFours)}>
						<th>Fours</th>
						<td>{foursCatVal}</td>
					</tr>
					<tr onClick={() => setFivesCatVal(sumFives)}>
						<th>Fives</th>
						<td>{fivesCatVal}</td>
					</tr>
					<tr onClick={() => setSixesCatVal(sumSixes)}>
						<th>Sixes</th>
						<td>{sixesCatVal}</td>
					</tr>
					<tr className="upper-sum">
						<th>Categories Sum</th>
						<td>{upperSum}</td>
					</tr>
					<tr
						onClick={() => setChoiceCatVal(sumChoice)}
						className="choice-category"
					>
						{/* onClick={() => setFourKindVal(sumFourKind)} */}

						<th>Choice</th>
						<td>{choiceCatVal}</td>
					</tr>
					<tr>
						{/* onClick={() => setFiveKindVal(sumFiveKind)} */}

						<th>Four of a kind</th>
						<td>{fourKindVal}</td>
					</tr>
					<tr>
						{/* onClick={() => setFourKindVal(sumFourKind)} */}

						<th>Five of a kind</th>
						<td>{fiveKindVal}</td>
					</tr>
					<tr>
						{/* onClick={() => setFullHouseVal(sumFullHouse)} */}

						<th>Full House</th>
						<td>{fullHouseVal}</td>
					</tr>

					<tr onClick={() => straightSmallChecker(props.diceCurrentValueArray)}>
						<th>Small Straight</th>
						<td>{smallStraightVal}</td>
					</tr>
					<tr onClick={() => straightLargeChecker(props.diceCurrentValueArray)}>
						<th>Large Straight</th>
						<td>{largeStraightVal}</td>
					</tr>
					<tr>
						{/* onClick={() => setYachtVal(60)} */}
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
	);
}

export default Scoreboard;
