import { useRef } from "react";

import DiceRoller from "./DiceRoller";
import SixesHeader from "./SixesHeader";
import "./App.scss";

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
			<SixesHeader
				headerScrollElement={headerScrollElement}
				setScrollPosition={setScrollPosition}
			/>
			<DiceRoller
				setScrollPosition={setScrollPosition}
				diceScrollElement={diceScrollElement}
				headerScrollElement={headerScrollElement}
				scoreboardScrollElement={scoreboardScrollElement}
			/>
		</div>
	);
}

export default App;
