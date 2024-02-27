// This is a default exported function component in React named 'LineExample'.
export default function LineExample() {

    // Define the height of the SVG container.
    const scrnHeight  = 500;

    // Define the starting x-coordinate for the line.
    const xStart = 140;

    // Define the starting y-coordinate for the line.
    const yStart = 140;

    // Define the length of the line.
    const lineLength = 150;

    // Define the width of the line.
    const lineWidth = 4;

    // Return the SVG element.
    return(

        // The SVG container with a specified height.
        <svg height={scrnHeight}>

            {/* A line element inside the SVG container. */}
            <line 

                // The x-coordinate of the start of the line.
                x1={xStart}

                // The y-coordinate of the start of the line.
                y1={yStart}

                // The x-coordinate of the end of the line.
                x2={xStart + lineLength}

                // The y-coordinate of the end of the line.
                y2={yStart + lineLength}

                // The color of the line.
                stroke="black"
                
                // The width of the line.
                strokeWidth={lineWidth}
            >
            </line>
        </svg>
    );
    
}
