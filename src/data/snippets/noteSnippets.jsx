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
    <p className="description">
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
    <p className="description">
        In the stacked bar chart depicted above, 
        <br/>
        the colors correspond to various <span>religions</span>, 
        <br/>
        while the lengths of bars correspond to the <span>population</span> 
        <br/>
        of people belonging to that religion, by <span>country</span> .
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
    <p className="description">
        <span>Anscombes Quartet</span> ,
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
</>,


    DataViz2018_8 :
<>
    <p className="description">
        Broadly speaking,
        <br/>
        there are <em>3 General Types of Datasets</em> :
        <br/>
        <br/>
        <span>Table</span>,
        <br/>
        Where each row represents <em>a single item/event</em>, 
        or, 
        <br/>
        in the case of a <b>Multidimensional Table</b> an <b>aggregation (i.e sum, avg., etc.)</b>.
        <br/>
        <br/>
        <span>Network</span>, 
        <br/>
        Where <em>nodes</em> of data are logically connected together using referential <b>links</b>,
        <br/>
        which may be optionally configured to take the form of a <b>hierarchical structure</b>,
        <br/>
        such as a <b>Tree</b>.
        <br/>
        <br/>
        and 
        <br/>
        <br/>
        <span>Spatial</span>
        <br/>
        Where theres an element of the data that relationally <em> maps</em> 
        <br/>
        either onto a <b>grid of positions</b>, or a <b>geographic reagion</b>.
    </p>
</>,


    DataViz2018_9 :
<>
    <p className="description">
         There are <em>2 Attributes Types</em> which provide a broad taxonomy for visualization design:
         <br/>
         <br/>
         <span>Catagorical</span>
         <br/>
         consist of <em>logically distinctive things</em> 
         which <em>dont have any intrinsic ordering between them.</em>
         <br/>
         <br/>
         and 
         <br/>
         <br/>
         <span>Ordered</span>
         <br/>
         1) Ordinal - <em>Different sizes/dimensions of same type of nonnumerical thing  </em> 
         <br/>
         2) Quantitative - <em>Strictly numerical</em>
    </p>
</>,


    DataVizReact_1 :
<>
    <p className="description">
        By using the <a href="https://devdocs.io/d3~7/d3-fetch#csv" style={{color:"whitesmoke", fontWeight:"700"}}><code>d3.csv</code></a> method,
        <br/>
        <br/>
        a <span>CSV file</span> stored on the web 
        <br/>
        can be quickly transformed into an <span>Array of objects</span>.
    </p>
</>,


    DataVizReact_2 :
<>
    <p 
        className="description"
        style={{marginTop: '5em'}}
    >
        In <code>D3</code>, the <span>Margin Convention</span> ensures that a visualization  
        <br/>
        is both <span>the right size</span> and <span>in the right place</span> 
        <br/>
        to support the inclusion of additional <span>coordinate axes</span>.

    </p>
</>,
}