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

    DataViz2018_7 : `
export default function BottomAxis(){
    const ref = useRef();
    
    useEffect(()=>{
        const xScale = scaleLinear()
            .domain( [0,100] )
            .range( [10, 290] )
    
        const svgElement = select(
            ref.current
        );
    
        const axisGenerator = axisBottom(
            xScale 
        );
    
        svgElement.append("g")
            .call( axisGenerator )
    }, []);
    
    return(
        <svg ref={ref}></svg>
    )
}
`,

    DataVizReact_1 : 
`import { csv } from "d3";

const [csvData, setCsvData] = 
    React.useState(null);

React.useEffect( () => {
    csv( csvInputUrl )
        .then( d => setCsvData( d ) ); 
}, [] );
...
<table>
    <tr>
        <td>Country</td>
        <td>,</td>
        <td>Population</td>
    </tr>
    {
        csvData?.map( d =>
            <tr key={ +d.Population }>
                <td>{ d.Country }</td>
                <td>,</td>
                <td>{ +d.Population }</td>
            </tr>
        ) 
    }
</table>
`,

    DataVizReact_2 : `
const margin = { 
    top: 20, right: 20, bottom: 20, left: 20 
}

const innerHeight = 
    height - margin.top - margin.bottom;

const innerWidth = 
    width - margin.left - margin.right;
...
<svg height={height}>
    <g
        transform={
            \`translate(
                \${margin.left} \${margin.top}
            )\`
        }
    >
        <rect
            height={innerHeight}
            width={innerWidth}
            fill="pink"
        >
        </rect>
    </g>
</svg>
`,

    DataVizReact_3 : `
<svg
    height={height}
    style={{background:"white"}}
    transform="translate(50 0)"    
>
    <g
        transform={
            \`translate(\${margin.left} \${margin.top})\`
        }
    >
        <rect
            height={innerHeight}
            width={innerWidth}
            fill="green"
            opacity={.3}
        >
        </rect>
        { xAxis }
        { yAxis }
    </g>
</svg>
)
`,

    DataVizReact_4 : `
<svg height={height} width={width}>   
    <g
        transform={
            \`translate(
                \${margin.left} 
                \${margin.top}
            )\`
        }>
        <AxisBottom 
            xScale={xScale} 
            innerHeight={innerHeight} />

        <PopulationLabel 
            innerWidth={innerWidth} 
            innerHeight={innerHeight} />

        <AxisLeft yScale={yScale}/>

        <Marks 
            csvData={csvData} 
            xScale={xScale} 
            yScale={yScale}
            xValue={xValue}
            yValue={yValue} />
    </g>
</svg>
`,

    DataVizReact_5 : 
`import { json } from "d3";

const [jsonData, setJsonData] = 
    React.useState(null);

React.useEffect( () => {
    json( jsonDataUrl )
        .then( d => setJsonData( d ) ); 
}, [] );
...
<table>
    <tr>
        <td>Species</td>
        <td>Sepal Length</td>
        <td>Sepal Width</td>
        <td>Petal Length</td>
        <td>Petal Width</td>
    </tr>
    {
        jsonData?.slice(0,10).map( d =>
            <tr>
                <td>{d.species}</td>
                <td>{+d.sepal_length}</td>
                <td>{+d.sepal_width}</td>
                <td>{+d.petal_length}</td>
                <td>{+d.petal_width}</td>
            </tr>)
    }
</table>
`,


    DataVizReact_6 : 
`<svg height={height} width={width}>   
    <g
        transform={
            \`translate(
                \${margin.left} 
                \${margin.top})\`}
    >
        <AxisBottom innerHeight={innerHeight}
                    xScale={xScale} />
        <XAxisLabel 
            xLabel={xLabel}
            innerWidth={innerWidth} 
            innerHeight={
                innerHeight + xAxisLabelOffset
            } />
        <AxisLeft innerWidth={innerWidth}
                  yScale={yScale} />
        <YAxisLabel 
            yLabel={yLabel}
            innerWidth={innerWidth} 
            innerHeight={
                innerHeight + yAxisLabelOffset
            } />
        <Marks xScale={xScale} xAttr={xAttr}
               yScale={yScale} yAttr={yAttr}    
               jsonData={jsonData} />
    </g>
</svg>`,
}