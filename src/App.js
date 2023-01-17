import React from 'react'
import NewsNavbar from './components/NewsNavbar';
import { useRef } from 'react'
import { useEffect, useState } from 'react';

//https://nameless-cliffs-00097.herokuapp.com/
//http://localhost:8000/category

function App() {

  const [newsData, setNewsData] = useState()
  useEffect(()=>{
    console.log(newsData)
  },[newsData])


  const wolf = 'wolf'
  useEffect(()=>{
    async function requestData(id) {
        console.log("Asked server for id: "+id)
      try {
        const response = await fetch('https://nameless-cliffs-00097.herokuapp.com/category', {
          method: 'POST', // or 'PUT'
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({category: "wolf"})
      })
      // .then((response) => response.json())
      // .then((data) => console.log(data));
      setNewsData(await response.json())
      console.log('made call to server')
      } catch (error) {
        console.log("it ran but server is not on")
        console.log(error)
      }
    }
  requestData(wolf)
  },[])
  useEffect(()=>{
    console.log(newsData)
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