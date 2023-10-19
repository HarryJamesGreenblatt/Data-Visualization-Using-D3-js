export default function CircleExample() {

    const scrnHeight  = 500;
    const circleRadius = 100;

    const xStart = 140, yStart = scrnHeight/2;

    return(
        <svg height={scrnHeight}>
            <circle 
                cx={xStart}
                cy={yStart}
                r={circleRadius}
            >
            </circle>
        </svg>
    );
    
}