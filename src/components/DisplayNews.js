import React from 'react';
import LazyLoad from 'react-lazyload';
import "../styles/displayNews.css"

export default function DisplayNews({searchId, newsBlocks}) {
  if (typeof(newsBlocks) !== 'undefined') {
    console.log(newsBlocks);
    return (
      <>
        <div className='news-cards-container'>
          <div className='search-id'>{searchId}</div>
          <ul>
            {newsBlocks.pageOne.fetchResult.data.map((article, index) => {
              return (
                <li key={article.url}>
                  <hr className="solid"></hr>
                  <div className='article-container'>
                    <LazyLoad height={170} once>
                      <img className='article-image' src={article.image_url} alt={article.title} />
                    </LazyLoad>
                    <div className='article-info'>
                      <div className='article-source'>{article.source}</div>
                      <div className='article-title'>{article.title}</div>
                      <div className='article-description'>{article.description}</div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}



