import React, { useEffect } from 'react'
import '../styles/newsCrawl.css'
import { useState } from 'react'


export default function HeadLineCrawl({crawlData}) {

    const articleArray = []
    const [article, setArticle] = useState([]);

    useEffect(()=>{
        if(typeof(crawlData) !== 'undefined'){
          //console.log(crawlData)
            checkingNull()
        }
    },[crawlData])

    function checkingNull(){
        let articleCount = 0
          for (let index = 0; index < 40; index++) {
            try {
              if (articleCount >= 30){return}
              if( typeof(crawlData.fetchResult.data[index].title) !== 'undefined'  && 
              typeof(crawlData.fetchResult.data[index].url) !== 'undefined'){
              articleCount +=1
            settingArticles(index,articleCount)
              }
            } catch (error) {
              //console.log("checkingNull error")
            }
          }
      } 

      function settingArticles(index,articleCount){
       const obj = {
         id: [index],
         headLine: crawlData.fetchResult.data[index].title,
         link: crawlData.fetchResult.data[index].url,
         source: crawlData.fetchResult.data[index].source
       }
        articleArray[articleCount] = obj
        setArticle(articleArray)
      }
      
    if(article.length >= 6){
    const theTickerText = article.map((news, index) => (
      <a key={index} href={news.link ? news.link : '#'} className='text-crawl' target="_blank" rel="noopener noreferrer">
        {news.headLine}{" "}{news.source}{index === article.length - 1 ? '' : ', '}
      </a>
    ));

return (
  <>
    <div className="hwrap">
      <div className="hmove">
        <div className="hitem">{theTickerText}</div>
      </div>
    </div>
  </>
)

}}