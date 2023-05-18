import Button from "@mui/material/Button";

function rollButton(props: {
	handleLock: () => void;
	turnComplete: boolean;
	handleRoll: () => void;
	buttonDumping: boolean;
	rollCount: number;
	maxRolls: number;
	rollDisable: boolean;
}) {
	return (
		<div className={"button-container"} onClick={props.handleLock}>
			<Button
				onClick={!props.turnComplete ? props.handleRoll : undefined}
				className={props.buttonDumping ? "cup-dumping" : "roll-dice-button"}
				sx={
					props.rollCount >= props.maxRolls
						? {
								color: "white",
								backgroundColor: "rgb(200, 200, 200)",
								borderRadius: "15px",
								fontSize: "30px",
								fontFamily: "'Roboto Mono', monospace",
						  }
						: {
								color: "white",
								backgroundColor: "#bc40ff !important",
								borderRadius: "15px",
								fontSize: "30px",
								fontFamily: "'Roboto Mono', monospace",
						  }
				}
				disabled={
					props.turnComplete || props.rollCount >= props.maxRolls
						? true
						: props.rollDisable
				}
			>
				{props.turnComplete ? (
					<span className="padlock-container">
						<span className="padlock-body">
							<span className="padlock-shackle" />
						</span>
					</span>
				) : props.maxRolls - props.rollCount < 2 ? (
					"LAST ROLL"
				) : props.maxRolls - props.rollCount < 4 ? (
					props.maxRolls - props.rollCount
				) : (
					"ROLL DICE"
				)}
			</Button>
		</div>
	);
}

export default rollButton;
