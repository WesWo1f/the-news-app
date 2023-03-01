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
      //   //combineData('https://nameless-cliffs-00097.herokuapp.com/crawldata')
  //   combineData('http://localhost:8000/crawldata')

    async function callingTest(){
      //('https://nameless-cliffs-00097.herokuapp.com/category')
      let testData = await fetchData("http://localhost:8000/test", searchId, 1)
      console.log(testData)
      setNewsBlocks(testData)
    }
    callingTest()
  },[searchId])


  useEffect(() => {
    if(typeof(crawlData) === 'undefined'){
      callingCrawl()
    }
    async function callingCrawl(){
      let result = await fetchData("http://localhost:8000/crawldata", searchId, 1)
      setCrawlData(result)
    }
  },[])

return (null);
}

