// Importing required modules
import {useLocation} from "react-router-dom";
import {nanoid} from "nanoid"; 

// VizTheory component definition
export default function VizTheory( { notes, withRespectTo, clearOnClick } ) {

    // Using useLocation hook to get the current pathname
    const { pathname } = useLocation();

    // Filtering notes array to find a note whose pathname and withRespectTo match the current ones
    const vizTheoryNotes = notes && withRespectTo && notes.filter( 
        note => note.pathname === pathname && note.withRespectTo === withRespectTo 
    )[0];

    // Mapping keyTakeAways array to create a list of takeaways
    const takeAways = vizTheoryNotes && withRespectTo && vizTheoryNotes.keyTakeAways.map(takeAway => 
        <li key={nanoid()}> {takeAway} </li> // Unique key for each takeaway
    )

    // Rendering the VizTheory component
    return(
        <div className="notes-container">
            <div className="notes-header-container">
                <h3>
                {
                    // If vizTheoryNotes and withRespectTo exist, show the note title
                    vizTheoryNotes && withRespectTo
                    ?
                    `Viz Theory notes with respect to --  ${withRespectTo}`
                    :
                    // Otherwise, show a default title
                    "Visualization (Viz) Theory "
                }
                </h3>
                {
                    // If vizTheoryNotes and withRespectTo exist, show a button to clear notes
                    vizTheoryNotes 
                    && 
                    withRespectTo 
                    && 
                    <button onClick={() => clearOnClick()}>clear notes</button>
                }
            </div>
        
            {
                // If vizTheoryNotes and withRespectTo exist, show the note details
                vizTheoryNotes && withRespectTo
                ?
                <div className="notes-content-container">
                    <div className="notes-content-left-column-container">
                        {
                            // If img exists, show the image
                            vizTheoryNotes.img
                            ?
                            <img 
                                style={
                                    {
                                        width: takeAways.length >= 1 ? "90%":"160%"
                                    }
                                } 
                                src={ vizTheoryNotes.img  }
                                loading="lazy"
                            />
                            :
                            // Otherwise, show the component
                            vizTheoryNotes.component
                        }
                        {/* Note description */}
                        <pre>{vizTheoryNotes.description}</pre> 
                    </div>
                    <div className="notes-content-right-column-container">
                        <ul>
                            {/* List of takeaways */}
                            {takeAways} 
                        </ul>
                    </div>
                </div>
                :
                // If vizTheoryNotes or withRespectTo do not exist, show a message to select a note topic
                <div className="selection-container">
                    {/* Wikipedia page for Data and Information Visualization */}
                    <iframe src="https://en.wikipedia.org/wiki/Data_and_information_visualization"/> 
                    <p>Select one of the <span>note topics</span> below for a deeper dive:</p>
                </div>
            }

        </div>

    );
}
