import { Link } from "react-router-dom";

export default function Examples({examples, withRespectTo}) {

    const selectedExamples =  examples.filter(
        examples => examples.source === withRespectTo
    );


    const exampleElements = selectedExamples.map(
        example => 
            <div 
                key={example.id}
                className="examples-list-item-container"
            >
                <Link
                    to={`${example.id}`}
                >
                    <div className="examples-list-item">
                        <img src={example.img} />
                        <p>{example.title}</p>
                    </div>
                </Link>
            </div>
    );


    return(
        examples.find(d => d.source == withRespectTo)
        ?
        <div className="examples-list-container">
            <div className="examples-list-content-container">
                {exampleElements}
            </div>
        </div>
        :
        <div className="examples-list-container">
            <div className="examples-list-content-container">
                <p>Select a course below from which to extract examples:</p>
            </div>
        </div>
    );

}