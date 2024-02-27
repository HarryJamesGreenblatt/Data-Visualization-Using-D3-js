export default function CircleExample() {

    // Define the height of the SVG container.
    const scrnHeight  = 500;
    // Define the radius of the circle.
    const circleRadius = 100;

    // Define the starting x-coordinate for the circle.
    const xStart = 140;
    // Define the starting y-coordinate for the circle, which is the middle of the SVG container.
    const yStart = scrnHeight/2;

    // Return the SVG element.
    return(
        <svg height={scrnHeight}>

            {/* Render a circle in the SVG container. */}
            <circle 

                // The x-coordinate of the center of the circle.
                cx={xStart}

                // The y-coordinate of the center of the circle.
                cy={yStart}
                
                // The radius of the circle.
                r={circleRadius}
            >
            </circle>
            
        </svg>
    );
    
}
