import { useEffect } from 'react'

export default function NewsFetch({searchId, crawlData, setCrawlData, setNewsBlocks}) {
  
  async function fetchData(url, id = null, page, searchBar) {
    let data = {}
    try {
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
  
      // Only include the id parameter if it's not null
      const body = id ? JSON.stringify({category: id, page: page, searchBar: searchBar}) : JSON.stringify({page: page, searchBar: searchBar})
  
      const response = await fetch(url, {
        method: 'POST', // or 'PUT'
        headers: headers,
        body: body
      })
      data = await response.json()
    } catch (error) {
      //console.log(error)
    }
    return data
  }

  useEffect(()=>{
    console.log("this is searchId"+searchId)
    async function navbarCategorySearch(){
      if (['general', 'science', 'tech', 'sports','travel','entertainment','politics','business'].includes(searchId)) {
        //let pageOne = await fetchData("https://nameless-cliffs-00097.herokuapp.com/newsendpoint", searchId, 1)
        let pageOne = await fetchData("http://localhost:8000/newsendpoint", searchId, 1)
        const newData = {pageOne} 
        setNewsBlocks(newData)
      }
      else{
        //let pageOne = await fetchData("https://nameless-cliffs-00097.herokuapp.com/newsendpoint", null, 1, searchId)
        let pageOne = await fetchData("http://localhost:8000/newsendpoint", null, 1, searchId)
        const newData = {pageOne} 
        setNewsBlocks(newData)
      }
    }
    if(typeof(searchId) !== 'undefined'){
      navbarCategorySearch()
    }
  },[searchId])

  useEffect(() => {
    if(typeof(crawlData) === 'undefined'){
      callingCrawl()
    }
    async function callingCrawl(){
      let result = await fetchData('https://nameless-cliffs-00097.herokuapp.com/crawldata', searchId, 1)
      setCrawlData(result)
    }
  },[])

return (null);
}

