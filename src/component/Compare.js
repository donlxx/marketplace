import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, hexToRgb} from "@material-ui/core";
import {removeCompareProductById, removeComparProduct} from "../action/compare.action";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import {CompareDetail} from "../Container/CompareDetail";
import {MaterialTableDemo} from "./MaterialTableDemo";
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export const Compare=()=>{
    const compareProduct=useSelector(state=>state.compare);
    const dispatch=useDispatch();
    const handleClear=()=>{
        dispatch(removeComparProduct())
    }
    console.log(compareProduct);
    const classes = useStyles();
    return(
        <div>
            {/*<CompareDetail data={compareProduct}/>*/}
            <MaterialTableDemo data={compareProduct}/>
        </div>


    //     <div>
    //     <Button  variant="contained" color="primary" onClick={handleClear}> clear </Button>
    //
    //     {!!compareProduct ?compareProduct.map(p=>(
    //         <>
    //     <Card className={classes.root}>
    //         <CardContent>
    //             <Typography>
    //                 brand: {p.brand} name: {p.name} model:{p.model} price: {p.price}
    //                 color: {p.color} Hourse Power:{p.hp} pressure:{p.pressure}
    //                 heatingSurface: {p.heatingSurface} Length: {p.length} hight: {p.hight}
    //             </Typography>
    //             {/*<Typography>*/}
    //             {/*    brand: {p.brand}*/}
    //             {/*</Typography>*/}
    //         </CardContent>
    //         <Button onClick={()=>{console.log(p.id);dispatch(removeCompareProductById(p.id))}}>delete it</Button>
    //     </Card>
    //
    //     <Divider/>
    //     </>
    //     )):<p>please add product to here first</p>}
    // </div>
    )

}
