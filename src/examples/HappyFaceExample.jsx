import { arc } from "d3";
import { nanoid } from "nanoid";
import { select } from "d3";

export default function HappyFaceExample() {

    
    const scrnHeight  = 350, scrnWidth  = 500;


    const faceInitialX = 160, faceInitialY = 170;
    
    const faceRadius = 140;

    const renderEyes = () => { 
        
        const eyes = [];

        for(let x = faceInitialX - 50; x <= faceInitialX + 100; x += 100)
            eyes.push(
                <g key={nanoid()}>
                    <rect
                        key={nanoid()}
                        className="eyebrow"
                        width={50}
                        height={8}
                        transform={`
                            translate(
                                ${x-25} ${faceInitialY-100}
                            )
                            rotate(
                                ${x > faceInitialX ?  x/25 : -x/15}
                            )
                        `}
                    >
                    </rect>
                    <circle
                        key={nanoid()}
                        className="eyeball"
                        cx={x}
                        cy={faceInitialY-50}
                        r={faceRadius/8}
                    >
                    </circle>
                </g>
            );
        
        return eyes;
    }


    const renderMouth = () => {
        return(
            <g  transform="translate(162, 165) rotate(90) ">
                <path
                    d={arc()({
                        innerRadius: 93,
                        outerRadius: 100,
                        startAngle: 0,
                        endAngle: Math.PI
                    })}
                >
                </path>
            </g>
        )
    }


    return(
        <svg 
            height={scrnHeight} 
            width={scrnWidth}
            className="happy-face-example" 
        >
            <circle
                key={nanoid()}
                className="happy-face"
                cx={faceInitialX}
                cy={faceInitialY}
                r={faceRadius}
            >
            </circle>
            {renderEyes()}
            {renderMouth()}
        </svg>
    );
    
}