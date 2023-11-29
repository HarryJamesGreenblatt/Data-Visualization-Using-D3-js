import { csv } from "d3";
import { useState, useEffect } from "react";
import { worldPopulationsCsvDataUrl } from '../utils.js';


export default function BarCharNotes(){
    
// Fetch the data to visualize.
// In this case, the import data is in  csv  format
    
    // Initialize state to store the csv data
    const [csvData, setCsvData] = useState(null);

    // Ensure the data gets fetched once, and only once
    useEffect( () => {

        // invoke d3.csv to retrieve the data at the specified URL,
        // while providing a callback function which sets it as state
        csv( 
            worldPopulationsCsvDataUrl 
        ).then( d => setCsvData( d ) );
       
    }, 
    // providing an empty dependency array 
    // will ensure the component only renders once.
    [] );
//


    console.log(csvData);






    return(
        <h1>Something goes here</h1>

    )
}