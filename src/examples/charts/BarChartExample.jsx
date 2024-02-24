import { csv, scaleBand, scaleLinear, max, format } from "d3";
import { useState, useEffect } from "react";
import { worldPopulationsCsvDataUrl } from '../../utils.js';
import { nanoid } from "nanoid";


export default function BarCharExample(){
    
    // import and load the CSV data for intended for visualization
    const csvData = useData();


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

    
    // Define accessor functions which represent
    // the scale factors relative to each of the marks (bars)
    const xAttribute = d => +d.Population;
    const yAttribute = d => d.Country;


    const siFormat = format('.2s');
    const xAxisTickFormat =  xTick => siFormat(xTick).replace('G', 'B');


    // Define a Band Scale for Country Names
    // which categorically comprise the dataset
    const yScale = scaleBand()
    // Let the domain be the number of country names
    .domain( csvData.map( yAttribute ) )
    // and let the range be the full height of the chart,
    .range( [0, innerHeight] )
    .padding(.2)
    
    
    
    // Define a Linear Scale to represent the Population sizes
    const xScale = scaleLinear()
    // let the domain be from 0 until the maximum Population size
    .domain([0, max(csvData, xAttribute)])
    // and let the range be the full inner width of the chart area
    .range([0, innerWidth])

    

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
                    {/* render the Bottom Axis */}
                    <AxisBottom 
                        xScale={xScale} 
                        innerHeight={innerHeight} 
                        tickFormat={xAxisTickFormat} />

                    {/* render the Bottom Axis label */}
                    <PopulationLabel 
                        innerWidth={innerWidth} 
                        innerHeight={innerHeight} />

                    {/* render the Left Axis */}
                    <AxisLeft yScale={yScale}/>

                    {/* render the Marks (bars) of the visualization */}
                    <Marks 
                        csvData={csvData} 
                        xScale={xScale} 
                        yScale={yScale}
                        xAttribute={xAttribute}
                        yAttribute={yAttribute}
                        tooltipFormat={xAxisTickFormat}
                    />
                </g>
            </svg>
        )
    }
    //
}
//



// A custom hook which fetches and loads the visualization's data 
const useData = () => {

    // Fetch the data to visualize.
    // In this case, the import data is in  csv  format
    
    // Initialize state to store the csv data
    const [csvData, setCsvData] = useState(null);

    // Ensure the data gets fetched once, and only once
    useEffect( () => {


            // invoke d3.csv to retrieve the data at the specified URL,
            // while providing a callback function which sets it as state
            csv( worldPopulationsCsvDataUrl )
                .then( 
                    prevData => setCsvData( 
                        prevData.map( d=>
                            ({
                                ...d,
                                Population: +d.Population * 1000
                            })
                        )
                    )
                );
        
        }, 

        // providing an empty dependency array 
        // will ensure the component only renders once.
        [] 

    );

    return csvData;
}
//



// Define a designated component to represent the Bottom Axis
const AxisBottom = ({
    xScale,
    innerHeight,
    tickFormat }) => xScale.ticks().map( xTick => 
    <g
        key={nanoid()}
        transform={`translate(${xScale(xTick)} ${0})`}
    >
        <line
            y1={12}
            y2={
                xTick < 8000000000 || xTick == 1400000000 
                    ? innerHeight
                    : innerHeight - 15
            }
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
            {tickFormat(xTick)}
        </text>
    </g>
);
//



// Define a designated component to represent the Left Axis
const AxisLeft =  ({yScale}) => yScale.domain().map( yTick => 
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



// Define a designated component 
// to represent the marks (bars) of the visualization
const Marks = ({
        csvData, 
        xScale,
        yScale,
        xAttribute, 
        yAttribute,
        tooltipFormat
    }) => csvData.map( d => 
    <rect
        key={nanoid()} 
        x={0} 
        y={yScale(yAttribute(d))} 
        width={xScale(xAttribute(d))}  
        height={yScale.bandwidth()}
        fill="green"
    >
        <title>{tooltipFormat(xAttribute(d))}</title>
    </rect>
)
//



// Define a designated component to represent 
// a Label describing the Population data
const PopulationLabel = ({innerWidth, innerHeight}) => 
    <text
        x={innerWidth/1.8}
        y={innerHeight - 5}
        style={{
            stroke:"red",
            strokeWidth:".75",
            fontSize: ".75rem"
        }}
    >
        Population Size
    </text>
//




