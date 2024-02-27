import React from "react";
import { csv } from "d3";
import { worldPopulationsCsvDataUrl } from '../utils.js';


export default function ImportCsvDataExample (){

    // Initialize a state variable 'csvData' with a null value using the 'useState' hook from React.
    const [csvData, setCsvData] = React.useState(null);

    // Use the 'useEffect' hook from React to fetch CSV data when the component mounts.
    React.useEffect( () => {

            // Fetch the CSV data from the 'worldPopulationsCsvDataUrl'.
            csv(
                worldPopulationsCsvDataUrl
            ).then( d => 

                // Set the fetched data to 'csvData'.
                setCsvData( d ) 

            ); 
        }, [] ); // The empty array means this effect runs once on mount and not on updates.

    // Return a table element.
    return(
        <table>

            {/* A table row for the headers. */}
            <tr style={{fontWeight:"bold"}}>
                <td>Country</td>
                <td>,</td>
                <td style={{paddingLeft: "1.5rem"}}>
                    Population
                </td>
            </tr>
            {
                // Map over 'csvData' and create a table row for each item.
                csvData?.map( d =>
                    <tr key={+d.Population}>
                        <td>{d.Country}</td>
                        <td>,</td>
                        <td style={{paddingLeft: "1.5rem"}}>
                            { +d.Population * 1000 }
                        </td>
                    </tr> 
                )
            }

        </table>
    );
}