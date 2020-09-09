import React from "react";

import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {CustomTable} from "../component/CustomTable";

function createRow(name, value) {
    return { name,value };
}


const DescriptionTables = [
    createRow('Manufacturer', "Big Ass"),
    createRow('Haiku H', "Haiku H" ),
    createRow('Model', "S3150-S0-BC-04-01-C-01"),
];

const TypeTables = [
    createRow('Use Type', "Commerical"),
    createRow('Application', "Indoor" ),
    createRow('Mounting Location', "Roof"),
    createRow('Accessories', "with Light"),
    createRow('Model Year', "2016"),
];

const useStyles = makeStyles({
    container: {
        width: '50%',
        height: '50%',

    },
});

export const ProductSummary = (props) => {
    console.log(props.product);
    const data1=[
        createRow('brand',props.product.brand),
        createRow('name',props.product.name),
        createRow('model',props.product.model),
        createRow('price',String(props.product.price)),
    ]
    const data2=[
        createRow('color',props.product.color),
        createRow('Hourse Power',props.product.hp),
        createRow('pressure',props.product.pressure),
        createRow('heatingSurface',props.product.heatingSurface),
        createRow('Length',props.product.length),
        createRow('Hight',props.product.hight),
    ]
    const classes = useStyles();


    return (
        <div className={classes.container}>
            <Typography id="range-slider" gutterBottom color="primary">
                Products Summary
            </Typography>
            <CustomTable date={data1} desc={"DESCRIPTION"}/>
            <CustomTable date={data2} desc={"Technical Specifications"}/>
        </div>
    );
}
