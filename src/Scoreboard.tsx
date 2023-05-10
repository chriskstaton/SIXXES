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
				<tr>
					<th>Ones</th>
					<td>{sumOnes}</td>
				</tr>
				<tr>
					<th>Twos</th>
					<td>{sumTwos}</td>
				</tr>
				<tr>
					<th>Threes</th>
					<td>{sumThrees}</td>
				</tr>
				<tr>
					<th>Fours</th>
					<td>{sumFours}</td>
				</tr>
				<tr>
					<th>Fives</th>
					<td>{sumFives}</td>
				</tr>
				<tr>
					<th>Sixes</th>
					<td>{sumSixes}</td>
				</tr>
			</table>

			<div className="upper-sum">
				Upper Sum:{" "}
				{onesCatVal +
					twosCatVal +
					threesCatVal +
					foursCatVal +
					fivesCatVal +
					sixesCatVal}
			</div>
			<table className="special-categories">
				<tr>
					<th>Choice</th>
					<td>{}</td>
				</tr>
				<tr>
					<th>Three of a kind</th>
					<td>{}</td>
				</tr>
				<tr>
					<th>Four of a kind</th>
					<td>{}</td>
				</tr>
				<tr>
					<th>Full House</th>
					<td>{}</td>
				</tr>
				<tr>
					<th>Small Straight</th>
					<td>{}</td>
				</tr>
				<tr>
					<th>Large Straight</th>
					<td>{}</td>
				</tr>
				<tr>
					<th>Yacht!</th>
					<td>{}</td>
				</tr>
			</table>
			<div className="total-sum">Total Sum: </div>
		</div>
	);
}

export default Scoreboard;
