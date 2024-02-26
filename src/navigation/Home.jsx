import {nanoid} from "nanoid"; 
import { useLocation, Link } from "react-router-dom";


export default function Home( { videos, withRespectTo } ) {

    // Filtering videos array to find a video whose title matches withRespectTo
    const courseVideo = videos.filter( 
        video => video.title === withRespectTo
    )[0]

    // Rendering the Home component
    return(

        // Checking if withRespectTo and courseVideo exist
        withRespectTo && courseVideo
        ?
        // If they exist, render the video details
        <div className="home-container">
            <h3>{courseVideo.title}</h3>
            <div className="home-content-container">
                <div className="home-content-iframe-container">
                    <iframe 
                        src={courseVideo.url} // Video URL
                        title={courseVideo.title} // Video title
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen // Allow fullscreen
                        id={withRespectTo === "React + D3.js" ? "wattenberg-frame": ""} // Specific id for "React + D3.js"
                    >
                    </iframe>
                </div>
                <div className="home-content-iframe-description-container">
                    {/* Video description */}
                    {courseVideo.description} 
                </div>
            </div>
        </div>
        :
        // If they don't exist, render a message to select a course
        <div className="home-container">
            <div style={{marginTop: "2em", justifyContent:"center"}} className="home-content-container">
                <p>Select from one of the courses listed below:</p>
            </div>
        </div>
    );
}