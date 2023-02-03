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


function App() {
  const [searchId, setSearchId] = useState('trending');
  const [newsData, setNewsData] = useState();
  const [crawlData, setCrawlData] = useState();





  return (
    <>
    <DataChecker newsData={newsData}/>
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
