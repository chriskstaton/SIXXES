import Button from "@mui/material/Button";

function rollButton(props: {
	handleLock: () => void;
	handleRoll: () => void;
	turnComplete: boolean;
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
								borderRadius: "15px",
								fontSize: "30px",
								fontFamily: "'Roboto Mono', monospace",
						  }
						: {
								color: "white",
								backgroundColor: "#d98dff !important",
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
				) : props.maxRolls - props.rollCount == 1 ? (
					"LAST ROLL"
				) : (
					"ROLL DICE"
				)}
			</Button>
		</div>
	);
}

export default rollButton;
