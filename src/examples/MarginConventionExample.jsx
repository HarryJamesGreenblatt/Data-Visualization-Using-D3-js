export default function MarginConventionExample(){
    
    
    const scrnHeight = 600;

    const height = scrnHeight/2;
    const width = scrnHeight/2;


    const margin = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    }


    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;


    return(
        <svg
            height={height}
            style={{background:"black"}}    
        >

            <g
                transform={`translate(${margin.left} ${margin.top})`}
            >
                <rect
                    height={innerHeight}
                    width={innerWidth}
                    fill="pink"
                >
                </rect>
                <text
                    stroke="white"
                    y={-4}
                    x={innerWidth/2.5}      
                >
                    Margin
                </text>
                <text
                    stroke="black"
                    y={innerHeight/2}
                    x={innerWidth/3}    
                >
                    Visualization
                </text>
            </g>

        </svg>
    )
}