export default function CssStylingExample() {

    const scrnHeight  = 500;
    const sideLength = 175;

    const xStart = 40, yStart = 150;

    return(
        <svg className={"css-styled-svg"} height={scrnHeight}>
            <rect 
                x={xStart}
                y={yStart}
                width={sideLength}
                height={sideLength}
            >
            </rect>
        </svg>
    );
    
}