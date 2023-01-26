import { useEffect } from 'react'

export default function NewsFetch({ searchId, setNewsData}) {

   

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
                  body: JSON.stringify({category:id})
              })
              setNewsData(await response.json())
              console.log('made call to server')
              } catch (error) {
                console.log("it ran but server is not on")
                console.log(error)
              }
            }
        requestData(searchId)
    }, [searchId])


  return (null);
}

