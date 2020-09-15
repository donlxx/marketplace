import React from 'react';
import "./Products.scss"
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {useDispatch, useSelector} from "react-redux";
import {appConstants} from "../constant";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import {addCompareProduct} from "../action/compare.action";
import {CustomizedSnackbars} from "./CustomizedSnackbars";

// const handleOnAddCompare = (id)=>{
//     console.log('hai in 20 hang'+id);
// }

export const Products = () => {

    const filter = useSelector(state => state.filter);
    const compareTest=useSelector(state=>state.compare);
    const auth=useSelector(state=>state.auth);
    const history=useHistory();
    const localProducts = useSelector(state => state.product).data;
    const dispatch = useDispatch();
    if(!auth.islogin){history.push(appConstants.testRoute)}
   // const localProducts=p.data;
   //  console.log(localProducts);
   //  console.log(localProducts.length);
    // if (!!localProducts && !!filter) console.log(getSearchResult(filter.filter, localProducts));

    return (
        <>
                <Grid container spacing={3} className="Products">
                    {!!localProducts && localProducts.map(p => (
                            <Grid item xs={12} sm={6} md={4} key={p.id}>
                                <Link to={`${appConstants.productDetailRoute}/${p.id}`}>
                                    <Paper className="product-wrapper">
                                        <img src={p.productImage[0].image} alt={p.name} className="product-image"/>
                                        <div className="product-overlay"/>
                                        <div className="product-info">
                                            <h3 style={{margin: 100}}> {p.year} {p.name}</h3>
                                            <div>{p.brand}</div>
                                            <div>price: {p.price}</div>
                                            <div>House Power: {p.hp}</div>
                                        </div>

                                    </Paper>
                                </Link>
                                <CustomizedSnackbars onClick={() => {
                                    console.log(p.id);
                                    dispatch(addCompareProduct(p))
                                }} product={p}> </CustomizedSnackbars>
                                {/*<Button variant="contained" color="primary" position="center" onClick={()=>{console.log(p.id);dispatch(addCompareProduct(p))}}> compare </Button>*/}
                            </Grid>
                        ))
                    }
                </Grid>
            </>
    );
}
