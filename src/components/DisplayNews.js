import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "../styles/displayNews.css"

export default function DisplayNews({searchId, newsBlocks}) {
  const [newslist, setNewsList] = useState();

  useEffect(() => {
    if(newsBlocks !== undefined && newsBlocks !== null){
      //testing below
 


      //testing above

      let myTest = newsBlocks.pageOne.fetchResult.data
      let filterList = []
      for (let index = 0; index < myTest.length; index++) {
        if(!myTest[index].image_url.includes('movers') && !myTest[index].image_url.includes('default') && !myTest[index].image_url.includes('logo-bg')){
          filterList.push(myTest[index])
        }
      }
      console.log(filterList)
      setNewsList(filterList)
    }
  }, [newsBlocks])

  if(typeof(newslist) !== 'undefined'){
    return (
      <>
        <div className='news-cards-container'>
          <div className='search-id'>{searchId}</div> 
          <ul>
            {newslist.map((article, index) => {
              return (
                <li key={article.url}>
                  <hr className="solid"></hr>
                  <a href={article.url} className='article-link' target="_blank" rel="noopener noreferrer">
                  <div className='article-container'>
                    <img  className='article-image' src={article.image_url} />
                      <div className='article-info'>
                      <div className='article-source'>{article.source}</div>
                      <div className='article-title'>{article.title}</div>
                      <div className='article-description'>{article.description}</div>
                    </div>
                  </div>
                  </a>
                </li> 
              );
            })}
          </ul> 
        </div> 
      </>
    )
  }
}



