import React, { useEffect } from 'react'
import "../styles/displayNews.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
            
export default function DisplayNews({newsData, searchId, combinedNewsData}) {

  if(typeof(newsData) !== 'undefined' && typeof(combinedNewsData) !== 'undefined'){
    const topThreeArticles = newsData.fetchResult.data.slice(0, 3);
    return (
      <>
        <div className='news-cards-container'>
        <div className='search-id'>{searchId}</div> 
          <ul>
            {topThreeArticles.map((article, index) => {
              if (!article.image_url) {
                topThreeArticles.splice(index, 1);
                return null;
              }
              const dataIndex = Math.min(index, 2);
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
                        <div>{combinedNewsData.fetchResult.data[dataIndex].similarNews.fetchResult[0].source}</div>
                        {combinedNewsData.fetchResult.data[dataIndex].similarNews.fetchResult[0].title}
                      </div>
                      <div className='simlar-news'>
                        <div>{combinedNewsData.fetchResult.data[dataIndex].similarNews.fetchResult[1].source}</div>
                        {combinedNewsData.fetchResult.data[dataIndex].similarNews.fetchResult[1].title}
                      </div>
                      <div className='simlar-news'>
                        <div>{combinedNewsData.fetchResult.data[dataIndex].similarNews.fetchResult[2].source}</div>
                        {combinedNewsData.fetchResult.data[dataIndex].similarNews.fetchResult[2].title}
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



