export default function GroupElementNote() {

    // Define the height of the SVG element
    const scrnHeight  = 360;

    // Define the radius of the circles
    const radius = 75;

    // Initialize an array to store the transformed circles
    const transformedCircles = [];

    // Loop from -25 to radius with a step of radius
    for (let i = -25; i <= radius; i += radius) {

        // Push a circle element to the transformedCircles array
        transformedCircles.push(
            <circle 
                // Set the x and y position of the circle
                cx={i}
                cy={i}

                // Set the radius of the circle
                r={radius}
            >
            </circle>
        );
    }

    // Return an SVG element
    return(
        <svg height={scrnHeight} width={scrnHeight}>
            <g

                // Translate the group of circles to the center of the SVG element
                transform={`translate(${scrnHeight/2} ${scrnHeight/2})`}

                // Set the fill color of the circles to white
                fill="white"

                // Set the stroke color of the circles to goldenrod
                stroke="goldenrod"
                
                // Set the stroke width of the circles to 7
                strokeWidth={7}
            >
                {/* Render the transformed circles */}
                {transformedCircles}
            </g>
        </svg>
    );
}
