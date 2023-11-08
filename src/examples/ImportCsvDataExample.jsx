import React from "react";
import { csv } from "d3";


export default function ImportCsvDataExample (){
    
    csv('./populations.csv')
        .then( d => console.log(d) )

    return(
        <h1>Shit my pants</h1>
    )
}