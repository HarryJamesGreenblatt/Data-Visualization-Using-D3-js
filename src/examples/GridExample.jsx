export default function GridExample() {
    const height = 400, 
    width =325; 


    const squareGrid = () => {
        
        const transformedRects = []
        const sideLength = 40;

        for( let i=15; i < 280; i += 50 ) {
            for( let j=25; j < 350; j += 50 ) {
                transformedRects.push(
                    i > 230 && j > 300 
                    ? 
                    <rect
                        width={sideLength}
                        height={sideLength}
                        fill="goldenrod"
                        stroke="white"
                        
                        transform={`
                            translate(${i},${j}) 
                        `}
                    >
                    </rect>
                    : 
                    <circle
                        r={sideLength /2}
                        fill="white"
                        transform={`
                            translate(${i+20},${j+21}) 
                        `}
                    >
                    </circle>
            )
            }   
        }   
        
        return transformedRects;
    }
    
    return(
        <svg
            height={height}
            width={width}
            style={{background:"green"}}
        >

            <g>
                {squareGrid()}
            </g>

        </svg>
    );
}