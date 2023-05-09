import { useState } from "react";
import "./Scoreboard.scss";

function Scoreboard(diceValues: []) {
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
					<label>
						Ones
						<input
							name="ones"
							className="input"
							type="number"
							pattern="^[0-5]$"
							defaultValue={" "}
							value={onesCatVal}
							onChange={(e) => setOnesCatVal(parseInt(e.target.value))}
						/>
					</label>
				</div>
				<div className="upper-item">
					<label>
						Twos
						<input
							name="twos"
							className="input"
							type="number"
							pattern="^[0-10]$"
							value={twosCatVal}
							onChange={(e) => setTwosCatVal(parseInt(e.target.value))}
						/>
					</label>
				</div>
				<div className="upper-item">
					<label>
						Threes
						<input
							name="threes"
							className="input"
							type="number"
							pattern="^[0-15]$"
							value={threesCatVal}
							onChange={(e) => setThreesCatVal(parseInt(e.target.value))}
						/>
					</label>
				</div>
				<div className="upper-item">
					<label>
						Fours
						<input
							name="fours"
							className="input"
							type="number"
							pattern="^[0-20]$"
							value={foursCatVal}
							onChange={(e) => setFoursCatVal(parseInt(e.target.value))}
						/>
					</label>
				</div>
				<div className="upper-item">
					<label>
						Fives
						<input
							name="fives"
							className="input"
							type="number"
							pattern="^[0-25]$"
							value={fivesCatVal}
							onChange={(e) => setFivesCatVal(parseInt(e.target.value))}
						/>
					</label>
				</div>
				<div className="upper-item">
					<label>
						Sixes
						<input
							name="sixes"
							className="input"
							type="number"
							pattern="^[0-30]$"
							value={sixesCatVal}
							onChange={(e) => setSixesCatVal(parseInt(e.target.value))}
						/>
					</label>
				</div>
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
