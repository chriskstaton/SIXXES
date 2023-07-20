import { useEffect, useRef, useState } from "react";

import DiceRoller from "./DiceRoller";
import SixxesHeader from "./sixxesHeader";
import Instructions from "./Instructions";
import useLocalStorage from "./useLocalStorage";

import "./App.scss";
import { github, abbreviatedSha, authorDate, commitMessage } from "~build/info";
import time from "~build/time";

function App() {
	const headerScrollElement = useRef(null);
	const diceScrollElement = useRef(null);
	const scoreboardScrollElement = useRef(null);
	const instructionsScrollElement = useRef(null);

	const [hasVisited, setHasVisited] = useLocalStorage("hasVisited", "true");

	useEffect(() => {
		if (localStorage.getItem("hasVisited")) {
			console.log("returning");
		} else {
			console.log("setting local storage");
			localStorage.setItem("hasVisited", "true");
		}
	}, []);

	//const [theme, setTheme] = useLocalStorage("theme", "dark");

	var localeOptions: object = {
		year: "numeric",
		month: "2-digit",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		timeZoneName: "short",
	};

	const setScrollPosition = (ref: { current: { offsetTop: any } }) => {
		window.scrollTo({
			top: ref.current.offsetTop,
			behavior: "smooth",
		});
	};

	const openInNewTab = (url: string | undefined) => {
		window.open(url, "_blank", "noreferrer");
	};

	//setTimeout(() => setHasVisited("returningUser"), 5000);

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
			<div
				className="github-container"
				onClick={() => openInNewTab(github ? github : undefined)}
			>
				<span className="github-link">github</span>
			</div>
			<div className="commit-container">
				<span className="commit-message">
					<div className="commit-message">
						Latest update: {time.toLocaleString("en-US", localeOptions)}
					</div>
					{"[" + abbreviatedSha + "] " + commitMessage}
				</span>
			</div>
		</div>
	);
}

export default App;
