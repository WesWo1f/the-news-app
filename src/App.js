import React from 'react'
import NewsNavbar from './components/NewsNavbar';
import NewsFetch from './components/NewsFetch';
import SetNews from './components/SetNews';
import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";

function App() {
  const [searchId, setSearchId] = useState('trending');
  const [newsData, setNewsData] = useState();




  return (
    <>
    <NewsFetch searchId={searchId} setNewsData={setNewsData}  />
    <NewsNavbar setSearchId={setSearchId} />
    <Routes >
    <Route/>
    <Route path="/newspage/:id" element={<SetNews  setSearchId={setSearchId}/> } />
    </Routes>
    </>
  );
}

export default App;
