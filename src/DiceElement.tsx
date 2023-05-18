function DiceElement(props: {
	isSelected: boolean;
	rollingNumber: boolean;
	resetAllDice: boolean;
	setIsSelected: Function;
	imageSrc: string;
	key: string;
}) {
	return (
		<img
			className={
				!props.isSelected
					? "dice-selected"
					: props.rollingNumber
					? "dice-roll"
					: props.resetAllDice
					? "dice-reset"
					: "dice-static"
			}
			onClick={() => {
				props.setIsSelected(!props.isSelected);
			}}
			src={props.imageSrc}
			key={props.key}
		/>
	);
}

export default DiceElement;
