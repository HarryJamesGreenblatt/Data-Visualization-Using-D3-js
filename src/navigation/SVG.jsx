import {useLocation} from "react-router-dom";
import {nanoid} from "nanoid"; 


export default function SVG( { notes, withRespectTo, clearOnClick } ) {

    // Getting the current pathname
    const { pathname } = useLocation();

    // Filtering notes array to find a note whose pathname and withRespectTo match the current ones
    const svgNotes = notes && withRespectTo && notes.filter( 
        note => note.pathname === pathname && note.withRespectTo === withRespectTo 
    )[0];

    // Mapping keyTakeAways array to create a list of takeaways
    const takeAways = svgNotes && withRespectTo && svgNotes.keyTakeAways.map(takeAway => 
        <li key={nanoid()}> {takeAway} </li> // Unique key for each takeaway
    )

    // Rendering the SVG component
    return(
        <div className="notes-container">
            <div className="notes-header-container">
                <h3>
                {
                    // If svgNotes and withRespectTo exist, show the note title
                    svgNotes && withRespectTo
                    ?
                    `SVG notes with respect to --  ${withRespectTo}`
                    :
                    // Otherwise, show a default title
                    "Scalable Vector Graphics (SVG)"
                }
                </h3>
                {
                    // If svgNotes and withRespectTo exist, show a button to clear notes
                    svgNotes 
                    && 
                    withRespectTo 
                    && 
                    <button onClick={() => clearOnClick()}>clear notes</button>
                }
            </div>
        
            {
                // If svgNotes and withRespectTo exist, show the note details
                svgNotes && withRespectTo
                ?
                <div className="notes-content-container">
                    <div className="notes-content-left-column-container">
                        {
                            // If img exists, show the image
                            svgNotes.img
                            ?
                            <img 
                                src={svgNotes.img}
                                style={
                                    // Specific style for "html"
                                    withRespectTo === "html" 
                                        ? {width:"320px"}
                                        : null
                                }    
                            />
                            :
                            // Otherwise, show the component
                            svgNotes.component
                        }
                        {/* Note description */}
                        <pre>{svgNotes.description}</pre> 
                    </div>
                    <div className="notes-content-right-column-container">
                        <ul>
                            {/* List of takeaways */}
                            {takeAways} 
                        </ul>
                    </div>
                </div>
                :
                // If svgNotes or withRespectTo do not exist, show a message to select a note topic
                <div className="selection-container">
                    {/* Wikipedia page for SVG */}
                    <iframe src="https://en.wikipedia.org/wiki/SVG"/> 
                    <p>Select one of the <span>note topics</span> below for a deeper dive:</p>
                </div>
            }

        </div>

    );
}