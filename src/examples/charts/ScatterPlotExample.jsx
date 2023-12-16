import { json, scaleLinear, extent, max, min } from "d3";
import { useState, useEffect } from "react";
import { irisDatasetJsonUrl } from '../utils.js';
import { nanoid } from "nanoid";


// A custom hook which fetches and loads the visualization's data 
const useData = () => {

    // Fetch the data to visualize.
    // In this case, the import data is in  json  format
    
    // Initialize state to store the json data
    const [jsonData, setJsonData] = useState(null);

    // Ensure the data gets fetched once, and only once
    useEffect( () => {

            const row = d => {

                d.sepal_length =  +d.sepal_length;
                d.sepal_width  =  +d.sepal_width;
                d.petal_length =  +d.petal_length;
                d.petal_width  =  +d.petal_width;

                return d;

            }

            // invoke d3.json to retrieve the data at the specified URL,
            // while providing a callback function which sets it as state
            json( 
                irisDatasetJsonUrl,
                row
            ).then( d => setJsonData( d ) );
        
        }, 

        // providing an empty dependency array 
        // will ensure the component only renders once.
        [] 

    );

    return jsonData;
}
//



// Define a designated component to represent the Bottom Axis
const AxisBottom = ({xScale, innerHeight}) => xScale.ticks().map( xTick => 
    <g
        key={nanoid()}
        transform={`translate(${xScale(xTick)} ${0})`}
    >
        <line
            y1={13}
            y2={innerHeight}
            stroke='red'
            strokeWidth=".6"
        >
        </line>
        <text
            y={innerHeight + 12}
            fontSize={'.75em'}
            fontWeight={300}
            textAnchor="middle"
            stroke="red"
        >
            {xTick}
        </text>
    </g>
);
//



// Define a designated component to represent 
// a Label describing the Sepal Width
const XAxisLabel = ({innerWidth, innerHeight, xLabel}) => 
    <text
        x={innerWidth/2}
        y={innerHeight}
        style={{
            stroke:"red",
            strokeWidth:".75",
            fontSize: ".9rem",
            textAnchor: "middle"
        }}
    >
        {xLabel}
    </text>
//




// Define a designated component to represent the Left Axis
const AxisLeft =  ({yScale, innerWidth}) => yScale.ticks().map( yTick => 
    <g
        key={nanoid()}
        transform={
            `translate(
                ${0} 
                ${ yScale(yTick) }
            )`
        }
    >
        <line
            x2={innerWidth}
            stroke='blue'
        >
        </line>
        <text
            x={-5}
            y={".25em"}
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

// Define a designated component to represent 
// a Label describing the Sepal Height
const YAxisLabel = ({innerHeight, yLabel}) => 
    <text
        style={{
            stroke:"blue",
            strokeWidth:".75",
            fontSize: ".9rem",
            textAnchor: "middle"
        }}
        transform={`
            translate(
                -35, 
                ${innerHeight / 2}
            ) 
            rotate(-90)
    `}
    >
        {yLabel}
    </text>
//



// Define a designated component 
// to represent the marks (plots) of the visualization
const Marks = ({
    jsonData, 
    xScale,
    yScale,
    xValue, 
    yValue
}) => jsonData.map( d => 
    <circle
        key={nanoid()} 
        cx={xScale(xValue(d))} 
        cy={yScale(yValue(d))}
        fill="darkgreen" 
        r={4.5}
    >
       <title>
            {
                `Sepal Width: ${xValue(d)}`
                +
                '\n'
                +
                `Sepal Length: ${yValue(d)}`
            }
        </title>
    </circle>
)


export default function ScatterPlotExample(){
    
    // import and load the json data for intended for visualization
    const jsonData = useData();


    // Define the dimensions of the visualization
    // assign a designated full height and width 
    const height = 325, width = 340;


    // define margin distances which can support the 
    // inclusion of coordinate axes
    const margin = {
        top: 2,
        right: 30,
        bottom: 40,
        left: 55,
    }

    // define the inner height of the chart area,
    const innerHeight = height - margin.top - margin.bottom;


    // define the inner width of the chart area,
    const innerWidth = width - margin.left - margin.right;

//


// Since the initial state of the jsonData is null,
// render the component only after it has loaded
if( jsonData ){

    
    // Define accessor functions which represent
    // the scale factors relative to each of the marks (plots)
    const xValue = d => d.sepal_width;
    const yValue = d => d.sepal_length;


    // Provide labels for the x and y axis
    const xLabel = "Sepal Width"; 
    const yLabel = "Sepal Length"; 


    // Define Offsets to adjust the x and y axis labels
    const xAxisLabelOffset = 30;
    const yAxisLabelOffset = 30;


    // Define Offsets to adjust the y axis boundaries
    const yBoundsOffset = .3;
    

    // Define a Linear Scale to represent the sepal widths
    const xScale = scaleLinear()
    // let the domain be from the minimum until the maximum sepal length
    .domain(extent(jsonData, xValue))
    // and let the range be the full inner width of the chart area
    .range([0, innerWidth])
    

    // Define a Linear Scale to represent the sepal lengths
    const yScale = scaleLinear()
    // let the domain be from the minimum until the maximum sepal width
    .domain([
        min(jsonData, yValue) - yBoundsOffset, 
        max(jsonData, yValue) + yBoundsOffset
    ])
    // and let the range be the full inner height of the chart,
    .range( [innerHeight, 0] )
    
    


    

    // Render the final component
        return(
            // Generate an svg to contain the visualization area
            <svg
                height={height}
                width={width}
                style={{background:"white", border:"1px solid lightgray"}}
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
                    {/* render the Bottom Axis */}
                    <AxisBottom xScale={xScale} innerHeight={innerHeight} />

                    {/* render the Bottom Axis label */}
                    <XAxisLabel 
                        innerWidth={innerWidth} 
                        innerHeight={innerHeight + xAxisLabelOffset} 
                        xLabel={xLabel}
                    />

                    {/* render the Left Axis */}
                    <AxisLeft yScale={yScale} innerWidth={innerWidth}/>

                    {/* render the Left Axis label */}
                    <YAxisLabel 
                        innerWidth={innerWidth} 
                        innerHeight={innerHeight + yAxisLabelOffset} 
                        yLabel={yLabel}
                    />

                    {/* render the Marks (plots) of the visualization */}
                    <Marks 
                        jsonData={jsonData} 
                        xScale={xScale} 
                        yScale={yScale}
                        xValue={xValue}
                        yValue={yValue}
                    />
                </g>
            </svg>
        )
    }
    //
}