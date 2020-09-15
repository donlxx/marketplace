import React from "react";
import {ProductSummary} from "../Container/ProductSummery";
import {useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { useHistory } from "react-router-dom";
import {appConstants} from "../constant";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const ProductDetail = (props) => {
    const localproducts = useSelector(state => state.product).rowData;
    const classes = useStyles();
    const history=useHistory();


        const product = localproducts.find(e => e.id == props.match.params.id);
        if(!product)history.push(appConstants.productRoute);
         console.log(product);
        if (!!product)
        return (
            <>
                {/*<div>product detail, id is: {props.match.params.id}</div>*/}
                {product.productImage.length>1?
                    <div>
                     <a href={product.productImage[1].image}><PictureAsPdfIcon /> </a>
                    </div>
                :null}
                <div className={classes.root}>
                    <ProductSummary product={product}/>
                </div>
            </>
        );
        else return null;

}
