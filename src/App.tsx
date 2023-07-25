import { useEffect, useRef, useState } from "react";

import DiceRoller from "./DiceRoller";
import SixxesHeader from "./sixxesHeader";
import Instructions from "./Instructions";
import useLocalStorage from "./useLocalStorage";

import "./App.scss";
import Github from "./Github";

function App() {
	const headerScrollElement = useRef(null);
	const diceScrollElement = useRef(null);
	const scoreboardScrollElement = useRef(null);

	const [hasVisited, setHasVisited] = useLocalStorage("hasVisited", "false");

	useEffect(() => {
		if (localStorage.getItem("hasVisited") == "false") {
			setTimeout(() => localStorage.setItem("hasVisited", "true"), 10000);
		}
	}, []);

	//const [theme, setTheme] = useLocalStorage("theme", "dark");

	const setScrollPosition = (ref: { current: { offsetTop: any } }) => {
		window.scrollTo({
			top: ref.current.offsetTop,
			behavior: "smooth",
		});
	};

	return (
		<div className="App">
			<SixxesHeader
				headerScrollElement={headerScrollElement}
				setScrollPosition={setScrollPosition}
			/>
			<DiceRoller
				setScrollPosition={setScrollPosition}
				diceScrollElement={diceScrollElement}
				headerScrollElement={headerScrollElement}
				scoreboardScrollElement={scoreboardScrollElement}
			/>
			<Instructions
				setScrollPosition={setScrollPosition}
				headerScrollElement={headerScrollElement}
				hasVisited={hasVisited}
			/>
			<Github />
		</div>
	);
}

export default App;
