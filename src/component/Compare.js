import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeComparProduct} from "../action/compare.action";
import {makeStyles} from "@material-ui/core/styles";
import {MaterialTableDemo} from "./MaterialTableDemo";
import {useHistory} from "react-router-dom";
import {appConstants} from "../constant";

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

export const Compare = () => {

    const history = useHistory();
    const auth = useSelector(state => state.auth);
    if (!auth.islogin) history.push(appConstants.testRoute);
    const compareProduct = useSelector(state => state.compare);
    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(removeComparProduct())
    }
    console.log(compareProduct);
    const classes = useStyles();
    return (
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
