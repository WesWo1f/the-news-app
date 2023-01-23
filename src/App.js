import React from 'react'
import NewsNavbar from './components/NewsNavbar';
import { useRef } from 'react'
import { useEffect, useState } from 'react';


function App() {

  const data = { username: 'example' };

useEffect(()=>{

  fetch('https://nameless-cliffs-00097.herokuapp.com/category', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
})





  return (
    <>
    <NewsNavbar />
    </>
  
  );
}

export default App;
