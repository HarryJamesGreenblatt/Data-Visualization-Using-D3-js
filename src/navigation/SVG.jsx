import {useLocation} from "react-router-dom";
import {nanoid} from "nanoid"; 

export default function SVG( { notes, withRespectTo, clearOnClick } ) {

    const { pathname } = useLocation();



    const svgNotes = notes && withRespectTo && notes.filter( 
        note => note.pathname === pathname && note.withRespectTo === withRespectTo 
    )[0];


    const takeAways = svgNotes && withRespectTo && svgNotes.keyTakeAways.map(takeAway => 
        <li key={nanoid()}> {takeAway} </li>
    )


    return(

        <div className="notes-container">
            <div className="notes-header-container">
                <h3>
                {
                    svgNotes && withRespectTo
                    ?
                    `SVG notes with respect to --  ${withRespectTo}`
                    :
                    "Scalable Vector Graphics (SVG)"
                }
                </h3>
                {
                    svgNotes 
                    && 
                    withRespectTo 
                    && 
                    <button onClick={() => clearOnClick()}>clear notes</button>
                }
            </div>
        
            {
                svgNotes && withRespectTo
                ?
                <div className="notes-content-container">
                    <div className="notes-content-left-column-container">
                        {
                            svgNotes.img
                            ?
                            <img 
                                src={svgNotes.img}
                                style={
                                    withRespectTo === "html" 
                                        ? {width:"320px"}
                                        : null
                                }    
                            />
                            :
                            svgNotes.component
                        }
                        <pre>{svgNotes.description}</pre>
                    </div>
                    <div className="notes-content-right-column-container">
                        <ul>
                            {takeAways}
                        </ul>
                    </div>
                </div>
                :
                <div className="selection-container">
                    <iframe src="https://en.wikipedia.org/wiki/SVG"/>
                    <p>Select one of the <span>note topics</span> below for a deeper dive:</p>
                </div>
            }

        </div>

    );
}