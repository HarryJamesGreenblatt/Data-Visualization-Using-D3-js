import React from "react";
import { csv } from "d3";
import { worldPopulationsCsvDataUrl } from './utils.js';


export default function ImportCsvDataExample (){

    const [csvData, setCsvData] = React.useState(null);

    React.useEffect( () => {
            csv(
                worldPopulationsCsvDataUrl
            ).then( d => setCsvData( d ) ); 
        }, [] );

    return(
        <table>
            <tr style={{fontWeight:"bold"}}>
                <td>Country</td>
                <td>,</td>
                <td style={{paddingLeft: "1.5rem"}}>
                    Population
                </td>
            </tr>
            {
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