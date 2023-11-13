import {useLocation} from "react-router-dom";
import {nanoid} from "nanoid"; 


export default function Charts( { notes, withRespectTo, clearOnClick } ) {


    const { pathname } = useLocation();


    const marginsNotes = notes && withRespectTo && notes.filter( 
        note => note.pathname === pathname && note.withRespectTo === withRespectTo 
    )[0];


    const takeAways = marginsNotes && withRespectTo && marginsNotes.keyTakeAways.map(takeAway => 
        <li key={nanoid()}> {takeAway} </li>
    )


    return(

        <div className="notes-container">
            <div className="notes-header-container">
                <h3>
                {
                    marginsNotes && withRespectTo
                    ?
                    `Charts notes with respect to --  ${withRespectTo}`
                    :
                    "Making Charts in D3"
                }
                </h3>
                {
                    marginsNotes 
                    && 
                    withRespectTo 
                    && 
                    <button onClick={() => clearOnClick()}>clear notes</button>
                }
            </div>
        
            {
                marginsNotes && withRespectTo
                ?
                <div className="notes-content-container">
                    <div className="notes-content-left-column-container">
                        {
                            marginsNotes.img
                            ?
                            <img src={marginsNotes.img}/>
                            :
                            marginsNotes.component
                        }
                        <pre>{marginsNotes.description}</pre>
                    </div>
                    <div className="notes-content-right-column-container">
                        <ul>
                            {takeAways}
                        </ul>
                    </div>
                </div>
                :
                <div className="selection-container">
                    <iframe src="https://d3js.org/getting-started"/>
                    <p>Select one of the <span>note topics</span> below for a deeper dive:</p>
                </div>
            }

        </div>

    );
}