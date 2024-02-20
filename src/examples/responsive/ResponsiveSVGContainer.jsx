import { useRef, useEffect } from 'react';

export default function ResponsiveSVGContainer() {

    // useRef is a hook that allows you to create a reference to a DOM element.
    // This reference is stored in svgRef and can be used to directly interact with the SVG element.
    const svgRef = useRef();


    const width = 800, height = 600 


    // The aspect ratio of the SVG is defined as width / height.
    const aspectRatio = width / height;



    // useEffect is a hook that allows you to perform side effects in function components.
    // Here, it's used to create a ResizeObserver that adjusts the size of the SVG whenever its container's size changes.
    useEffect(() => {

        // This function is called whenever the size of the observed element changes.
        function resizeObserverCallback(entries) {

            for(let entry of entries) {

                // contentRect provides the size of the element's content box.
                if(entry.contentRect) {

                    // The width of the SVG is set to the width of its container.
                    const svgWidth = entry.contentRect.width;

                    // The height of the SVG is calculated based on its width and the defined aspect ratio.
                    const svgHeight = width / aspectRatio;
                    
                    // The width and height attributes of the SVG are updated.
                    entry.target.setAttribute('height', svgHeight);
                    entry.target.setAttribute('width', svgWidth);
                }
            }
        }

        // A new ResizeObserver is created with the defined callback function.
        const resizeObserver = new ResizeObserver(resizeObserverCallback);

        // The ResizeObserver starts observing the size of the SVG element.
        resizeObserver.observe(svgRef.current);

        // This function is returned by useEffect and is called when the component unmounts.
        // It's used to clean up effects and prevent memory leaks.
        return () => resizeObserver.disconnect();

    }, []);


    const renderVizElements = (text) => (
        <g>
            {/* This is a circle element in your SVG. It's positioned at the center of the SVG. */}
            <circle
                cx={width /2 } // The x-coordinate of the center of the circle.
                cy={(height / 2)} // The y-coordinate of the center of the circle.
                r={225} // The radius of the circle.
                style={{
                    fill: 'red', // The color inside the circle.
                    stroke: 'white' // The color of the circle's border.
                }}
            >
            </circle>
            {/* This is a text element in your SVG. It's positioned at the center of the SVG. */}
            <text
                x={width / 2} // The x-coordinate where the text starts.
                y={height / 2} // The y-coordinate of the baseline of the text.
                style={{
                    stroke: 'white', // The color of the text's stroke.
                    strokeWidth: text.includes('default') ? '0' : '1', // The width of the text's stroke.
                    fill: 'white',  // The color of the text itself.
                    fontSize: text.includes('default') ? '2rem': '2.5rem', // The size of the text.
                    textAnchor: 'middle', // This centers the text horizontally around the x-coordinate.
                }}
            >
            {/* // The actual text being displayed. */}
               {text}
            </text>
        </g>
    )

    return(
        <div>

            {/* This svg element will render non-responsively,
            as such the elements inside will crop out upon resizing the viewport. */}
            <svg
                style={{
                    height: (height/2),
                    width: width,
                    background: 'blue'
                }}
            >
                {renderVizElements('Not responsive by default.')}
            </svg>

            {/* This svg element will responsively,
            as such the elements inside will transform upon resizing the viewport. */}
            <svg
                ref={svgRef}
                style={{
                    height: height/2,
                    width: width,
                    background: 'green'
                }}
                viewBox={`0 60 ${width} ${height}`}
                preserveAspectRatio="xMidYMid meet"
            >
                {renderVizElements('Now fully responsive.')}
            </svg>
        </div>
    );
}
