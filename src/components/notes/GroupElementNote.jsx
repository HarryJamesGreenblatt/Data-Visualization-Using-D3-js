export default function GroupElementNote() {

    const scrnHeight  = 360;
    const radius = 75;

    const transformedCircles = [];

    for (let i = -25; i <= radius; i += radius) {
        transformedCircles.push(
            <circle 
                cx={i}
                cy={i}
                r={radius}
            >
            </circle>
        );
    }

    return(
        <svg height={scrnHeight} width={scrnHeight}>
            <g
                transform={`translate(${scrnHeight/2} ${scrnHeight/2})`}
                fill="white"
                stroke="goldenrod"
                strokeWidth={7}
            >
                {transformedCircles}
            </g>
        </svg>
    );
    
}