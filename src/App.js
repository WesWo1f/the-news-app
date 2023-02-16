import React from 'react'
import NewsNavbar from './components/NewsNavbar';
import NewsFetch from './components/NewsFetch';
import SetNews from './components/SetNews';
import DisplayNews from './components/DisplayNews';
import DataChecker from './components/DataChecker'
import NewsCrawl from './components/NewsCrawl'
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './styles/styling.css'



import { useRef } from 'react';
import { useEffect } from 'react';


function App() {
  const [searchId, setSearchId] = useState('trending');
  const [newsData, setNewsData] = useState();
  const [crawlData, setCrawlData] = useState();
  const [similarNews, setSimilarNews] = useState();
  const [combinedNewsData, setCombinedNewsData] = useState();

  // const count = useRef(0);
  const [rawData, setRawData] = useState();
  // useEffect(() => {
  //   count.current = count.current + 1;
  // });

  return (
    <>
    <DataChecker rawData={rawData} setNewsData={setNewsData} />
    <NewsFetch searchId={searchId} setRawData={setRawData} crawlData={crawlData} setCrawlData={setCrawlData} setSimilarNews={setSimilarNews} setCombinedNewsData={setCombinedNewsData} />

    <NewsNavbar setSearchId={setSearchId} />
    
    <NewsCrawl crawlData={crawlData}/>
    <Routes >
    <Route path="/" element={<SetNews  setSearchId={setSearchId}/> } />
    <Route path="/newspage/:id" element={<SetNews  setSearchId={setSearchId}/> } />
    </Routes>
    <DisplayNews newsData={newsData} searchId={searchId} similarNews={similarNews} combinedNewsData={combinedNewsData} />
    </>
  );
}

export default App;
