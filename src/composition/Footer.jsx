import {nanoid} from "nanoid"; 
import { useLocation, Link } from "react-router-dom";


export default function Footer({respectiveTo, onClick}) {

    // Mapping respectiveTo array to create a set of buttons
    const subjectButtons = respectiveTo.map( 
        withRespectTo => 
            <button 
                key={nanoid()} // Unique key for each button
                onClick={() => onClick(withRespectTo)} 
            >
                {/* Button label */}
                {withRespectTo} 
            </button>
    );

    // Getting the current pathname
    const { pathname } = useLocation();

    // Checking if the pathname matches the pattern /examples/number
    const exampleOpened = pathname.match( /examples\/\d+/ );

    // Rendering the Footer component
    return(
        <footer className="footer">
            <div className="subject-buttons">
            {
                // If exampleOpened is true, show a link to go back to examples
                exampleOpened
                ?
                <Link 
                    to="/examples"
                >
                    <button>Back to Examples</button>
                </Link>
                :
                // Otherwise, display the subject buttons
                subjectButtons
            }
            </div>
        </footer>
    );
}
