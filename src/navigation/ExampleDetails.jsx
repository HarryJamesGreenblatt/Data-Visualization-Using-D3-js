import { useParams } from "react-router-dom";


export default function ExampleDetails({examples}){
    
    // Using useParams hook to get the current parameters
    const params = useParams();
    
    // Finding an example in the examples array whose id matches the current id parameter
    const selectedExample = examples.find( example => example.id == params.id );

    // Rendering the ExampleDetails component
    return(
        <div className="example-container">

            {/* Example title */}
            <h2>{selectedExample.title}</h2> 
        
            <div className="example-content-container">
                
                <div className="example-component-container">
                    {
                        // If codeSnippet exists, show the component and the code snippet
                        selectedExample.codeSnippet 
                        ?
                        <>
                            <div className="example-component-left-column">
                                <div className="example-component-rendered">
                                    {/* Rendered component */}
                                    {selectedExample.component} 
                                </div>
                            </div>
                            <div className="example-component-right-column">
                                <div className="example-component-code">
                                    {/* Code snippet */}
                                    <pre>{selectedExample.codeSnippet}</pre> 
                                </div>
                            </div>
                        </> 
                        :
                        // Otherwise, show only the component
                        <div 
                            className="example-component-left-column"
                            style={{
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                overflow: "hidden"
                            }}
                        >
                            <div className="example-component-rendered">
                                {/* Rendered component */}
                                {selectedExample.component} 
                            </div>
                        </div>
                    }
                </div>
        
                <div className="example-description">
                    {/* Example description */}
                    {selectedExample.description} 
                </div>
        
            </div>
        
        </div>
    );
}
