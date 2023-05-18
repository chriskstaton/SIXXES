import { useEffect, useRef, useState } from "react";
import "./App.scss";
import DiceRoller from "./DiceRoller";
import Tips from "./Tips";

function App() {
	// const [scrollPosition, setScrollPosition] = useState(0);
	// const handleScroll = () => {
	// 	const position = window.pageYOffset;
	// 	setScrollPosition(position);
	// };

	// useEffect(() => {
	// 	window.addEventListener("scroll", handleScroll, { passive: false });
	// 	console.log(scrollPosition);

	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, [scrollPosition]);

	const headerScrollElement = useRef(null);
	const diceScrollElement = useRef(null);

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
			/>
			{/* <Tips /> */}
		</div>
	);
}

export default App;
