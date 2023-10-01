import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "../styles/displayNews.css"

export default function DisplayNews({searchId, newsBlocks}) {
  const [newslist, setNewsList] = useState();

  useEffect(() => {
    if(newsBlocks !== undefined && newsBlocks !== null){
      let newsDataArray = newsBlocks.pageOne.fetchResult.data.filter((user) =>
      !(
        user.image_url.includes("default") ||
        user.image_url.includes("logo-bg") ||
        user.image_url.includes("movers") ||
        user.image_url.includes("logo") 
      )
    );
      setNewsList(newsDataArray)
    }
  }, [newsBlocks])

  function deleteBadImageStory(uuidNumber){
    let filteredList = newslist.filter(number => number.uuid !== uuidNumber.toString());
    setNewsList(filteredList)
  }

  if(typeof(newslist) !== 'undefined'){
    return (
      <>
        <div className='news-cards-container'>
          <div className='search-id'>{searchId}</div> 
          <ul>
            {newslist.map((article, index) => {
              
              const {source, image_url, url, title, description, uuid} = article
              return (
                <li key={url}>
                  <hr className="solid"></hr>
                  <a href={url} className='article-link' target="_blank" rel="noopener noreferrer">
                  <div className='article-container'>
                            {image_url && (
                        <img
                          alt=''
                          className='article-image'
                          src={image_url}
                          onError={() => {deleteBadImageStory(uuid)}}
                        />
                      )}
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



