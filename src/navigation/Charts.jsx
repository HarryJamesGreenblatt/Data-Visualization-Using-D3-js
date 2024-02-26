// Importing required modules
import {useLocation} from "react-router-dom";
import {nanoid} from "nanoid"; 

// Charts component definition
export default function Charts( { notes, withRespectTo, clearOnClick } ) {

    // Getting the current pathname
    const { pathname } = useLocation();

    // Filtering notes array to find a note whose pathname and withRespectTo match the current ones
    const marginsNotes = notes && withRespectTo && notes.filter( 
        note => note.pathname === pathname && note.withRespectTo === withRespectTo 
    )[0];

    // Mapping keyTakeAways array to create a list of takeaways
    const takeAways = marginsNotes && withRespectTo && marginsNotes.keyTakeAways.map(takeAway => 
        <li key={nanoid()}> {takeAway} </li> // Unique key for each takeaway
    )

    // Rendering the Charts component
    return(
        
        // render the list of note details
        <div className="notes-container">
            <div className="notes-header-container">
                <h3>
                {
                    // If marginsNotes and withRespectTo exist, show the note title
                    marginsNotes && withRespectTo
                    ?
                    `Charts notes with respect to --  ${withRespectTo}`
                    :
                    // Otherwise, show a default title
                    "Making Charts in D3"
                }
                </h3>
                {
                    // If marginsNotes and withRespectTo exist, show a button to clear notes
                    marginsNotes 
                    && 
                    withRespectTo 
                    && 
                    <button onClick={() => clearOnClick()}>clear notes</button>
                }
            </div>
        
            {
                // If marginsNotes and withRespectTo exist, show the note details
                marginsNotes && withRespectTo
                ?
                <div className="notes-content-container">
                    <div className="notes-content-left-column-container">
                        {
                            // If img exists, show the image
                            marginsNotes.img
                            ?
                            <img src={marginsNotes.img}/>
                            :
                            // Otherwise, show the component
                            marginsNotes.component
                        }
                        {/* Note description */}
                        <pre>{marginsNotes.description}</pre> 
                    </div>
                    <div className="notes-content-right-column-container">
                        <ul>
                            {/* List of takeaways */}
                            {takeAways} 
                        </ul>
                    </div>
                </div>
                :
                // If marginsNotes or withRespectTo do not exist, show a message to select a note topic
                <div className="selection-container">
                    {/* D3 getting started guide */}
                    <iframe src="https://d3js.org/getting-started"/> 
                    <p>Select one of the <span>note topics</span> below for a deeper dive:</p>
                </div>
            }

        </div>

    );
}
