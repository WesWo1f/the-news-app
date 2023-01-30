import { useEffect } from 'react'

export default function NewsFetch({ searchId, setNewsData, crawlData, setCrawlData}) {

   

    useEffect(() => {
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

  useEffect(() => {

         async function requestCrawlData(id) {
           console.log("Asked server for id: "+id)
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
         console.log('made call to server for crawlData')
         } catch (error) {
           console.log("it ran but server is not on")
           console.log(error)
         }
       }
      //requestCrawlData(searchId)

      if(typeof(crawlData) !== 'undefined'){

        //console.log("this is crawlData: "+crawlData.fetchResult.data[0].title)
        //newsData.fetchResult.data[0].url
        //newsData.fetchResult.data[0].uuid
        //newsData.fetchResult.data[0].language: "en"
        //newsData.fetchResult.data[0].source
        //newsData.fetchResult.data[0].keywords
        //newsData.fetchResult.data[0].categories: (2) ['general', 'politics']
        //newsData.fetchResult.data[0].image_url
        //newsData.fetchResult.data[0].description
      }
      else{
        requestCrawlData(searchId)
        console.log("well this is else")
      }
  },)



  return (null);
}

