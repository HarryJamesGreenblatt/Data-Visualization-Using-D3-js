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


    DataVizReact_3 :
<>
    <p
    >
        Once a visualization
        <br/>
        (whose height = <em>innerHeight</em> and whose width = <em>innerWidth</em>) has been <b>contained within a group element</b> and then <b>translated a distance relative to it's margin</b>, it may then support the inclusion of <b>coordinate axes</b>.
    </p>
</>,


    DataVizReact_4 :
<>
    <p
    >
        D3 includes a number of utilties which help calculate various <code><a style={{color:"darkblue"}} href="https://d3js.org/d3-scale#d3-scale">Scales</a></code> which themsleves <b>map a dimension of abstract data to a visual representation</b>.
    </p>
</>,

    DataVizReact_5 :
<>
    <p
    >
        The <code><a style={{color:"darkblue"}} href="https://github.com/HarryJamesGreenblatt/Data-Visualization-Using-D3-js/blob/main/src/notes/AxesNote.jsx">AxesNote() React component</a></code> provides the 
        <span><code style={{ fontSize: "1.025rem", fontWeight: "bold", color:"red"}}>xAxis()</code></span> and <span><code style={{ fontSize: "1.025rem", fontWeight: "bold", color:"blue"}}>yAxis()</code></span> functions,
        each of which leveraging d3's <a style={{color:"darkblue"}}  href="https://d3js.org/d3-scale/linear#scaleLinear"><code>scaleLinear()</code></a> and <a style={{color:"darkblue"}} href="https://d3js.org/d3-axis#axis_ticks"><code>ticks()</code></a> functions to <b>generate their own respective axis in an iterative pattern</b>.
    </p>
</>
,

    DataVizReact_6 :
<>
    <p>
        The <code><a style={{color:"darkblue"}} href="https://github.com/HarryJamesGreenblatt/Data-Visualization-Using-D3-js/blob/main/src/notes/AxesNote.jsx">AxesNote() React component</a></code> provides the 
        <span><code style={{color:"red"}}>xAxis()</code></span> and <span><code style={{color:"blue"}}>yAxis()</code></span> functions,
        each of which <span>generates its own respective axis</span>.
    </p>
</>
,


    DataVizReact_7 :
`<svg style={{background:"white"}}>
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
            fill="green"
            opacity={.3}
        >
        </rect>
        { xAxis() }
        { yAxis() }
    </g>
</svg>
`,


    DataVizReact_8 :
`import { csv } from "d3";

const [csvData, setCsvData] = React.useState(null);

React.useEffect( () => {
    csv( csvInputUrl )
        .then( d => setCsvData( d ) ); 
}, [] );
`,

    
    DataVizReact_9 :
<>
    <p className="description">
        Similar to <code>d3.csv()</code>, 
        <br/>
        <br/>
        <span>JSON data</span> may also be fetched via url
        (and generally is, in most cases), 
        <br/>
        and then converted into an <span>Array of objects</span>.
        <br/>
        <br/>
        <br/>
        This is accomplished by leveraging <code><a href="https://devdocs.io/d3~7/d3-request#json" style={{color:"white", fontSize:"1.5rem"}}>d3.json()</a></code>, which, similar to <code>d3.csv()</code>,
        <br/>
        returns a <span>Promise</span> and must be provided a <span>Callback Function</span> 
        <br/>
        <br/>
        in order to <span>expose it's data</span> and <span>save it as state</span>.
    </p>
</>,


    D3ScalesInDepth_1:
<p className="description">
    When creating <b><code>bar charts</code></b>,  
    <br/>
    <br/>
    <code><a style={{fontSize:"1.25rem", color:"whitesmoke", fontWeight:"bold"}} href="https://devdocs.io/d3~7/d3-scale#scaleband">d3.scaleBand()</a></code> helps to determine the <b>geometry of the bars</b>, 
    <br/>
    taking into account any <span>padding</span> between each bar. 
    <br/>
    <br/>
    The <span>domain</span> is specified as an <b><em>array of values</em></b>  (one value for each band) 
    <br/>
    and the <span>range</span> is the <b><em>total width of the bar chart</em></b>.
    <br/>
    <br/>
    In effect,
    scaleBand() will <span>split the range</span>  into <span>n bands</span>
    <br/>
    ( where <span>n</span> is the <code><b>number of values in the domain array</b></code>), 
    <br/>
    and then compute their <span>positions</span> and <span>bandwidths</span>.
</p>,


    D3ScalesInDepth_2:
<p className="description">
    <b><code>scatterplots</code></b> generally have both axes represented by  
    <code><a style={{fontSize:"1.25rem", color:"whitesmoke", fontWeight:"bold"}} href="https://devdocs.io/d3~7/d3-scale#scalelinear">d3.scaleLinear()</a></code>,
    <br/>
    <br/>
    <br/>
    which <span>maps</span> a <b>continuous, quantitative</b><span>input domain</span>   
    <br/>
    to a <b>continuous</b> <span>output range</span> 
    <br/>
    using a <span>linear transformation</span> <em>(translate and scale)</em>.
</p>,


    D3ScalesInDepth_3:
<p className="description">
    <b><code>Line Charts</code></b> are similar to scatterplots 
    <br/>
    in that they <em>both apply Linear Transformations across each axis</em>.
    <br/>
    <br/>
    <br/>
    However, since  Line Charts  are  often to used to visualize <b>change over time</b>, 
    <br/>
    the  <code><a style={{fontSize:"1.25rem", color:"whitesmoke", fontWeight:"bold"}} href="https://devdocs.io/d3~7/d3-scale#scaletime">d3.scaleTime()</a></code> method assists in transforming a <span>Domain of Dates</span> 
    <br/>
    into a <span>Range of Screen Coordinates</span>.
</p>,
}