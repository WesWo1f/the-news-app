import { useEffect } from 'react'

export default function NewsFetch({searchId, crawlData, setCrawlData, setNewsBlocks}) {

  async function fetchData(url, id, page, newsUuid) {
    let data = {}
    try {
      const response = await fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({category: id, page: page, newsUuid: newsUuid})
    })
    data = await response.json()
    } catch (error) {
      //console.log(error)
    }
    return data
  }

  useEffect(()=>{
    console.log("this is searchId"+searchId)
    async function callingTest(){
      console.log("called test server!")
      let pageOne = await fetchData("https://nameless-cliffs-00097.herokuapp.com/newsendpoint", searchId, 1)
      const newData = {pageOne} 
      setNewsBlocks(newData)
    }
    if(typeof(searchId) !== 'undefined'){
      callingTest()
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

