import getRandomColor from "../utils";

export default function GroupOfShapesExample() {

    const scrnHeight = 500;


    const xStart = 100, yStart = 0;



    const circleRadius = 35;

    const rectWidth = 50, rectHeight = 50;
     
    
    const groupElements = [];

    for(let y = yStart; y <= 500; y +=75){
         groupElements.push(
            <g 
                transform={`translate(0, ${y})`}
                fill={getRandomColor()}
                stroke={getRandomColor()}
            >
                <circle
                    key={y} 
                    cx={xStart} 
                    cy={yStart} 
                    r={circleRadius}
                >
                </circle>
                <rect
                    key={y} 
                    x={xStart + (rectWidth * 1.1)} 
                    y={yStart - (rectHeight / 2)} 
                    width={rectWidth} 
                    height={rectHeight}
                >
                </rect>
            </g>
         )
    }


    return(
        <svg height={scrnHeight}>
            { groupElements }
        </svg>
    );
    
}