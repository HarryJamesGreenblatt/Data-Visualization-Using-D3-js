import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React from "react";


export default function Layout(
    {
        notes, 
        videos,
        examples, 
        handleClickNotes, 
        handleClickHome,
        handleClickExamples,
    }
)
{


    const { pathname } = useLocation();




    const respectiveToNotes = notes.filter(
        note => note.pathname === pathname
    ).map( 
        note => note.withRespectTo 
    );



    const respectiveToVideos = videos.map( 
        video => video.title 
    );



    const respectiveToExamples = examples.map( 
        example => example.source 
    ).filter( (element, index, self) => 
        index === self.indexOf(element)
    );
    



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

            <Header />

            <div className='content-container'>
                <main className="main">
                    <Outlet />
                </main>
            </div>
            
            <Footer 
                respectiveTo={
                    respectiveToSelection()
                }
                onClick={
                    handleClickSelection()
                }
            />

        </div>
    )
}



