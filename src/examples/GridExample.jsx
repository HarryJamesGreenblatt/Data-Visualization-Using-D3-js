export default function GridExample() {

    // Define the height and width of the SVG container.
    const height = 400, width =325; 

    // Define a function to create a grid of squares.
    const squareGrid = () => {
        
        // Initialize an array to hold the squares.
        const transformedRects = [];

        // Define the side length of the squares.
        const sideLength = 40;

        // Loop through the x-coordinates from 15 to 280, incrementing by 50 each time.
        for( let i=15; i < 280; i += 50 ) {

            // Loop through the y-coordinates from 25 to 350, incrementing by 50 each time.
            for( let j=25; j < 350; j += 50 ) {
                
                // Push a new square or circle into the transformedRects array based on the condition.
                transformedRects.push(

                    // If the x-coordinate is greater than 230 and the y-coordinate is greater than 300, create a square.
                    i > 230 && j > 300 
                    ? 
                    <rect

                        // The width of the square.
                        width={sideLength}

                        // The height of the square.
                        height={sideLength}

                        // The fill color of the square.
                        fill="goldenrod"

                        // The stroke color of the square.
                        stroke="white"
                        
                        // The transformation applied to the square. It is translated by (i, j).
                        transform={`
                            translate(${i},${j}) 
                        `}
                    >
                    </rect>
                    : 
                    // Otherwise, create a circle.
                    <circle

                        // The radius of the circle.
                        r={sideLength /2}

                        // The fill color of the circle.
                        fill="white"

                        // The transformation applied to the circle. It is translated by (i+20, j+21).
                        transform={`
                            translate(${i+20},${j+21}) 
                        `}
                    >
                    </circle>
            )
            }   
        }   
        
        // Return the array of transformed squares and circles.
        return transformedRects;

    }
    
    // Return the SVG element.
    return(
        <svg

            // The height of the SVG container.
            height={height}

            // The width of the SVG container.
            width={width}
            
            // The style of the SVG container.
            style={{background:"green"}}
        >

            <g>
                {/* Render the grid of squares and circles. */}
                {squareGrid()}
            </g>

        </svg>
    );
}
