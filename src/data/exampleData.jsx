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
import { codeSnippets } from "./snippets/codeSnippets.jsx";


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
]


