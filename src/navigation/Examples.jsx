import { Link } from "react-router-dom";


export default function Examples({examples, withRespectTo}) {

    // Filtering examples array to find examples whose source matches withRespectTo
    const selectedExamples =  examples.filter(
        examples => examples.source === withRespectTo
    );

    // Mapping selectedExamples array to create a list of example elements
    const exampleElements = selectedExamples.map(
        example => 
            <div 
                key={example.id} // Unique key for each example
                className="examples-list-item-container"
            >
                <Link
                    to={`${example.id}`} // Link to the example's id
                >
                    <div className="examples-list-item">
                        {/* Example image */}
                        <img src={example.img} /> 
                        {/* Example title */}
                        <p>{example.title}</p> 
                    </div>
                </Link>
            </div>
    );

    // Rendering the Examples component
    return(
        // Checking if there is at least one example with the given source
        examples.find(d => d.source == withRespectTo)
        ?
        // If there is, render the list of example elements
        <div className="examples-list-container">
            <div className="examples-list-content-container">
                {exampleElements}
            </div>
        </div>
        :
        // If there isn't, render a message to select a course
        <div className="home-container" style={{background:"#fffffe"}}>
            <div style={{marginTop: "2em", justifyContent:"center", background:"mintcream"}} className="home-content-container">
                <p>Select a course below from which to extract examples:</p>
            </div>
        </div>
    );

}