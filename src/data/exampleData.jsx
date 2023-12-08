import CircleImage from '../../public/CircleExample.jpg';
import CircleExample from "../examples/CircleExample.jsx";
import GroupOfShapesImage from '../../public/GroupOfShapesExample.jpg';
import GroupOfShapesExample from '../examples/GroupOfShapesExample.jsx';
import LineExample from '../examples/LineExample.jsx';
import LineImage from "../../public/LineExample.jpg";
import CssStylingExample from '../examples/CssStylingExample'; 
import CssStylingImage from "../../public/CssStylingExample.jpg";
import CompooundTransformationsExample from '../examples/CompooundTransformationsExample';
import CoumpoundTransformationsImage from '../../public/CompoundTransformationsExample.jpg';
import HappyFaceExample from '../examples/HappyFaceExample';
import HappyFaceImage from "../../public/HappyFaceExample.jpg";
import BotomAxisD3WayExample from "../examples/axis/BotomAxisD3WayExample.jsx";
import BotomAxisD3WayImage from "../../public/BottomAxisD3WayExample.jpg";
import ImportCsvDataExample from '../examples/ImportCsvDataExample';
import ImportCsvDataImage from '../../public/ImportCsvDataExample.jpg';
import ImportJsonDataImage from '../../public/ImportJsonDataExample.jpg';
import MarginConventionExample from '../examples/MarginConventionExample.jsx';
import MarginConventionImage  from '../../public/MarginConventionExample2.jpg';
import BarChartExample from '../examples/charts/BarChartExample.jsx';
import BarChartExampleImage from '../../public/BarChartExample.jpg';
import { codeSnippets } from "./snippets/codeSnippets.jsx";
import GridExample from '../examples/GridExample.jsx';
import ScatterPlotExample from '../examples/charts/ScatterPlotExample.jsx';
import ImportJsonDataNote from '../notes/ImportJsonDataNote.jsx';


export const exampleData = [
    {
        id: 1,
        source: "Data Viz 2018",
        title: "A Plain Circle",
        img: CircleImage,
        description: "A plain, black-filled circle drawn within an svg element whose dimensions are defined by values stored in variables.",
        component: <CircleExample />,
        codeSnippet: codeSnippets['DataViz2018_1']
    },
    {
        id: 2,
        source: "Data Viz 2018",
        title: "A Plain Line",
        img: LineImage,
        description:
        <>
            <p>
                Lines require a <span>starting point (x1,y1)</span> and an <span>ending point (x2, y2)</span>.
                <br/>
                If they are created without a <b>stroke-width</b>, they wont be visible.
            </p>
        </>, 
        component: <LineExample />,
        codeSnippet: codeSnippets['DataViz2018_2']
    },
    {
        id: 3,
        source: "Data Viz 2018",
        title: "A CSS-Styled Rectangle",
        img: CssStylingImage,
        description: 
        <>
            Properties such as <span>fill color</span>, <span>stroke</span>(color), and <span>stroke-width</span> may be alternatively set using CSS
        </>,
        component: <CssStylingExample />,
        codeSnippet: codeSnippets['DataViz2018_3']
    },
    {
        id: 4,
        source: "Data Viz 2018",
        title: "Groups of Shapes",
        img: GroupOfShapesImage,
        description: 
        "Wrapping svg geometries within a group element (<g>) allows us to define our geometry once, then iterate over a loop while translating each component's coordinates, or automating other properties, such as their fill color, stroke-width, etc.",
        component: <GroupOfShapesExample />,
        codeSnippet: codeSnippets['DataViz2018_4']
    },
    {
        id: 5,
        source: "Data Viz 2018",
        title: "Compound Transformations",
        img: CoumpoundTransformationsImage,
        description:
        <>
            <p>
                Transformations can be concatenated easily just by separating them with spaces. 
                <br/>
                <br/>
                For example, <code>translate()</code> and <code>rotate()</code> are very commonly used.
            </p>
        </>, 
        component: <CompooundTransformationsExample />,
        codeSnippet: codeSnippets['DataViz2018_5']
    },
    {
        id: 6,
        source: "Data Viz 2018",
        title: "A Happy Face",
        img: HappyFaceImage,
        description:
        <>
            <p>
                The <a href='https://github.com/HarryJamesGreenblatt/Data-Visualization-Using-D3-js/blob/main/src/examples/HappyFaceExample.jsx'><code>renderEyes()</code></a> function provides an array of 2 groups of svg elements, each respectively containing an <em>eyeball</em> and <em>eyebrow</em> class element.
            </p>
            <br/>
            <p>
                Selecting these classes enables the deployment of <code>animation</code> through CSS.
            </p>
        </>, 
        component: <HappyFaceExample />,
        codeSnippet: codeSnippets['DataViz2018_6']
    },
    {
        id: 7,
        source: "Data Viz (React)",
        title:"Fetching CSV Data",
        img: ImportCsvDataImage,
        description: 
        <>
            <code><a href='https://devdocs.io/d3~7/d3-fetch#csv'>d3.csv()</a></code> fetches the CSV file at the 
            <span> <b> specified input URL </b> </span>.
            <br/>
            <br/>
            It returns a <code>Promise</code> which can be assigned a <code>callback function</code> that iterates through the csv data for processeing. 
        </>,
        component: <ImportCsvDataExample />,
        codeSnippet: codeSnippets['DataVizReact_1']
    },
    {
        id: 70,
        source: "Data Viz (React)",
        title:"Fetching JSON Data",
        img: ImportJsonDataImage,
        description: 
        <>
            <code><a href='https://devdocs.io/d3~7/d3-request#json'>d3.json()</a></code> fetches the JSON file at the 
            <span> <b> specified input URL </b> </span>.
            <br/>
            <br/>
            It returns a <code>Promise</code> which can be assigned a <code>callback function</code> that iterates through the json data for processeing. 
        </>,
        component: <ImportJsonDataNote />,
        codeSnippet: codeSnippets['DataVizReact_5']
    },
    {
        id: 8,
        source: "Data Viz (React)",
        title:"The Margin Convention",
        img: MarginConventionImage,
        description: 
        <>
            The <b>Margin</b> apportions space for any desired coordinate axes. 
            <br/> 
            <br/> 
            The <b>Visualization</b> area is first drawn <span>having the dimensions of the Inner Width and Inner Height</span> and is then <span>translated by the dimensions of the Margin</span>. 
            <br/>
            <br/>
            <blockquote style={{marginLeft:"5em", fontSize:".95rem"}}>
                The <span>Inner Width</span> and <span>Inner Height</span> is the remaining space after <span>subtracting a fixed sized margin</span> from the width and height of the SVG containing the visualization.
            </blockquote>
            <br/>
        </>,
        component: <MarginConventionExample />,
        codeSnippet: codeSnippets['DataVizReact_2']
    },
    {
        id: 9,
        source: "React + D3.js",
        title:
        <>
            A Bottom Axis: 
            <br/>
            The D3 Way
        </>,
        img: BotomAxisD3WayImage,
        description: 
        <>
            <code>d3</code> provides helper functions such as <a href='https://devdocs.io/d3~7/d3-scale#scalelinear'><code>scaleLinear</code></a> and <a href='https://devdocs.io/d3~7/d3-axis#axisbottom'><code>axisBottom</code></a> which <span>generate coordinate axes</span>. 
            <br/>
            <br/>
            Although convenient and brisk, this technique's reliance on <code>useRef()</code> and <code>useEffect()</code> hooks, which give D3 passive control over the DOM, may make this approach unstable and/or difficult to scale. 
            <br/>
            <br/>
            <p style={{marginBottom:"1.5rem"}}>
              The worst shortfall surrounding reliance on this method is that any <b>custom changes to the axis require direct modification to the d3 source code</b>. 
            </p>
        </>,
        component: <BotomAxisD3WayExample />,
        codeSnippet: codeSnippets['DataViz2018_7']
    },
    {
        id: 10,
        source: "Data Viz (React)",
        title:
        <>
            World Populations
            <br/>
            Bar Chart
        </>,
        img: BarChartExampleImage,
        description: 
        <>
            This <a href='https://github.com/HarryJamesGreenblatt/Data-Visualization-Using-D3-js/blob/main/src/examples/charts/BarChartExample.jsx'>
                <code>BarChartExample component</code>
            </a> 
            uses a <em> Band Scale</em> to define the <em>height</em> of each of the 
            <em> rectangular marks</em>, and a <b> Linear Scale</b> to express the 
            <b> Population</b> relative to each <b>Country</b>.
        </>,
        component: <BarChartExample />,
        codeSnippet: codeSnippets['DataVizReact_4']
    },
    {
        id: 11,
        source: "Data Viz (React)",
        title:
        <>
            Scatter Plot
        </>,
        img: null,
        description: 
        <>
            Iris dataset
        </>,
        component: <ScatterPlotExample />,
        codeSnippet: null
    },
]


