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
        withRespectTo
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

    // const selectedExample = examples.filter( 
    //     example => example.title
    // )[0]
    // console.log(selectedExample)

    // return(
    //     withRespectTo
    //     ?
    //     <div className="example-container">
    //         <h2>{selectedExample.title}</h2>
    //         <div className="example-content-container">
    //             {selectedExample.component}
    //             <div className="example-content-component-description">
    //                 {selectedExample.description}
    //             </div>
    //         </div>
    //     </div>
    //     :
    //     <div className="example-container">
    //         <div className="example-content-container">
    //             <h2>Select an example below:</h2>
    //         </div>
    //     </div>
    // );

}