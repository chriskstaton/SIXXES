import { useEffect, useState } from "react";
import "./Scoreboard.scss";

function Scoreboard(props: {
	diceCurrentValueArray: number[];
	rollCount: number;
}) {
	const [onesCatVal, setOnesCatVal] = useState(0);
	const [twosCatVal, setTwosCatVal] = useState(0);
	const [threesCatVal, setThreesCatVal] = useState(0);
	const [foursCatVal, setFoursCatVal] = useState(0);
	const [fivesCatVal, setFivesCatVal] = useState(0);
	const [sixesCatVal, setSixesCatVal] = useState(0);

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
			console.log(sumOnes, sumTwos, sumThrees, sumFours, sumFives, sumSixes);
		}
	}, [props.rollCount]);

	return (
		<div className="scoreboard-container">
			<div className="upper-categories">
				<div className="upper-item">Ones {sumOnes}</div>
				<div className="upper-item">Twos {sumTwos}</div>
				<div className="upper-item">Threes {sumThrees}</div>
				<div className="upper-item">Fours {sumFours}</div>
				<div className="upper-item">Fives {sumFives}</div>
				<div className="upper-item">Sixes {sumSixes}</div>
			</div>
			<div>
				Sum of Categories ={" "}
				{onesCatVal +
					twosCatVal +
					threesCatVal +
					foursCatVal +
					fivesCatVal +
					sixesCatVal}
			</div>
			<div className="special-categories">
				<div className="special-item">Three of a kind</div>
				<div className="special-item">Four of a kind</div>
				<div className="special-item">Full House</div>
				<div className="special-item">Small Straight</div>
				<div className="special-item">Large Straight</div>
				<div className="special-item">Sum</div>
				<div className="special-item">Yacht!</div>
			</div>
		</div>
	);
}

export default Scoreboard;
