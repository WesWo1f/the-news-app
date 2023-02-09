import { useEffect } from 'react'

export default function NewsFetch({searchId, setRawData, crawlData, setCrawlData}) {

  async function fetchData(url, id, page) {
    let data = {}
    try {
      const response = await fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({category: id, page: page})
    })
    data = await response.json()
    } catch (error) {
      //console.log(error)
    }
    return data
  }

  useEffect(()=>{
    async function combineData(url){
      const pageOneData = await fetchData(url, searchId, 1)
      const pageTwoData = await fetchData(url, searchId, 2)
      //this combines page one and page two
      const multipageData = pageTwoData.fetchResult.data.concat(pageOneData.fetchResult.data)
      //the takes the pages(array) from both fetches and combines them into one object
      pageOneData.fetchResult.data = multipageData
      //this is just renaming that object to make more sense
      const combinedDataPages = pageOneData
      //sets raw data to now be combinedDataPages
      if(url ==='https://nameless-cliffs-00097.herokuapp.com/category'){
        setRawData(combinedDataPages)
      }
      else if(url ==='https://nameless-cliffs-00097.herokuapp.com/crawldata'){
        setCrawlData(combinedDataPages)
      }
    }
    combineData('https://nameless-cliffs-00097.herokuapp.com/category')
    if(typeof(crawlData) === 'undefined'){
      combineData('https://nameless-cliffs-00097.herokuapp.com/crawldata')
    }
  },[searchId])


  return (null);
}

