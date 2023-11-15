import { scaleLinear } from "d3";
import { nanoid } from "nanoid";

export default function AxesNote(){
    

    const scrnHeight = 600;

    const height = scrnHeight/2;
    const width = scrnHeight/2;


    const margin = {
        top: 10,
        right: 10,
        bottom: 20,
        left: 20
    }

    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;



    const xScale = scaleLinear()
        .domain([0, 50])
        .range([0, innerHeight]);

    const yScale = scaleLinear()
        .domain([50, 0])
        .range([0, innerWidth]);




    const xAxis = () => xScale.ticks().map( xTick => 
        <g
            key={nanoid()}
            transform={`translate(${xScale(xTick)} ${0})`}
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
                {xTick}
            </text>
        </g>
    );
    
    
    const yAxis =  () => yScale.ticks().map( yTick => 
        <g
            key={nanoid()}
            transform={`translate(${0} ${yScale(yTick)})`}
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
                {yTick}
            </text>
        </g>
    );



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
                { xAxis() }
                { yAxis() }
            </g>
        </svg>
    )
}