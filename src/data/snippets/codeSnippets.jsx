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
`,    

    DataViz2018_3 : `
<style>
    .css-styled-svg{
        fill: #1792D2;
        stroke-width: 1rem;
        stroke: chocolate;
    }
</style>



<svg 
    className={"css-styled-svg"} 
    height={scrnHeight}
>
    <rect 
        x={xStart}
        y={yStart}
        width={sideLength}
        height={sideLength}
    >
    </rect>
</svg>
`,

    DataViz2018_4 : `
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

`,

    DataViz2018_5 : `
const transformedRects = []

for( let i=25; i < 300; i += 50 ) {
    for( let j=25; j < 300; j += 50 ) {
        transformedRects.push(
            <rect
                x={0}
                y={0}
                width={sideLength}
                height={sideLength}
                fill={getRandomColor()}
                stroke={getRandomColor()}
                transform={\`
                    translate(\${i},\${j}) 
                    rotate(
                        \${Math.random() * 45}
                    )
                \`}
            >
            </rect>
        )
    }
}

<svg width={scrnHeight} height={scrnHeight}>
    {transformedRects}
</svg>

`,

    DataViz2018_6 : `
<style>
    @keyframes raiseBrow {
        0% { y: 0 }
        50% { y: 25 }
        75% { y: 20 }
        100% { y: 0 }
    }
    .happy-face-example .eyebrow{
        animation: raiseBrow 3s ease infinite;
    }
</style>


<svg 
    height={scrnHeight} 
    width={scrnWidth}
>
    <circle
        cx={faceInitialX}
        cy={faceInitialY}
        r={faceRadius}
    >
    </circle>
    {renderEyes()}
    {renderMouth()}
</svg>
`,
}