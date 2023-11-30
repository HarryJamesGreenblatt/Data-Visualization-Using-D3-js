import { csv, scaleBand, scaleLinear, max } from "d3";
import { useState, useEffect } from "react";
import { worldPopulationsCsvDataUrl } from '../utils.js';
import { nanoid } from "nanoid";


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
        [] 

    );

//

console.log(csvData)

// Define the dimensions of the visualization 
    
    // assign a designated height and width 
    const height = 300, width = 300;

    // define margin distances which can support the 
    // inclusion of coordinate axes
    const margin = {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
    }

//


if(csvData){
    // Define a Band Scale for Country Names
    // which categorically comprise dataset
    const yScale = scaleBand()
        // Let the domain be the number of country names
        .domain( csvData.map( d => d.Country  ) )
        // and let the range be the full height of the chart,
        .range( [0, height - margin.bottom - margin.top] )


// // Define a Linear Scale to represent the Population sizes
    const xScale = scaleLinear()
        //let the domain be the maximum Population size
        .domain([0, max(csvData, d => +d.Population)])
        .range([0, width - margin.left - margin.right])



// Create the Bottom and Left coordinate axes


//


    // Produce the final component
        return(

            // Generate an svg to contain the visualization area
            <svg
                height={height}
                width={width}
                style={{background:"whitesmoke"}}
                transform="translate(50 0)"    
            >   
                {/* 
                    Translate the visualization area by the 
                    distances defined by the margins
                */}
                <g
                    transform={
                        `translate(${margin.left} ${margin.top})`
                    }
                >
                    {
                        csvData.map(
                            d => 
                                <rect
                                    key={nanoid()} 
                                    x={0} 
                                    y={yScale(d.Country)} 
                                    width={xScale(+d.Population)}  
                                    height={yScale.bandwidth()}
                                >
                                </rect>
                        )
                    }
                </g>
            </svg>
        )
    }
}