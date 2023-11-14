import React from "react";
import { csv } from "d3";


export default function ImportCsvDataExample (){

    const [csvData, setCsvData] = React.useState(null);

    const csvInputUrl = 'https://raw.githubusercontent.com/HarryJamesGreenblatt/Data-Visualization-Using-D3-js/main/src/data/import/world-populations.csv';

    React.useEffect( () => {
            csv(csvInputUrl).then( d => setCsvData( d ) ); 
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