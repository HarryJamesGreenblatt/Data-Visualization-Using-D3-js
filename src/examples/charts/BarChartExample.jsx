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

// Define the dimensions of the visualization 
    
    // assign a designated full height and width 
    const height = 325, width = 340;

    // define margin distances which can support the 
    // inclusion of coordinate axes
    const margin = {
        top: 10,
        right: 25,
        bottom: 15,
        left: 75,
    }

    // define the inner height of the chart area,
    const innerHeight = height - margin.top - margin.bottom;


    // define the inner width of the chart area,
    const innerWidth = width - margin.left - margin.right;

//


// Since the initial state of the csvData is null,
// render the component only after it has loaded
if( csvData ){

    // Define a Band Scale for Country Names
    // which categorically comprise the dataset
    const yScale = scaleBand()
        // Let the domain be the number of country names
        .domain( csvData.map( d => d.Country  ) )
        // and let the range be the full height of the chart,
        .range( [0, innerHeight] )
        .paddingInner(.2)

        

    // Define a Linear Scale to represent the Population sizes
    const xScale = scaleLinear()
        // let the domain be from 0 until the maximum Population size
        .domain([0, max(csvData, d => +d.Population)])
        // and let the range be the full inner width of the chart area
        .range([0, innerWidth])



    // Define the Bottom coordinate axis
    const xAxis = () => xScale.ticks().map( xTick => 
        <g
            key={nanoid()}
            transform={`translate(${xScale(xTick)} ${0})`}
        >
            <line
                y2={innerHeight}
                stroke='red'
                strokeWidth=".6"
            >
            </line>
            <text
                y={innerHeight + 10}
                fontSize={'.75em'}
                fontWeight={300}
                textAnchor="middle"
                stroke="red"
            >
                {xTick/1000}
            </text>
        </g>
    );
    

    // Define the Left coordinate axis
    const yAxis =  () => yScale.domain().map( yTick => 
        <g
            key={nanoid()}
            transform={
                `translate(
                    ${0} 
                    ${ yScale(yTick) + (yScale.bandwidth() / 2) }
                )`
            }
        >
            <line
                x1={-3}
                x2={10}
                stroke='blue'
            >
            </line>
            <text
                x={-5}
                y={3}
                fontSize={'.75em'}
                fontWeight={300}
                textAnchor="end"
                stroke="blue"
            >
                {yTick}
            </text>
        </g>
    );
    //


    // Define the marks (bars) of the visualization
    const marks = csvData.map(
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
    //


    // Define a Label to describe the Population data
    const populationLabel = 
        <text
            x={innerWidth/1.8}
            y={innerHeight - 5}
            style={{
                stroke:"red",
                strokeWidth:".75",
                fontSize: ".75rem"
            }}
        >
            Population (millions)
        </text>
    //


    // Render the final component
        return(
            // Generate an svg to contain the visualization area
            <svg
                height={height}
                width={width}
                style={{background:"whitesmoke"}}
                transform="translate(5 0)"    
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
                        // render the Bottom Axis
                        xAxis()
                    }
                    {
                        // render the Left Axis
                        yAxis()
                    }
                    {
                        // render the marks (bars)
                        marks
                    }
                    {
                        // render the Population axis Label
                        populationLabel
                    }
                </g>
            </svg>
        )
    }
    //
}