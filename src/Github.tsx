import { github, abbreviatedSha, commitMessage } from "~build/info"; //authorDate
import time from "~build/time";

import "./App.scss";
function Github() {
	const openInNewTab = (url: string | undefined) => {
		window.open(url, "_blank", "noreferrer");
	};

	var localeOptions: object = {
		year: "numeric",
		month: "2-digit",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		timeZoneName: "short",
	};

	return (
		<>
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
		</>
	);
}

export default Github;
