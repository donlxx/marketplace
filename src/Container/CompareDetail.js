import React from "react";
import {CustomTable} from "../component/CustomTable";
export const CompareDetail=(props)=>{
    const data=props.data;
    return(
        <CustomTable date={data} desc={"DESCRIPTION"}/>
    );
}
