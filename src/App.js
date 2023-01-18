import React from 'react'
import NewsNavbar from './components/NewsNavbar';
import { useRef } from 'react'
import { useEffect, useState } from 'react';

//https://nameless-cliffs-00097.herokuapp.com/
//http://localhost:8000/category

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



// export default function NewsFetch({ searchId, setNewsData}) {


//     useEffect(()=>{
//             async function requestData(id) {
//                 console.log("Asked server for id: "+id)
//               try {
//                 const response = await fetch('http://localhost:8000/category', {
//                   method: 'POST', // or 'PUT'
//                   headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                   },
//                   body: JSON.stringify({category:id})
//               })
//               setNewsData(await response.json())
//               console.log('made call to server')
//               } catch (error) {
//                 console.log("it ran but server is not on")
//                 console.log(error)
//               }
//             }
//         requestData(searchId)
//     },[searchId])

//     return (null);
// }