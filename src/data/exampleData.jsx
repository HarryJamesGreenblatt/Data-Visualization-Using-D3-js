import CircleImage from '../../public/CircleExample.jpg';
import CircleExample from "../components/examples/CircleExample.jsx";
import GroupOfShapesImage from '../../public/GroupOfShapesExample.jpg';
import GroupOfShapesExample from '../components/examples/GroupOfShapesExample.jsx';
import LineExample from '../components/examples/LineExample.jsx';
import LineImage from "../../public/LineExample.jpg";
import CssStylingExample from '../components/examples/CssStylingExample';
import CssStylingImage from "../../public/CssStylingExample.jpg";
import Example from '../components/examples/Example';
import { codeSnippets } from "./codeSnippets.jsx";


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
    // {
    //     id: 5,
    //     source: "Data Viz 2018",
    //     title: "Groups of Shapes2",
    //     img: GroupOfShapesImage,
    //     description: 
    //     "Wrapping svg geometries within a group element (<g>) allows us to define our geometry once, then iterate over a loop while translating each component's coordinates, or automating other properties, such as their fill color, stroke-width, etc.",
    //     component: <Example />,
    //     codeSnippet: codeSnippets['DataViz2018_4']
    // },
]

