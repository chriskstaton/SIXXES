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

	var [bonusVal, setBonusVal] = useState(0);

	var [threeKindVal, setThreeKindVal] = useState(0);
	var [fourKindVal, setFourKindVal] = useState(0);
	var [fullHouseVal, setFullHouseVal] = useState(0);
	var [smallStraightVal, setSmallStraightVal] = useState(0);
	var [largeStraightVal, setLargeStraightVal] = useState(0);

	var [choiceCatVal, setChoiceCatVal] = useState(0);

	var [yachtCatVal, setYachtCatVal] = useState(0);

	function categoryFilter(arr: number[], value: number) {
		const onlyCategory = arr.filter((el) => {
			return el === value;
		});
		return onlyCategory.reduce((a, b) => a + b, 0);
	}

	var sumOnes = categoryFilter(props.diceCurrentValueArray, 1);
	var sumTwos = categoryFilter(props.diceCurrentValueArray, 2);
	var sumThrees = categoryFilter(props.diceCurrentValueArray, 3);
	var sumFours = categoryFilter(props.diceCurrentValueArray, 4);
	var sumFives = categoryFilter(props.diceCurrentValueArray, 5);
	var sumSixes = categoryFilter(props.diceCurrentValueArray, 6);

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
		threeKindVal +
		fourKindVal +
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
					{/* <tr className="spacer-no-border" /> */}
					<tr className="upper-sum">
						<th>Categories Sum</th>
						<td>{upperSum}</td>
					</tr>
					{/* <tr className="spacer-bottom-border" /> */}
					<tr className="choice-category">
						{/* onClick={() => setThreeKindVal(sumThreeKind)} */}

						<th>Choice</th>
						<td>{choiceCatVal}</td>
					</tr>
					<tr>
						{/* onClick={() => setThreeKindVal(sumThreeKind)} */}

						<th>Three of a kind</th>
						<td>{threeKindVal}</td>
					</tr>
					<tr>
						{/* onClick={() => setFourKindVal(sumFourKind)} */}

						<th>Four of a kind</th>
						<td>{fourKindVal}</td>
					</tr>
					<tr>
						{/* onClick={() => setFullHouseVal(sumFullHouse)} */}

						<th>Full House</th>
						<td>{fullHouseVal}</td>
					</tr>
					<tr>
						{/* onClick={() => setSmallStraightVal(25)} */}

						<th>Small Straight</th>
						<td>{smallStraightVal}</td>
					</tr>
					<tr>
						{/* onClick={() => setSmallStraightVal(45)} */}

						<th>Large Straight</th>
						<td>{largeStraightVal}</td>
					</tr>
					<tr>
						{/* onClick={() => setSmallStraightVal(60)} */}
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
