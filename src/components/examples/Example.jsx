export default function Example() {

    const scrnHeight  = 500;

    return(
        <svg height={scrnHeight}>
        <g
            transform="scale(2) translate(20, -100)"    
        >
            <path 
                d="M20,230 Q40,205 50,230T90,230" 
                fill="none" 
                stroke="darkgoldenrod" 
                strokeWidth="5"
            />
        </g>
        </svg>
    );
    
}