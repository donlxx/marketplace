import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 200,
    },
});

function valuetext(value) {
    return `${value}`;
}

export const RangeSlider=(props)=> {
    const classes = useStyles();
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.setValue(newValue);
       // console.log(newValue);
    };

    return (
        <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
                {/*{props.message && props.message}*/}
            </Typography>
            <Slider

                min={props.min}
                max={props.max}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                // aria-labelledby="range-slider"
                aria-labelledby="discrete-slider-restrict"
                getAriaValueText={valuetext}
            />
        </div>
    );
}
