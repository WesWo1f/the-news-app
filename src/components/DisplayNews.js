import React, { useEffect } from 'react'
import "../styles/displayNews.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function DisplayNews({newsData, searchId}) {

  

    if(typeof(newsData) !== 'undefined'){
    return (
          //    <div className='cards-container'>
          //    <div className='cards-box'>
          //      <div className='title-category'>
          //        <div>{searchId}</div> 
          //        <hr className="solid"></hr>
          //      </div>
          //      <div className="article-container">
          //        <div className='image-and-headline'>
          //          <ul>
          //            {newsData.fetchResult.data.map((article, index) => {
          //              if (!article.image_url) {
          //                newsData.fetchResult.data.splice(index, 1);
          //                return null;
          //              }
          //              return (
          //                <li key={article.url}>
          //                 <div className="img-with-text">
          //                 {/* <div className="head-line">{article.title}</div> */}
          //                  <a href={article.url} className="image-and-headline" target="_blank" rel="noopener noreferrer">
          //                  {/* <div className='image-and-text' >{article.source}</div> */}
          //                  <div className="head-line">{article.title}</div>
          //                    <img 
          //                      className="image-thumbnail"
          //                      src={article.image_url}
          //                      alt=""
          //                    />
                             
          //                    {/* <div className="head-line">{article.title}</div> */}
          //                  </a>
          //                  </div>
          //                  <p>{article.source}</p>
          //                  {/* <div className="head-line">{article.title}</div> */}
          //                  <hr className="solid"></hr>
          //                </li>
          //              );
          //            })}
          //          </ul>
          //        </div>
          //      </div>
          //    </div>
          //  </div>


    /* <hr className="solid"></hr>
      <ul>
      <div className="container">
        {newsData.fetchResult.data.map((article, index) => {
          if (!article.image_url) {
            newsData.fetchResult.data.splice(index, 1);
            return null;
          }
          return (
            <li key={article.url}>
              <a href={article.url}  target="_blank" rel="noopener noreferrer">
                <img 
                  className="image-thumbnail"
                  src={article.image_url}
                  alt=""
                />
                  <p className="image-title">{article.title}</p>
                  <p className="image-source">{article.source}</p>
              </a>
              <hr className="solid"></hr>
            </li>
          );
        })}
        </div>
      </ul> */
      <>
   




    <div className='search-id'>{searchId}</div> 
    <div className='news-cards-container'>
      <ul>
        {newsData.fetchResult.data.map((article, index) => {
          if (!article.image_url) {
            newsData.fetchResult.data.splice(index, 1);
            return null;
          }
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
               <div>{newsData.fetchResult.data[15].source}</div>
               {newsData.fetchResult.data[15].title}
               </div>
               <div className='simlar-news'>
               <div>{newsData.fetchResult.data[16].source}</div>
               {newsData.fetchResult.data[16].title}
               </div>
               <div className='simlar-news'>
               <div>{newsData.fetchResult.data[17].source}</div>
               {newsData.fetchResult.data[17].title}
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



