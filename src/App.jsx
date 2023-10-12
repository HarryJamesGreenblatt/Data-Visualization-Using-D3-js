import './App.css'

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import SVG from './pages/SVG.jsx';
import Examples from './pages/Examples.jsx';
import ExampleDetails from './pages/ExampleDetails.jsx';
import { noteData } from './data/noteData.jsx';
import { videoData } from './data/videoData.jsx';
import { exampleData } from './data/exampleData.jsx';
import { useEffect } from 'react';

function App() {

  const [ pathname, setPathname ] = React.useState(null);

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
      noteData.filter( note => note.withRespectTo === pathname )[0].pathname
    );
  }


  function handleClickHome( selection ){
    setWithRespectTo( selection );
    setPathname('/');
  }


  function handleClickExamples( selection ) {
    setWithRespectTo( selection );
    setPathname('/examples');
  }
  

  function clearOnClick( ){
    setWithRespectTo( null );
    setPathname( null );
  }


  return (

    <BrowserRouter >
      <Routes basename="/Data-Visualization-Using-D3-js/">
        <Route path="/" element={
              <Layout 
                notes={notes}
                videos={videos}s
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
