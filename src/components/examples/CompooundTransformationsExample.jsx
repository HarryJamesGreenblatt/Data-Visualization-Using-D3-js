import getRandomColor from "./utils";

export default function CoumpoundTransformationsExample() {

    const scrnHeight  = 330;
    const sideLength = 35;

    const transformedRects = []

    for( let i=25; i < 300; i += 50 ) {
        for( let j=25; j < 300; j += 50 ) {
            transformedRects.push(
                <rect
                    x={0}
                    y={0}
                    width={sideLength}
                    height={sideLength}
                    fill={getRandomColor()}
                    stroke={getRandomColor()}
                    transform={`
                        translate(${i},${j}) 
                        rotate(${Math.random() * 45})
                    `}
                >
                </rect>
            )
        }
    }



    return(
        <svg width={scrnHeight} height={scrnHeight}>
           {transformedRects}
        </svg>
    );
    
}