import { useEffect, useRef, useState } from "react";
import "./App.scss";
import DiceRoller from "./DiceRoller";
import Tips from "./Tips";

function App() {
	const headerScrollElement = useRef(null);
	const diceScrollElement = useRef(null);
 const scoreboardScrollElement = useRef(null);

	const setScrollPosition = (ref: { current: { offsetTop: any } }) => {
		window.scrollTo({
			top: ref.current.offsetTop,
			behavior: "smooth",
		});
	};

	return (
		<div className="App">
			<div className="header-container" ref={headerScrollElement}>
				<div className="header">
					SI<span className="x">X</span>ES
					<span>-lite</span>
					<div className="dotted" />
				</div>
				<span className="XX">XX</span>
			</div>

			<DiceRoller
				setScrollPosition={setScrollPosition}
				diceScrollElement={diceScrollElement}
				headerScrollElement={headerScrollElement}
    scoreboardScrollElement={scoreboardScrollElement}
			/>
			{/* <Tips /> */}
		</div>
	);
}

export default App;
