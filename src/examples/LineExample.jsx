export default function LineExample() {

    const scrnHeight  = 500;


    const xStart = 140, yStart = 140;

    const lineLength = 150;
    const lineWidth = 4;

    return(
        <svg height={scrnHeight}>
            <line 
                x1={xStart}
                y1={yStart}
                x2={xStart + lineLength}
                y2={yStart + lineLength}
                stroke="black"
                strokeWidth={lineWidth}
            >
            </line>
        </svg>
    );
    
}