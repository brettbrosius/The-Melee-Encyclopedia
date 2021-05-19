import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
	root: {
		width: 250
	}
});

function valuetext(value) {
	return `${value}`;
}

export const DiscreteSlider = props => {
	const classes = useStyles();

	const { store, actions } = useContext(Context);

	const handleChange = (event, value) => {
		actions.updateProgress(value, props.tech);
	};

	return (
		<div className={classes.root} style={{ display: "inline-block" }}>
			<Typography id="discrete-slider" className="text-white" gutterBottom>
				Set your progress below
			</Typography>
			<br />
			<Slider
				defaultValue={0}
				getAriaValueText={valuetext}
				aria-labelledby="discrete-slider"
				valueLabelDisplay="on"
				step={5}
				marks
				min={0}
				max={100}
				color="primary"
				onChangeCommitted={handleChange}
			/>
		</div>
	);
};

DiscreteSlider.propTypes = {
	tech: PropTypes.string
};
