import SVGPathNoteImage from '../../public/SVGPathNote.jpg';

import { nanoid } from "nanoid";
import GroupElementNote from '../components/notes/GroupElementNote';

const svgMarkup = `
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
</svg>`

const ghostscriptTigerDescription = `
This is the Ghostscript Tiger.

It's one of the earlier examples which used to 
be commonly referred to demonstrate the 
capabilities of the svg image format.`


const pathDescription = `
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

const groupsDescription = `

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
        description: ghostscriptTigerDescription,
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
        description: svgMarkup,
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
        description: groupsDescription,
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
        description: pathDescription,
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