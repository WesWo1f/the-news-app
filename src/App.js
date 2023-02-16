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
  const [crawlData, setCrawlData] = useState();
  const [articleBlock, setArticleBlock] = useState();
  // const count = useRef(0);
  // useEffect(() => {
  //   count.current = count.current + 1;
  // });

  return (
    <>
    {/* <div>{count.current}</div> */}
    <NewsFetch searchId={searchId} crawlData={crawlData} setCrawlData={setCrawlData}  setArticleBlock={setArticleBlock} />
    <NewsNavbar setSearchId={setSearchId} />
    <NewsCrawl crawlData={crawlData}/>
    <Routes >
    <Route path="/" element={<SetNews  setSearchId={setSearchId}/> } />
    <Route path="/newspage/:id" element={<SetNews  setSearchId={setSearchId}/> } />
    </Routes>
    <DisplayNews  searchId={searchId} articleBlock={articleBlock} />
    </>
  );
}

export default App;
