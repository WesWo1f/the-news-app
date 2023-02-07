import { useEffect } from 'react'

export default function NewsFetch({ searchId,setRawData, setNewsData, crawlData, setCrawlData}) {

   

    useEffect(() => {
            async function requestData(id) {
              try {
                const response = await fetch('https://nameless-cliffs-00097.herokuapp.com/category', {
                  method: 'POST', // or 'PUT'
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({category:id})
              })
              setRawData(await response.json())
              //setNewsData(await response.json())
              } catch (error) {
                //console.log(error)
              }
            }
        requestData(searchId)
  }, [searchId])

  useEffect(() => {

         async function requestCrawlData(id) {
         try {
           const response = await fetch('https://nameless-cliffs-00097.herokuapp.com/crawldata', {
             method: 'GET', // or 'PUT'
             headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
             },
            //body: JSON.stringify({category:id})
         })
         setCrawlData(await response.json())
         } catch (error) {
           //console.log(error)
         }
       }
      if(typeof(crawlData) !== 'undefined'){

      }
      else{
        requestCrawlData(searchId)
      }
  },)



  return (null);
}

