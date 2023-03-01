import React from 'react'
import NewsNavbar from './components/NewsNavbar';
import NewsFetch from './components/NewsFetch';
import SetNews from './components/SetNews';
import DisplayNews from './components/DisplayNews';
import NewsCrawl from './components/NewsCrawl'
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './styles/styling.css'


function App() {
  const [searchId, setSearchId] = useState();
  const [crawlData, setCrawlData] = useState();
  const [newsBlocks, setNewsBlocks] = useState();
  

  return (
    <>
    <NewsFetch searchId={searchId} crawlData={crawlData} setCrawlData={setCrawlData} setNewsBlocks={setNewsBlocks} />
    <NewsNavbar setSearchId={setSearchId} />
    <NewsCrawl crawlData={crawlData}/>
    <Routes >
    <Route path="/" element={<SetNews  setSearchId={setSearchId}/> } />
    <Route path="/newspage/:id" element={<SetNews  setSearchId={setSearchId}/> } />
    </Routes>
    <DisplayNews  searchId={searchId} newsBlocks={newsBlocks} />
    </>
  );
}

export default App;
