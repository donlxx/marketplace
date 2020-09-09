import React from 'react';
import "./Products.scss"
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {useSelector} from "react-redux";
import {appConstants} from "../constant";
import {Link} from "react-router-dom";
import {getSearchResult} from "../action/product.action";

export const Products = () => {

    const filter = useSelector(state => state.filter);
    const localProducts = useSelector(state => state.product).data;
   // const localProducts=p.data;
    console.log(localProducts);
    console.log(localProducts.length);
    // if (!!localProducts && !!filter) console.log(getSearchResult(filter.filter, localProducts));
    return (
        <Grid container spacing={3} className="Products">
            {   //short circuit evalvation
                !!localProducts && localProducts.map(p => (
                    <Grid item xs={12} sm={6} md={4} key={p.id}>
                        <Link to={`${appConstants.productDetailRoute}/${p.id}`}>
                            <Paper className="product-wrapper">
                                <img src={p.productImage[0].image} alt={p.name} className="product-image"/>
                                <div className="product-overlay"/>
                                <div className="product-info">
                                    <h3 style={{margin: 100}}> {p.name}</h3>
                                    <div>{p.brand}</div>
                                    <div>price: {p.price}</div>
                                </div>
                            </Paper>
                        </Link>
                    </Grid>
                ))
            }
        </Grid>
    );
}
