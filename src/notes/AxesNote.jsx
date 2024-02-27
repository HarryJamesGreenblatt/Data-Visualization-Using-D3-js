import { scaleLinear } from "d3";
import { nanoid } from "nanoid";


export default function AxesNote(){

    // Setting up dimensions for the chart
    const scrnHeight = 600;
    const height = scrnHeight/2;
    const width = scrnHeight/2;

    // Margins for the chart
    const margin = {
        top: 10,
        right: 10,
        bottom: 20,
        left: 20
    }

    // Calculating the inner height and width of the chart
    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    // Creating a linear scale for the x-axis
    const xScale = scaleLinear()
        .domain([0, 50]) // Input range
        .range([0, innerHeight]); // Output range

    // Creating a linear scale for the y-axis
    const yScale = scaleLinear()
        .domain([50, 0]) // Input range
        .range([0, innerWidth]); // Output range

    // Function to create the x-axis
    const xAxis = () => xScale.ticks().map( xTick => 
        <g
            key={nanoid()} // Unique key for each tick
            transform={`translate(${xScale(xTick)} ${0})`} // Positioning the tick
        >
            <line
                y2={innerHeight + 3}
                stroke='red'
            >
            </line>
            <text
                y={innerHeight + 13}
                fontSize={'.75em'}
                fontWeight={300}
                textAnchor="middle"
                stroke="red"
            >
                {/* Label for the tick */}
                {xTick} 
            </text>
        </g>
    );
    
    // Function to create the y-axis
    const yAxis =  () => yScale.ticks().map( yTick => 
        <g
            key={nanoid()} // Unique key for each tick
            transform={`translate(${0} ${yScale(yTick)})`} // Positioning the tick
        >
            <line
                x1={-3}
                x2={innerWidth}
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
                {/* Label for the tick */}
                {yTick} 
            </text>
        </g>
    );

    // The SVG that will contain the chart
    return(
        <svg
            height={height}
            style={{background:"white"}}
            transform="translate(50 0)"    
        >
            <g
                transform={`translate(${margin.left} ${margin.top})`}
            >
                <rect
                    height={innerHeight}
                    width={innerWidth}
                    fill="green"
                    opacity={.3}
                >
                </rect>
                {/* Rendering the x-axis */}
                { xAxis() } 
                {/* Rendering the y-axis */}
                { yAxis() } 
            </g>
        </svg>
    )
}
