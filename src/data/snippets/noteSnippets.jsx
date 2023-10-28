export const noteSnippets = {
    DataViz2018_1 :  `
    This is the Ghostscript Tiger.
    
    It's one of the earlier examples which used to 
    be commonly referred to demonstrate the 
    capabilities of the svg image format.
`
,


    DataViz2018_2 : `
<svg 
    width="391" 
    height="391" 
    viewBox="-70.5 -70.5 391 391" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink"
>
    <rect fill="#fff" stroke="#000" x="-70" y="-70" width="390" height="390"/>
    <g opacity="0.8">
        <rect x="25" y="25" width="200" height="200" fill="lime" stroke-width="4" stroke="pink"/>
        <circle cx="125" cy="125" r="75" fill="orange"/>
        <polyline points="50,150 50,200 200,200 200,100" stroke="red" stroke-width="4"/>
        <line x1="50" y1="50" x2="200" y2="200" stroke="blue" stroke-width="4"/>
    </g>
</svg>
`
,


    DataViz2018_3 : `
const transformedCircles = [];

for (let i = -25; i <= radius; i += radius) {
    transformedCircles.push(
        <circle  cx={i} cy={i} r={radius}></circle>  
    );
}

<svg height={scrnHeight} width={scrnHeight}>
    <g
        transform={\`translate(\${scrnHeight/2} \${scrnHeight/2})\`}
        fill="white"
        stroke="goldenrod"
        strokeWidth={7}
    >
        {transformedCircles}
    </g>
</svg>
`   
,


    DataViz2018_4 : `
<path 
    d="M20,230 Q40,205 50,230 T90,230" 
    fill="none" 
    stroke="darkgoldenrod" 
    stroke-width="5"
/>


This is a simple bezier curved svg path.


A <path> is the most general shape that can be 
used in SVG. Using a path element, you can draw 
rectangles, circles, ellipses, polylines, polygons, 
bezier curves, quadratic curves, and more.


d - A list of points and other information about how to draw the path.  
Contains a series of five commands and parameters used by those commands.
`    
,

    DataViz2018_5 :
<>
    <p className="viz-theory-purpose-description">
        Computer-based visuaization systems provide  
        <br/> 
        visual representations of <span>datasets</span> 
        <br/> 
        designed to help <span>people</span> carry out tasks  
        <br/>
        <br/>
        more effectively.
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        Visualization is suitable when there is a need to 
        <br/>
        <br/>
        <span>augment human capabilities,</span>  
        <br/>
        <br/>
        rather than replace people with computational decision-making methods.
    </p>
</>,


    DataViz2018_6 :
<>
    <p className="viz-theory-external-representation-description">
        In the stacked bar chart depicted above, 
        <br/>
        the colors correspond to various <span>religions</span>, 
        <br/>
        while the lengths of bars correspond to the <span>population</span> 
        <br/>
        of people belonging to that religion, by <span>country</span> .
        <br/>
        <br/>
        <br/>
        The figure above illustrates how an <span>external representation</span>
        <br/>
        of data effectively replaces 
        <br/>
        <br/>
        <em>cognition</em> (<em>searching for the highest values in a table or spreadsheet</em>) 
        <br/>
        <br/>
        with
        <br/>
        <br/>
        <em>perception</em> (<em>searching for the longest subsection of color in a stacked bar chart</em>)
    </p>
</>,


    DataViz2018_7 :
<>
    <p className="viz-theory-anscombes-quartet-description">
        <span>Anscombe's Quartet</span> ,
        <br/>
        depicted above, demonstrates the importance of considering visualizations, 
        <br/>
        <br/>
        rather than relying strictly on <em>statistical summary data</em>, 
        <br/>
        <br/>
        such as <em>mean</em>, <em>variance</em>, <em>correlation</em>, etc.
        <br/>
        <br/>
        It comprises <em>four data sets</em> that have <em>nearly identical simple descriptive statistics</em>, 
        <br/>
        yet have <b>very different distributions</b> and <b>appear very different</b> when graphed.

    </p>
</>

}