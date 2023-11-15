import { nanoid } from "nanoid";
import GroupElementNote from '../notes/GroupElementNote.jsx';
import ImportCSVDataNote from '../notes/ImportCsvDataNote.jsx';
import AxesNote from "../notes/AxesNote.jsx";
import ImportCSVDataImage from '../../public/ImportCsvDataNote.jpg';
import SVGPathNoteImage from '../../public/SVGPathNote.jpg';
import ExternalRepresentationImage from "../../public/ExternalRepresentationNote.jpg";
import AnscombeQuartetImage from "../../public/AnscombeQuartetNote.jpg";
import DatasetTypeImage from "../../public/DatasetTypeNote.jpg";
import AttributeTypeImage from "../../public/AttributeTypeNote.jpg";
import MarginConventionImage from '../../public/MarginConventionExample.jpg';
import { noteSnippets } from './snippets/noteSnippets';



export const noteData = [
    {   
        id : 0,
        pathname : "/",
        withRespectTo : "",
        component: null,
        img : "",
        description: "",
        keyTakeAways: [ ]
    },
    {   
        id : 1,
        pathname : "/svg",
        withRespectTo : "image format",
        component: null,
        img : "https://upload.wikimedia.org/wikipedia/commons/f/fd/Ghostscript_Tiger.svg",
        description: noteSnippets['DataViz2018_1'],
        keyTakeAways: [
            "SVG is different from other formats because it encodes every shape by the coordinates of their defined 'paths'",
            "Image quality does not degrade as an SVG image scales, which is why it's called 'SCALEABLE' vector graphics.",
            "Alternatively, Raster Images, which are up made of pixels, become blurry as their scale increases or decreases beyond a nominal limit."
        ]
    },
    {   
        id : 2,
        pathname : "/svg",
        component: null,
        withRespectTo : "html",
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/SVG_example_markup_grid.svg/391px-SVG_example_markup_grid.svg.png",
        description: noteSnippets['DataViz2018_2'],
        keyTakeAways: [
            "HTML provides elements for defining headers, paragraphs, tables, and so on. In much the same way, SVG provides elements for circles, rectangles, and simple and complex curves.",
            "Like canvas, uses a coordinate system where point (0,0) is at the to left-hand corner. Thus, WIDTH increases from left-to-right and HEIGHT increases from top-to-bottom.",
            <p key={nanoid()}>
                For more information, chek out the <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial">SVG Tutorial on MDN</a>
            </p>
        ]
    },
    {   
        id : 3,
        pathname : "/svg",
        withRespectTo : "groups",
        component: <GroupElementNote/>,
        img : null,
        description: noteSnippets['DataViz2018_3'],
        keyTakeAways: [
            "The <g> SVG element is a container used to group other SVG elements.",
            "Transformations applied to the <g> element are performed on its child elements, and its attributes are inherited by its children. It can also group multiple elements to be referenced later with the <use> element.",
        ]
    },
    {   
        id : 4,
        pathname : "/svg",
        withRespectTo : "path",
        component: null,
        img : SVGPathNoteImage,
        description: noteSnippets['DataViz2018_4'],
        keyTakeAways: [
            <>
                <p>Move To:  M(X Y)</p>
                <code>&lt;path d="M10 10"/&gt;</code>
            </>,
            <>
                <p>Line To:  L(X Y)</p> 
                <em><p>Horizontal Line: H(X) = L(X 0)</p></em>
                <em><p>Vertical Line: V(Y) = L(0 Y)</p></em>
                <code>&lt;path <br/>&nbsp; &nbsp; d="M 10 10 H 90 V 90 H 10 L 10 10"<br/>/&gt;</code>
            </>,
            <>
                <p>Cubic curve:  C(X1 Y1, X2 Y2, X Y)</p> 
                <code>&lt;path <br/>&nbsp; &nbsp; d="M 10 10 C 20 20, 40 20, 50 10"<br/>/&gt;</code>
            </>,
            <>
                <p>Qubic curve:  Q(X1 Y1, X Y)</p> 
                <code>&lt;path d="M 10 80 Q 95 10 180 80"/&gt;</code>
            </>,
            <>
                <p>Arcs:  Pretty complicated.</p>
                <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#arcs">More information about Arcs on MDN</a>
            </>,
        ]
    },
    {   
        id : 5,
        pathname : "/viz-theory",
        withRespectTo : "purpose",
        component: null,
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Data_visualization_process_v1.png/800px-Data_visualization_process_v1.png",
        description: noteSnippets['DataViz2018_5'],
        keyTakeAways: [
            "We don't need vis when fully automatic solution exists and is trusted",
            "Many analysis problems are ill-specified (don't know which questions to ask in advance)",
            <>
                Some possibilities for long term usage are: 
                <ul key={nanoid()}>
                    <li>Exploratory analysis of scientific data</li>
                    <li>Presentation of known results</li>
                    <li style={{marginBottom: 0}}>Stepping stone to better understanding of requirements</li>
                </ul>   
            </>
        ]
    },
    {   
        id : 6,
        pathname : "/viz-theory",
        withRespectTo : "ext. representation",
        component: null,
        img : ExternalRepresentationImage,
        description: noteSnippets['DataViz2018_6'],
        keyTakeAways: [

        ]
    },
    {   
        id : 7,
        pathname : "/viz-theory",
        withRespectTo : "anscombe's quartet",
        component: null,
        img : AnscombeQuartetImage,
        description: noteSnippets['DataViz2018_7'],
        keyTakeAways: [
            "Statisitcal summaries tend to obscure certain information.",
            "Visualizations provide better results for identifying outliers in the data.",
            "Even a single outlier may cause a sigficant visual skew of the data."
        ]
    },
    {   
        id : 8,
        pathname : "/viz-theory",
        withRespectTo : "dataset types",
        component: null,
        img : DatasetTypeImage,
        description: noteSnippets['DataViz2018_8'],
        keyTakeAways: [

        ]
    },
    {   
        id : 8,
        pathname : "/viz-theory",
        withRespectTo : "attribute types",
        component: null,
        img : AttributeTypeImage,
        description: noteSnippets['DataViz2018_9'],
        keyTakeAways: [

        ]
    },
    {   
        id : 9,
        pathname : "/fetch-data",
        withRespectTo : "importing csv",
        component: <ImportCSVDataNote/>,
        img : ImportCSVDataImage,
        description: noteSnippets['DataVizReact_1'],
        keyTakeAways: [
            "Invoking d3.csv is a more consise alternative to combining the use of fetch, async, and await for programmatic access to csv data",
            "Using d3.csv alone does not immeadiately produce the desired array of data, but rather returns a Promise which needs to have its data exposed using a callback function",
            "In order to effectively load the data for use in React development, the callback function assigned following the call to d3.csv should store the csv data as state by way of a setState function"
        ]
    },
    {   
        id : 10,
        pathname : "/charts",
        withRespectTo : "margin convention",
        component: <ImportCSVDataNote/>,
        img : MarginConventionImage,
        description: noteSnippets['DataVizReact_2'],
        keyTakeAways: [
            "The components [Marks] of the visualization are contained within the gray shaded area.",
            "The visualization area should itself be represented by a collection of svg subcomponents contained within a group (<g>) element.",
            "The margin distances (i.e. top, right, bottom, left) define the offsets by which the group element should be translated to provide enough room to accomodate each axis.",
            <>
                For a detailed example, check out 
                <br/>
                <a href="https://observablehq.com/@d3/margin-convention">this Margin Convention Article on Observable</a>
            </>
        ]
    },
    {   
        id : 11,
        pathname : "/charts",
        withRespectTo : "axis",
        component: <AxesNote/>,
        img : null,
        description: noteSnippets['DataVizReact_6'],
        keyTakeAways: [
            noteSnippets['DataVizReact_3']
    
        ]
    },
]