import React from "react";
import { csv } from "d3";


export default function ImportCsvDataNote (){

    const [csvData, setCsvData] = React.useState(null);

    const csvInputUrl = 'https://raw.githubusercontent.com/HarryJamesGreenblatt/Data-Visualization-Using-D3-js/main/src/data/import/populations.csv';

    React.useEffect( () => {
            csv(csvInputUrl).then( d => setCsvData( d ) ); 
        }, [] );

    console.log( csvData );
    
    return(
        <table style={{marginLeft:"3rem", color:"white"}}>
            <thead>
                <tr style={{fontWeight:"bold"}}>
                    <td>Country</td>
                    <td>,</td>
                    <td style={{paddingLeft: "1.5rem"}}>
                        Population
                    </td>
                </tr>
            </thead>
            <tbody>
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
            </tbody>
        </table>
    );
}