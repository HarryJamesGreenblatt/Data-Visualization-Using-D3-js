import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React from "react";


export default function Layout(
    {
        notes, // an array of note objects
        videos, // an array of video objects
        examples, // an array of example objects
        handleClickNotes, // a function to handle the click event on notes
        handleClickHome, // a function to handle the click event on home
        handleClickExamples, // a function to handle the click event on examples
    }
)
{


    const { pathname } = useLocation(); // get the current pathname from the location object


    // filter the notes array by the current pathname and map it to an array of respectiveTo values
    const respectiveToNotes = notes.filter(
        note => note.pathname === pathname
    ).map( 
        note => note.withRespectTo 
    );



    // map the videos array to an array of titles
    const respectiveToVideos = videos.map( 
        video => video.title 
    );



    // map the examples array to an array of sources and remove any duplicates
    const respectiveToExamples = examples.map( 
        example => example.source 
    ).filter( (element, index, self) => 
        index === self.indexOf(element)
    );
    



    // a function that returns the respectiveTo array based on the current pathname
    const respectiveToSelection = () => {
        
        switch (pathname) {
            case '/':
                return respectiveToVideos;
            case '/examples':
                return respectiveToExamples;
            default:
                return respectiveToNotes;
        }
        
    }


    // a function that returns the handleClick function based on the current pathname
    const handleClickSelection = () => {
        
        switch (pathname) {
            case '/':
                return handleClickHome;
            case '/examples':
                return handleClickExamples;
            default:
                return handleClickNotes;
        }
        
    }




    return(
        <div className='page-container'>

            {/* render the Header component */}
            <Header /> 

            <div className='content-container'>
                <main className="main">
                    
                    {/* render the child routes */}
                    <Outlet /> 
                
                </main>
            </div>
            
            <Footer 
                respectiveTo={
                    // pass the respectiveTo array as a prop
                    respectiveToSelection() 
                }
                onClick={
                    // pass the handleClick function as a prop
                    handleClickSelection() 
                }
            />

        </div>
    )
}