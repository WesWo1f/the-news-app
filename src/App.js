import React from 'react'
import NewsNavbar from './components/NewsNavbar';
import NewsFetch from './components/NewsFetch';
import SetNews from './components/SetNews';
import DisplayNews from './components/DisplayNews';
import DataChecker from './components/DataChecker'
import NewsCrawl from './components/NewsCrawl'
import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './styles/styling.css'

import { useRef } from 'react';

function App() {
  const [searchId, setSearchId] = useState('trending');
  const [newsData, setNewsData] = useState();
  const [crawlData, setCrawlData] = useState();




  useEffect(()=>{
    console.log(newsData)
    if(typeof(newsData) !== 'undefined'){
      //console.log("this is newData: "+newsData.fetchResult.data[0].title)
      //newsData.fetchResult.data[0].url
      //newsData.fetchResult.data[0].uuid
      //newsData.fetchResult.data[0].language: "en"
      //console.log("this is source:"+newsData.fetchResult.data[0].source)
      //newsData.fetchResult.data[0].source
      //newsData.fetchResult.data[0].keywords
      //newsData.fetchResult.data[0].categories: (2) ['general', 'politics']
      //newsData.fetchResult.data[0].image_url
      //newsData.fetchResult.data[0].description
    }
  },[newsData])




  return (
    <>
    <DataChecker newsData={newsData}/>
    {/* <DisplayNews props={ carInfo} /> */}
    <NewsFetch searchId={searchId} setNewsData={setNewsData} crawlData={crawlData} setCrawlData={setCrawlData} />
    <NewsNavbar setSearchId={setSearchId} />
    
    <NewsCrawl crawlData={crawlData}/>
    <Routes >
    <Route path="/" element={<SetNews  setSearchId={setSearchId}/> } />
    <Route path="/newspage/:id" element={<SetNews  setSearchId={setSearchId}/> } />
    </Routes>
    <DisplayNews newsData={newsData} searchId={searchId} />
    </>
  );
}

export default App;
