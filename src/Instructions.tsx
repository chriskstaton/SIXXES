import { LegacyRef, useState } from "react";
import "./Instructions.scss";

function Instructions(props: {
	setScrollPosition: Function;
	headerScrollElement: LegacyRef<HTMLDivElement> | undefined;
}) {
	// props: {
	// headerScrollElement: LegacyRef<HTMLDivElement> | undefined;
	// setScrollPosition: Function;}

	const [openInstructions, setOpenInstructions] = useState(false);
	const [fadeInstructions, setFadeInstructions] = useState(false);

	function handleClick() {
		setOpenInstructions(!openInstructions);
		props.setScrollPosition(props.headerScrollElement);
	}

	function handleClose() {
		setTimeout(() => setOpenInstructions(false), 2000);
		setFadeInstructions(true);
	}

	return (
		<>
			<button onClick={handleClick} className="help-button">
				Need some help?
			</button>
			{openInstructions && (
				<div className={fadeInstructions ? "fade-out" : ""}>
					<div className="blur" onClick={handleClose}>
						<dialog className="instructions">
							{/* Welcome to SIXXES!
							<br />
							<br /> */}
							Collect dice to fit various patterns for points. Each category can
							only be chosen once, so chose wisely! If you are unfamiliar with
							the categories by name, you can reveal a category's pattern by
							clicking its name on the scoreboard.
							<br />
							<br />
							Start off by rolling your dice. Then, select the dice you'd like
							to save from a re-roll. These outlined dice will be safe from your
							next roll. Note: You may also unselect any previously saved dice
							in order to attempt a different pattern with your remaining rolls.
							Sometimes, you may be able to satisfy a pattern without using all
							your rolls. Other times, you might not satisfy any remaining
							categories and will have to place zero points in a category before
							continuing to the next turn.
							<br />
							<br />
							After your fourth and final roll, a Padlock replaces the Roll Dice
							button. Now, you must pick a category to place your points. To
							help you decide, the scoreboard displays the score you would
							receive with your current hand of dice.
							<br />
							<br />
							After a total of 14 turns, the scoreboard will be complete. To
							play again, you can click the SIXXES logo to refresh the page.
						</dialog>
					</div>
				</div>
			)}
		</>
	);
}

export default Instructions;
