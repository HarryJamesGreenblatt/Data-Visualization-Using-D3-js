import './App.css'

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './composition/Layout.jsx';
import Home from './navigation/Home.jsx';
import SVG from './navigation/SVG.jsx';
import VizThoery from './navigation/VizTheory';
import FetchData from './navigation/FetchData.jsx';
import Charts  from './navigation/Charts.jsx';
import Examples from './navigation/Examples.jsx';
import ExampleDetails from './navigation/ExampleDetails.jsx';
import { noteData } from './data/noteData.jsx';
import { videoData } from './data/videoData.jsx';
import { exampleData } from './data/exampleData.jsx';


function App() {

  const [ pathname, setPathname ] = React.useState('/');  
  const [ notes , setNotes ] = React.useState( noteData ); 
  const [ videos , setVideos ] = React.useState( videoData ); 
  const [ examples , setExamples ] = React.useState( exampleData ); 
  const [ withRespectTo, setWithRespectTo ] = React.useState( null );



  React.useEffect(
    () => {
      setNotes( noteData );
      setVideos( videoData )
      setExamples( exampleData )
    }, 
    [noteData, videoData, exampleData]
  );

      
  function handleClickNotes( selection ){
    setWithRespectTo( selection );
    setPathname(
      noteData.find( note => note.pathname === pathname )?.pathname
    );
  }


  function handleClickHome( selection ){
    setWithRespectTo( selection );
    // setPathname('/');
  }


  function handleClickExamples( selection ) {
    setWithRespectTo( selection );
    setPathname('/examples');
  }
  

  function clearOnClick( ){
    setWithRespectTo( null );
    setPathname( '/' );
  }


  return (

    <BrowserRouter basename="/Data-Visualization-Using-D3-js/">
      <Routes>
        <Route path="/" element={
              <Layout 
                notes={notes}
                videos={videos}
                examples={examples} 
                handleClickNotes={handleClickNotes}
                handleClickHome={handleClickHome}
                handleClickExamples={handleClickExamples}
              />
            }
          >
          <Route index element={
            <Home 
              videos={videos} 
              handleClick={handleClickHome}
              withRespectTo={withRespectTo}
            /> 
            } 
          />
          <Route path="svg" element={
              <SVG 
                notes={notes} 
                withRespectTo={withRespectTo}
                clearOnClick={clearOnClick}  
              />
            } 
          />
          <Route path="viz-theory" element={
              <VizThoery 
                notes={notes} 
                withRespectTo={withRespectTo}
                clearOnClick={clearOnClick}  
              />
            } 
          />
          <Route path="fetch-data" element={
              <FetchData 
                notes={notes} 
                withRespectTo={withRespectTo}
                clearOnClick={clearOnClick}  
              />
            } 
          />
          <Route path="charts" element={
              <Charts 
                notes={notes} 
                withRespectTo={withRespectTo}
                clearOnClick={clearOnClick}  
              />
            } 
          />
          <Route 
            path="examples" 
            element={
              <Examples
                examples={examples}
                withRespectTo={withRespectTo} 
                handleClick={handleClickExamples}
              />
            }
          />
          <Route
            path="examples/:id"
            element={
              <ExampleDetails 
                examples={examples}
                withRespectTo={withRespectTo}
              />
            }
          />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
