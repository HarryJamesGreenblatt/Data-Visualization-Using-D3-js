import { nanoid } from "nanoid";

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
be commonly reffered to demonstrate the 
capabilities of the svg image format.`



export const noteData = [
    {   
        id : 0,
        pathname : "/",
        withRespectTo : "",
        img : "",
        description: "",
        keyTakeAways: [ ]
    },
    {   
        id : 1,
        pathname : "/svg",
        withRespectTo : "image format",
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
        withRespectTo : "html",
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/SVG_example_markup_grid.svg/391px-SVG_example_markup_grid.svg.png",
        description: svgMarkup,
        keyTakeAways: [
            "Like canvas, uses a coordinate system where point (0,0) is at the to left-hand corner. Thus, WIDTH increases from left-to-right and HEIGHT increases from top-to-bottom.",
            "Multiple svg components may be grouped together using the <g> element",
            "CSS can be used to style svg elements",
            <p key={nanoid()}>
                For more information, chek out the <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial">SVG Tutorial on MDN</a>
            </p>
        ]
    },
]