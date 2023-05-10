import { useEffect, useState } from "react";
import "./Scoreboard.scss";

function Scoreboard(props: { diceCurrentValueArray: number[] }) {
	const [onesCatVal, setOnesCatVal] = useState(0);
	const [twosCatVal, setTwosCatVal] = useState(0);
	const [threesCatVal, setThreesCatVal] = useState(0);
	const [foursCatVal, setFoursCatVal] = useState(0);
	const [fivesCatVal, setFivesCatVal] = useState(0);
	const [sixesCatVal, setSixesCatVal] = useState(0);

	//defaultValue={diceValues filtered and summed}

	return (
		<div className="scoreboard-container">
			<div className="upper-categories">
				<div className="upper-item">
					{/* <label> */}
					Ones
					{/* <input
							name="ones"
							className="input"
							type="number"
							pattern="^[0-5]$"
							defaultValue={" "}
							value={onesCatVal}
							onChange={(e) => setOnesCatVal(parseInt(e.target.value))}
						/> */}
					{/* </label> */}
				</div>
				<div className="upper-item">Twos</div>
				<div className="upper-item">Threes</div>
				<div className="upper-item">Fours</div>
				<div className="upper-item">Fives</div>
				<div className="upper-item">Sixes</div>
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
