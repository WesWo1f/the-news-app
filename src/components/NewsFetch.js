import { useEffect } from 'react'

export default function NewsFetch({ searchId, setNewsData}) {

    // useEffect(()=>{
    //   console.log("this is the top search id "+searchId)
    //         async function requestData(id) {
    //             console.log("Asked server for id: "+id)
    //           try {
    //             const response = await fetch('https://nameless-cliffs-00097.herokuapp.com/category', {
    //               method: 'POST', // or 'PUT'
    //               headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //               },
    //               body: JSON.stringify({category:id})
    //           })
    //           setNewsData(await response.json())
    //           console.log('made call to server')
    //           } catch (error) {
    //             console.log("it ran but server is not on")
    //             console.log(error)
    //           }
    //         }
    //         console.log("this is the middle search id "+searchId)
    //     requestData(searchId)
    //     console.log("this is the bottom search id "+searchId)
    // }, [searchId])

    useEffect(()=>{
      console.log("this is the top search id "+searchId)
            async function requestData(id) {
                console.log("Asked server for id: "+id)
              try {
                const response = await fetch('https://nameless-cliffs-00097.herokuapp.com/category', {
                  method: 'POST', // or 'PUT'
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({category:id})
              })
              setNewsData(await response.json())
              console.log('made call to server')
              } catch (error) {
                console.log("it ran but server is not on")
                console.log(error)
              }
            }
            console.log("this is the middle search id "+searchId)
        //requestData(searchId)
        console.log("this is the bottom search id "+searchId)
    }, [searchId])


  return (null);
}

    //const data = { username: 'example' };
 // useEffect(()=>{
  
  //   fetch('https://nameless-cliffs-00097.herokuapp.com/category', {
  //     method: 'POST', // or 'PUT'
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('Success:', data);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // })