import CircleImage from '../../public/CircleExample.jpg';
import LineImage from "../../public/LineExample.jpg";
import CircleExample from "../components/examples/CircleExample.jsx";
import GroupOfShapesImage from '../../public/GroupOfShapesExample.jpg';
import GroupOfShapesExample from '../components/examples/GroupOfShapesExample.jsx';
import LineExample from '../components/examples/LineExample.jsx';
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
                Lines require a starting point (x1,y1) and an ending point (x2, y2).
                <br/>
                If they are created without a stroke-width, they wont be visible.
            </p>
        </>, 
        component: <LineExample />,
        codeSnippet: codeSnippets['DataViz2018_2']
    },
    {
        id: 3,
        source: "Data Viz 2018",
        title: "Groups of Shapes",
        img: GroupOfShapesImage,
        description: "Wrapping svg geometries within a group element (<g>) allows us to define our geometry once, then iterate over a loop while translating their coordinates, or automating other properties, such as fill their color.",
        component: <GroupOfShapesExample />,
        codeSnippet: codeSnippets['DataViz2018_3']
    },
]


