import React from "react";
import {ProductSummary} from "../Container/ProductSummery";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../action/product.action";


export const ProductDetail = (props) => {
    // console.log(props.match.params.id);
    // const dispatch= useDispatch();
    // dispatch(getProducts());

    const localproducts=useSelector(state=>state.product).rowData;
    if(!!localproducts) {
        const product = localproducts.find(e => e.id == props.match.params.id);
        console.log(product);
        return (
            <>
                <div>product detail, id is: {props.match.params.id}</div>
                <ProductSummary product={product}/>
            </>
        );
    }
    else return(<div>ajdh</div>);
}
