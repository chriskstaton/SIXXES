import { LegacyRef } from "react";
import "./SixesHeader.scss";

function SixesHeader(props: {
	headerScrollElement: LegacyRef<HTMLDivElement> | undefined;
	setScrollPosition: Function;
}) {
	return (
		<div
			className="header-container"
			ref={props.headerScrollElement}
			onClick={() => window.location.reload()}
		>
			<div className="header">
				SI<span className="x">X</span>ES
				<span>-lite</span>
				<div className="dotted" />
			</div>
			<span className="XX">XX</span>
		</div>
	);
}

export default SixesHeader;
