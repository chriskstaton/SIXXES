import { LegacyRef } from "react";
import "./NetronHeader.scss";
import logoDice6 from "../src/images/logoDice6.svg";

function NetronHeader(props: {
	headerScrollElement: LegacyRef<HTMLDivElement> | undefined;
	setScrollPosition: Function;
}) {
	return (
		<>
			<div
				className="header-container"
				ref={props.headerScrollElement}
				onClick={() => window.location.reload()}
			>
				<div className="header">
					SI<span className="x">X</span>XES<span className="lite">-lite</span>
				</div>
			</div>
			<img src={logoDice6} className="logo-dice6" />
		</>
	);
}

export default NetronHeader;
