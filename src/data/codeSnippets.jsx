export const codeSnippets = {
    DataViz2018_1: `
const scrnHeight   = 500;
const circleRadius = 100;

const xStart = 140, 
const yStart = scrnHeight/2;


<svg height={scrnHeight}>
    <circle 
        cx={xStart}
        cy={yStart}
        r={circleRadius}
    >
    </circle>
</svg>

`,
    DataViz2018_2 : `
<svg height={scrnHeight}>
    {
        for(let y = yStart; y <= 500; y +=75){
            <g 
                transform={\`translate(0, \${y})\`}
                fill={getRandomColor()}
                stroke={getRandomColor()}
            >
                <circle 
                    cx={xStart} 
                    cy={yStart} 
                    r={circleRadius}
                >
                </circle>
                <rect 
                    x={xStart + (rectWidth * 1.1)} 
                    y={yStart - (rectHeight / 2)} 
                    width={rectWidth} 
                    height={rectHeight}
                >
                </rect>
            </g>
        }
    }
</svg>

`
}