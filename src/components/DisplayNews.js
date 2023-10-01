import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "../styles/displayNews.css"

export default function DisplayNews({searchId, newsBlocks}) {
  const [newslist, setNewsList] = useState();

  useEffect(() => {
    if(newsBlocks !== undefined && newsBlocks !== null){
      const defaultImages = ['default','logo-bg','movers']
      let newsDataArray = newsBlocks.pageOne.fetchResult.data
      
      newsDataArray = newsDataArray.filter(word => !defaultImages.includes(word));
      setNewsList(newsDataArray)
    }
  }, [newsBlocks])

  if(typeof(newslist) !== 'undefined'){
    return (
      <>
        <div className='news-cards-container'>
          <div className='search-id'>{searchId}</div> 
          <ul>
            {newslist.map((article, index) => {
              const {source, image_url, url, title, description} = article
              return (
                <li key={url}>
                  <hr className="solid"></hr>
                  <a href={url} className='article-link' target="_blank" rel="noopener noreferrer">
                  <div className='article-container'>
                    <img  className='article-image' src={image_url} />
                      <div className='article-info'>
                      <div className='article-source'>{source}</div>
                      <div className='article-title'>{title}</div>
                      <div className='article-description'>{description}</div>
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



