import {useLocation} from "react-router-dom";
import {nanoid} from "nanoid"; 

export default function FetchData( { notes, withRespectTo, clearOnClick } ) {

    const { pathname } = useLocation();


    const fetchDataNotes = notes && withRespectTo && notes.filter( 
        note => note.pathname === pathname && note.withRespectTo === withRespectTo 
    )[0];


    const takeAways = fetchDataNotes && withRespectTo && fetchDataNotes.keyTakeAways.map(takeAway => 
        <li key={nanoid()}> {takeAway} </li>
    )


    return(

        <div className="notes-container">
            <div className="notes-header-container">
                <h3>
                {
                    fetchDataNotes && withRespectTo
                    ?
                    `Fetch Data notes with respect to --  ${withRespectTo}`
                    :
                    "D3 Data fetch Methods"
                }
                </h3>
                {
                    fetchDataNotes 
                    && 
                    withRespectTo 
                    && 
                    <button onClick={() => clearOnClick()}>clear notes</button>
                }
            </div>
        
            {
                fetchDataNotes && withRespectTo
                ?
                <div className="notes-content-container">
                    <div className="notes-content-left-column-container">
                        {
                            fetchDataNotes.img
                            ?
                            <img 
                                src={fetchDataNotes.img}
                                style={
                                    withRespectTo === "importing csv" 
                                        ? {width:"345px"}
                                        : null
                                }    
                            />
                            :
                            fetchDataNotes.component
                        }
                        <pre>{fetchDataNotes.description}</pre>
                    </div>
                    <div className="notes-content-right-column-container">
                        <ul>
                            {takeAways}
                        </ul>
                    </div>
                </div>
                :
                <div className="selection-container">
                    <iframe src="https://devdocs.io/d3~7/d3-fetch"/>
                    <p>Select one of the <span>note topics</span> below for a deeper dive:</p>
                </div>
            }

        </div>

    );
}