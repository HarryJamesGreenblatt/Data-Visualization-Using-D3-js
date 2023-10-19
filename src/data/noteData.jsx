import { nanoid } from "nanoid";
import SVGPathNoteImage from '../../public/SVGPathNote.jpg';
import GroupElementNote from '../notes/GroupElementNote';
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
]