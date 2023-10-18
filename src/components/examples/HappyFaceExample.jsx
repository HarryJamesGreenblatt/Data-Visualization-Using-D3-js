import { arc } from "d3";
import { nanoid } from "nanoid";

export default function HappyFaceExample() {

    
    const scrnHeight  = 350, scrnWidth  = 500;


    const faceInitialX = 160, faceInitialY = 170;
    
    const faceRadius = 140;



    const renderEyes = () => { 
        const eyes = [];

        for(let x = faceInitialX - 50; x <= faceInitialX + 100; x += 100)
            eyes.push(
                <circle
                    key={nanoid()}
                    className="eye"
                    cx={x}
                    cy={faceInitialY-50}
                    r={faceRadius/8}
                >
                </circle>
            );
        
        return eyes;
    }


    const renderMouth = () => {

        return(

            <g
                transform="translate(162, 175) rotate(90) "
            >
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