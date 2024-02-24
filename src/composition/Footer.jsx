import {nanoid} from "nanoid"; 
import { useLocation, Link } from "react-router-dom";

export default function Footer({respectiveTo, onClick}) {

    const subjectButtons = respectiveTo.map( 
        withRespectTo => 
            <button 
                key={nanoid()}
                onClick={() => onClick(withRespectTo)}
            >
                {withRespectTo}
            </button>
    );

    const { pathname } = useLocation();

    const exampleOpened = pathname.match( /examples\/\d+/ );

    
    return(
        <footer className="footer">
            <div className="subject-buttons">
            {
                exampleOpened
                ?
                <Link 
                    to=".." 
                    relative="path"
                >
                    <button>Back to Examples</button>
                </Link>
                :
                subjectButtons
            }
            </div>
        </footer>
        // <footer className="footer">
        //     <div className="subject-buttons">
        //         {subjectButtons}
        //     </div>
        // </footer>
    );
}