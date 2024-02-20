import { useParams } from "react-router-dom";


export default function ExampleDetails({examples}){
    
    const params = useParams();
    
    const selectedExample = examples.find( example => example.id == params.id );

    return(
        <div className="example-container">

            <h2>{selectedExample.title}</h2>
        
            <div className="example-content-container">
                
                <div className="example-component-container">
                    {
                        selectedExample.codeSnippet 
                        ?
                        <>
                            <div className="example-component-left-column">
                                <div className="example-component-rendered">
                                    {selectedExample.component}
                                </div>
                            </div>
                            <div className="example-component-right-column">
                                <div className="example-component-code">
                                    <pre>{selectedExample.codeSnippet}</pre>
                                </div>
                            </div>
                        </> 
                        :
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
                                {selectedExample.component}
                            </div>
                        </div>
                    }
                </div>
        
                <div className="example-description">
                    {selectedExample.description}
                </div>
        
            </div>
        
        </div>
    );
}