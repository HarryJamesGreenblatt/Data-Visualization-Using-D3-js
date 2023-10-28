import {useLocation} from "react-router-dom";
import {nanoid} from "nanoid"; 

export default function VizTheory( { notes, withRespectTo, clearOnClick } ) {

    const { pathname } = useLocation();

    const vizTheoryNotes = notes && withRespectTo && notes.filter( 
        note => note.pathname === pathname && note.withRespectTo === withRespectTo 
    )[0];


    const takeAways = vizTheoryNotes && withRespectTo && vizTheoryNotes.keyTakeAways.map(takeAway => 
        <li key={nanoid()}> {takeAway} </li>
    )


    return(

        <div className="notes-container">
            <div className="notes-header-container">
                <h3>
                {
                    vizTheoryNotes && withRespectTo
                    ?
                    `Viz Theory notes with respect to --  ${withRespectTo}`
                    :
                    "Visualization (Viz) Theory "
                }
                </h3>
                {
                    vizTheoryNotes 
                    && 
                    withRespectTo 
                    && 
                    <button onClick={() => clearOnClick()}>clear notes</button>
                }
            </div>
        
            {
                vizTheoryNotes && withRespectTo
                ?
                <div className="notes-content-container">
                    <div className="notes-content-left-column-container">
                        {
                            vizTheoryNotes.img
                            ?
                            <img 
                                style={
                                    {
                                        width: takeAways.length >= 1 ? "90%":"160%"
                                    }
                                } 
                                src={vizTheoryNotes.img}
                                loading="lazy"
                            />
                            :
                            vizTheoryNotes.component
                        }
                        <pre>{vizTheoryNotes.description}</pre>
                    </div>
                    <div className="notes-content-right-column-container">
                        <ul>
                            {takeAways}
                        </ul>
                    </div>
                </div>
                :
                <div className="selection-container">
                    <iframe src="https://en.wikipedia.org/wiki/Data_and_information_visualization"/>
                    <p>Select one of the <span>note topics</span> below for a deeper dive:</p>
                </div>
            }

        </div>

    );
}