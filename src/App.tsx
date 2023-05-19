import { useRef } from "react";

import DiceRoller from "./DiceRoller";
import SixesHeader from "./SixesHeader";
import "./App.scss";
import { github, abbreviatedSha, authorDate, commitMessage } from "~build/info";
import time from "~build/time";

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

	const openInNewTab = (url: string | undefined) => {
		window.open(url, "_blank", "noreferrer");
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
			<div
				className="github"
				onClick={() => openInNewTab(github ? github : undefined)}
			>
				github
			</div>
			<div className="commit">{abbreviatedSha + " - " + commitMessage}</div>
			<div className="author-date">{time.toString()}</div>
		</div>
	);
}

export default App;
