import {useLocation} from "react-router-dom";
import {nanoid} from "nanoid"; 


export default function FetchData( { notes, withRespectTo, clearOnClick } ) {

    // Getting the current pathname
    const { pathname } = useLocation();

    // Filtering notes array to find a note whose pathname and withRespectTo match the current ones
    const fetchDataNotes = notes && withRespectTo && notes.filter( 
        note => note.pathname === pathname && note.withRespectTo === withRespectTo 
    )[0];

    // Mapping keyTakeAways array to create a list of takeaways
    const takeAways = fetchDataNotes && withRespectTo && fetchDataNotes.keyTakeAways.map(takeAway => 
        <li key={nanoid()}> {takeAway} </li> // Unique key for each takeaway
    )

    // Rendering the FetchData component
    return(
        <div className="notes-container">
            <div className="notes-header-container">
                <h3>
                {
                    // If fetchDataNotes and withRespectTo exist, show the note title
                    fetchDataNotes && withRespectTo
                    ?
                    `Fetch Data notes with respect to --  ${withRespectTo}`
                    :
                    // Otherwise, show a default title
                    "D3 Data fetch Methods"
                }
                </h3>
                {
                    // If fetchDataNotes and withRespectTo exist, show a button to clear notes
                    fetchDataNotes 
                    && 
                    withRespectTo 
                    && 
                    <button onClick={() => clearOnClick()}>clear notes</button>
                }
            </div>
        
            {
                // If fetchDataNotes and withRespectTo exist, show the note details
                fetchDataNotes && withRespectTo
                ?
                <div className="notes-content-container">
                    <div className="notes-content-left-column-container">
                        {
                            // If img exists, show the image
                            fetchDataNotes.img
                            ?
                            <img 
                                src={fetchDataNotes.img}
                                style={
                                    // Specific style for "importing csv"
                                    withRespectTo === "importing csv" 
                                        ? {width:"345px"}
                                        : null
                                }    
                            />
                            :
                            // Otherwise, show the component
                            fetchDataNotes.component
                        }
                        {/* Note description */}
                        <pre>{fetchDataNotes.description}</pre> 
                    </div>
                    <div className="notes-content-right-column-container">
                        <ul>
                            {/* List of takeaways */}
                            {takeAways} 
                        </ul>
                    </div>
                </div>
                :
                // If fetchDataNotes or withRespectTo do not exist, show a message to select a note topic
                <div className="selection-container">
                    {/* D3 fetch methods documentation */}
                    <iframe src="https://devdocs.io/d3~7/d3-fetch"/> 
                    <p>Select one of the <span>note topics</span> below for a deeper dive:</p>
                </div>
            }

        </div>

    );
}
