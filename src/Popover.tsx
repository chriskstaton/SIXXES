import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import { LegacyRef } from "react";

export default function TransitionsPopper(props: {
	category: string;
	message?: string;
	scoreboardRefEl?: LegacyRef<HTMLDivElement> | undefined;
}) {
	const [open, setOpen] = React.useState(false);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleClick = (
		event: React.MouseEvent<HTMLElement>,
		scoreboardRefEl: LegacyRef<HTMLDivElement> | undefined
	) => {
		setAnchorEl(event.currentTarget);
		setOpen((previousOpen) => !previousOpen);
	};

	const canBeOpen = open && Boolean(anchorEl);
	const id = canBeOpen ? "transition-popper" : undefined;

	return (
		<div>
			<div onClick={handleClick}>{props.category}</div>
			<Popper
				id={id}
				open={open}
				anchorEl={anchorEl}
				transition
				//placement="bottom"
				className="hint-popper"
			>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps} timeout={2000}>
						<Box
							sx={{
								// position: "fixed !important",
								// marginLeft: "auto !important",
								// marginRight: "auto !important",
								// top: "50% !important",
								borderRadius: "20px",
								border: 4,
								height: "25px",
								minWidth: "max-content",
								p: "25px",
								color: "rgb(100, 100, 100)",
								borderColor: "#e1a6ff",
								bgcolor: "background.paper",
							}}
						>
							{props.message}
						</Box>
					</Fade>
				)}
			</Popper>
		</div>
	);
}
