import React, { useEffect } from 'react'
import '../styles/newsCrawl.css'
import { useState } from 'react'


export default function HeadLineCrawl({crawlData}) {
   
    const [article, setArticle] = useState([]);

    useEffect(()=>{
        if(typeof(crawlData) !== 'undefined'){
            createCrawlList()
        }
        function createCrawlList() {
          let myList = [];
        
          if (crawlData && crawlData.fetchResult && crawlData.fetchResult.data) {
            for (let index = 0; index < crawlData.fetchResult.data.length; index++) {
              const dataItem = crawlData.fetchResult.data[index];
        
              if (dataItem && dataItem.title && dataItem.url && dataItem.source) {
                const obj = {
                  headLine: dataItem.title,
                  link: dataItem.url,
                  source: dataItem.source,
                };
                myList.push(obj);
              }
            }
          }
          setArticle(myList);
        }
    },[crawlData])

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