import { useState } from "react";
import "./Scoreboard.scss";

function Scoreboard(diceValues: []) {
	const [onesVal, setOnesVal] = useState("");
	const [twosVal, setTwosVal] = useState("");
	const [threesVal, setThreesVal] = useState("");
	const [foursVal, setFoursVal] = useState("");
	const [fivesVal, setFivesVal] = useState("");
	const [sixesVal, setSixesVal] = useState("");

	//defaultValue={diceValues filtered and summed}

	return (
		<div className="scoreboard-container">
			<div className="upper-categories">
				<div className="upper-item">
					<label>
						Ones
						<input
							name="ones"
							type="number"
							pattern="^[0-5]$"
							value={onesVal}
							onChange={(e) => setOnesVal(e.target.value)}
						/>
					</label>
				</div>
				<div className="upper-item">
					<label>
						Twos
						<input
							name="twos"
							type="number"
							pattern="^[0-10]$"
							value={twosVal}
							onChange={(e) => setTwosVal(e.target.value)}
						/>
					</label>
				</div>
				<div className="upper-item">
					<label>
						Threes
						<input
							name="threes"
							type="number"
							pattern="^[0-15]$"
							value={threesVal}
							onChange={(e) => setThreesVal(e.target.value)}
						/>
					</label>
				</div>
				<div className="upper-item">
					<label>
						Fours
						<input
							name="Fours"
							type="number"
							pattern="^[0-20]$"
							value={foursVal}
							onChange={(e) => setFoursVal(e.target.value)}
						/>
					</label>
				</div>
				<div className="upper-item">
					<label>
						Fives
						<input
							name="fives"
							type="number"
							pattern="^[0-25]$"
							value={fivesVal}
							onChange={(e) => setFivesVal(e.target.value)}
						/>
					</label>
				</div>
				<div className="upper-item">
					<label>
						Sixes
						<input
							name="sixes"
							type="number"
							pattern="^[0-30]$"
							value={sixesVal}
							onChange={(e) => setSixesVal(e.target.value)}
						/>
					</label>
				</div>
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
