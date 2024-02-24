import React from "react";
import { json } from "d3";
import { irisDatasetJsonUrl } from "../utils";
import { nanoid } from "nanoid";


export default function ImportJsonDataNote (){

    const [jsonData, setJsonData] = React.useState(null);

    const jsonInputUrl = irisDatasetJsonUrl;
    React.useEffect( () => {
            json(jsonInputUrl).then( d => setJsonData( d ) ); 
        }, [] );

    console.log( jsonData );
    
    return(
        <table style={{marginLeft:".85em", color:"black"}}>
            <thead>
                <tr style={{fontWeight:"bold"}}>
                    <td>Species</td>
                    <td style={{paddingLeft: "1.1rem"}}>Sepal Length</td>
                    <td style={{paddingLeft: "1.1rem"}}>
                        Sepal Width
                    </td>
                    <td style={{paddingLeft: "1.1rem"}}>Petal Length</td>
                    <td style={{paddingLeft: "1.1rem"}}>
                        Petal Width
                    </td>
                </tr>
            </thead>
            <tbody>
            {
                jsonData?.slice(0,10).map( d =>
                    <tr key={nanoid()}>
                        <td>{d.species}</td>
                        <td style={{paddingLeft: "1.1rem"}}>{+d.sepal_length}</td>
                        <td style={{paddingLeft: "1.1rem"}}>
                            { +d.sepal_width }
                        </td>
                        <td style={{paddingLeft: "1.1rem"}}>{+d.petal_length}</td>
                        <td style={{paddingLeft: "1.1rem"}}>
                            { +d.petal_width }
                        </td>
                    </tr> 
                )
            }
            </tbody>
        </table>
    );
}