import { LegacyRef } from "react";
import "./sixxesHeader.scss";
import logoDice6 from "../src/images/logoDice6.svg";
import * as rdd from "react-device-detect";

function sixxesHeader(props: {
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
					SI<span className="x">X</span>XES
				</div>
				<div
					className={rdd.osName != "Windows" ? "header-icons" : "windows-pad"}
				>
					<img src={logoDice6} className="logo-dice6" />
					<span className="gray-box">
						<span className="white-circle" />
					</span>
				</div>
			</div>
		</>
	);
}

export default sixxesHeader;
