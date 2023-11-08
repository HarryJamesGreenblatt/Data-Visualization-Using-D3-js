import {useRef, useEffect} from 'react';
import {scaleLinear, select, axisBottom} from "d3";

export default function BotomAxisD3WayExample() {

    const ref = useRef();
    
    useEffect(()=>{
        const xScale = scaleLinear()
            .domain( [0,100] )
            .range( [10, 270] )
    
        const svgElement = select(
            ref.current
        );
    
        const axisGenerator = axisBottom(
            xScale
        );
    
        svgElement.append("g")
            .call( axisGenerator )
    }, []);
    
    return(
        <svg 
            ref={ref}
            className="bottom-axis-d3-way"
        >
        </svg>
    )
}