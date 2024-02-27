export default function MarginConventionExample(){
    
    // Define the height of the SVG container.
    const scrnHeight = 600;

    // Define the height and width of the visualization.
    const height = scrnHeight/2;
    const width = scrnHeight/2;

    // Define the margins of the visualization.
    const margin = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    }

    // Calculate the inner height and width of the visualization by subtracting the margins.
    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    // Return the SVG element.
    return(
        // The SVG container with a specified height and a black background.
        <svg
            height={height}
            style={{background:"black"}}    
        >
            {/* A group element that contains a rectangle and two text elements. */}
            <g
                // The transformation applied to the group. It is translated by (margin.left, margin.top).
                transform={`translate(${margin.left} ${margin.top})`}
            >
                <rect
                    // The height of the rectangle.
                    height={innerHeight}

                    // The width of the rectangle.
                    width={innerWidth}

                    // The fill color of the rectangle.
                    fill="pink"
                >
                </rect>
                <text
                    // The color of the text.
                    stroke="white"

                    // The y-coordinate of the text.
                    y={-4}

                    // The x-coordinate of the text.
                    x={innerWidth/2.5}      
                >
                    Margin
                </text>
                <text
                    // The color of the text.
                    stroke="black"

                    // The y-coordinate of the text.
                    y={innerHeight/2}

                    // The x-coordinate of the text.
                    x={innerWidth/3}    
                >
                    Visualization
                </text>
            </g>

        </svg>
    )
}
