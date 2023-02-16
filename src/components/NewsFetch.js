import { useEffect } from 'react'

export default function NewsFetch({searchId, crawlData, setCrawlData,setArticleBlock}) {

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

  useEffect(() => {
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
        async function getSimiarNews() {
          const similarNewsArticles = {};
          let size = Object.keys(similarNewsArticles).length;
          for (let index = 0; index < 10; index++) {
            if(size <= 2){
              //console.log(size)
              try {
                let similarNewsData = await fetchData(
                  "https://nameless-cliffs-00097.herokuapp.com/similarnewsdata",
                  searchId,
                  1,
                  combinedDataPages.fetchResult.data[index].uuid
                );
                if(similarNewsData.fetchResult.length !== 3){
                  combinedDataPages.fetchResult.data.splice(index, 1)
                }
                else{
                  similarNewsArticles[index] = similarNewsData;
                  // Add similar news data to corresponding item in combinedDataPages
                  combinedDataPages.fetchResult.data[index].similarNews = similarNewsData;
                  size = Object.keys(similarNewsArticles).length;
                  //console.log(similarNewsArticles)
                }
              } catch (error) {
              }
            }
          }
          // the following code creates article blocks
          const blockArticles = {};
          let num = 0
           for (let index = 0; index < combinedDataPages.fetchResult.data.length; index++ ) {
             if(Object.keys(blockArticles).length <= 2){
              console.log(Object.keys(blockArticles).length)
              try {
                console.log(combinedDataPages.fetchResult.data[index].similarNews)
                 if(typeof(combinedDataPages.fetchResult.data[index].similarNews) !== 'undefined') {
                   blockArticles[num] = combinedDataPages.fetchResult.data[index]
                   num += 1 
                 }
               } catch (error) {
               }
             }
           }
           setArticleBlock(blockArticles)
        }
        getSimiarNews()
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

