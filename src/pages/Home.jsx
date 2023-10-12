export default function Home( { videos, withRespectTo } ) {

    const courseVideo = videos.filter( 
        video => video.title === withRespectTo
    )[0]

    return(
        withRespectTo && courseVideo
        ?
        <div className="home-container">
            <h3>{courseVideo.title}</h3>
            <div className="home-content-container">
                <div className="home-content-iframe-container">
                    <iframe 
                        src={courseVideo.url}
                        title={courseVideo.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                    >
                    </iframe>
                </div>
                <div className="home-content-iframe-description-container">
                    {courseVideo.description}
                </div>
            </div>
        </div>
        :
        <div className="home-container">
            <div style={{marginTop: "2em", justifyContent:"center"}} className="home-content-container">
                <p>Select from one of the courses listed below:</p>
            </div>
        </div>
    );
}