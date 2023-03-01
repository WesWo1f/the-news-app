import React, { useEffect } from 'react'
import "../styles/displayNews.css"
import Card from 'react-bootstrap/Card';
         
export default function DisplayNews({searchId, articleBlock, newsBlocks}) {
  if(typeof(newsBlocks) !== 'undefined'){
    console.log(newsBlocks)
  return (
  <>
    <div className='news-cards-container'>
    <div className='search-id'>{searchId}</div> 
      <ul>
        {newsBlocks.fetchResult.map((article, index) => {
          const dataIndex = Math.min(index);
          return (
            <li key={article.url}>
              <hr className="solid"></hr>
              <div className='container-children'>
                <Card className='article-card' >
                  <a href={article.url} className='article-link' target="_blank" rel="noopener noreferrer">
                    <Card.Img variant="top"  className='article-image' src={article.image_url} />
                    <Card.Body>
                      <Card.Title className='article-source'>{article.source}</Card.Title>
                      <Card.Text className='article-title'>{article.title}</Card.Text>
                    </Card.Body>
                  </a>
                </Card>
                <div className='similar-news-container'>
                   <div className='simlar-news'>
                    <div>{newsBlocks.fetchResult[dataIndex].similarNews[0].source}</div>
                    {newsBlocks.fetchResult[dataIndex].similarNews[0].title}
                  </div>
                  <div className='simlar-news'>
                  <div>{newsBlocks.fetchResult[dataIndex].similarNews[1].source}</div>
                    {newsBlocks.fetchResult[dataIndex].similarNews[1].title}
                  </div>
                  <div className='simlar-news'>
                  <div>{newsBlocks.fetchResult[dataIndex].similarNews[2].source}</div>
                    {newsBlocks.fetchResult[dataIndex].similarNews[2].title}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul> 
    </div> 
  </>
  )
}}

