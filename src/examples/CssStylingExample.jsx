export default function CssStylingExample() {

    // Define the height of the SVG container.
    const scrnHeight  = 500;

    // Define the side length of the rectangle.
    const sideLength = 175;

    // Define the starting x-coordinate for the rectangle.
    const xStart = 40;

    // Define the starting y-coordinate for the rectangle.
    const yStart = 150;

    // Return the SVG element.
    return(

        // The SVG container with a class name for CSS styling.
        <svg className={"css-styled-svg"} height={scrnHeight}>

            {/* A rectangle element inside the SVG container. */}
            <rect 

                // The x-coordinate of the top-left corner of the rectangle.
                x={xStart}

                // The y-coordinate of the top-left corner of the rectangle.
                y={yStart}

                // The width of the rectangle.
                width={sideLength}

                // The height of the rectangle.
                height={sideLength}
            >
            </rect>

        </svg>
    );
    
}