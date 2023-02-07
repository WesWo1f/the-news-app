import React, { useEffect } from 'react'
import { useState } from 'react';
import "../styles/displayNews.css"

export default function DisplayNews({newsData, searchId}) {
    const articleArray = []
    const [article, setArticle] = useState([]);
   useEffect(()=>{
        if(typeof(newsData) !== 'undefined'){
          checkingNull()
        }
    },[newsData])

    function checkingNull(){
      let articleCount = 0
        for (let index = 0; index < 40; index++) {
          try {
            if (articleCount >= 9){return}
            if( typeof(newsData.fetchResult.data[index].title     ) !== 'undefined'  && 
                typeof(newsData.fetchResult.data[index].url       ) !== 'undefined' && 
                typeof(newsData.fetchResult.data[index].image_url ) !== 'undefined' && 
                typeof(newsData.fetchResult.data[index].categories) !== 'undefined' &&
                typeof(newsData.fetchResult.data[index].source) !== 'undefined'
                ){
              articleCount +=1
              settingArticles(index,articleCount)
            }
          } catch (error) {
            //console.log("checkingNull error")
            //console.log(error)
          }
        }
    } 

    function settingArticles(index,articleCount){
       const obj = {
         id: [index],
         headLine: newsData.fetchResult.data[index].title,
         imageThumbnail: newsData.fetchResult.data[index].image_url,
         link: newsData.fetchResult.data[index].url,
         category: newsData.fetchResult.data[index].categories,
         source: newsData.fetchResult.data[index].source
       }
       articleArray[articleCount] = obj
       setArticle(articleArray)
    }



if(article.length >=3){
    return (
        <>
            <div className='cards-container'>
            <div className='cards-box'>
            <div className='title-category'>
          {(() => {
            if (searchId === 'us') {
              return (
                <div>U.S.</div>
              )
            } else {
              return (
                <div>{searchId}</div>
              )
            }
          })()}
          <hr className="solid"></hr>
          </div>
              <div className="article-container">
              <div className='image-and-headline'>
                <a href={article[1].link} className='image-and-headline' target="_blank" rel="noopener noreferrer">
                <img className="image-thumbnail"  src={article[1].imageThumbnail}  alt=""></img>
                <div className='head-line' >{article[1].headLine} </div>
                </a>
              </div>
              <div className='article-source'>{article[1].source}</div>
              </div>
              <hr className="solid"></hr>
      
              <div className="article-container">
              <div className='image-and-headline'>
              <a href={article[2].link} className='image-and-headline' target="_blank" rel="noopener noreferrer">
                <img className="image-thumbnail"  src={article[2].imageThumbnail}  alt=""></img>
                <div className='head-line' >{article[2].headLine}</div></a>
              </div>
              <div className='article-source'>{article[2].source}</div>
              </div>
              <hr className="solid"></hr>
              <div className="article-container">
              <div className='image-and-headline'>
              <a href={article[3].link} className='image-and-headline' target="_blank" rel="noopener noreferrer">
                <img className="image-thumbnail"  src={article[3].imageThumbnail}  alt=""></img>
                <div className='head-line' >{article[3].headLine}</div></a>
              </div>
              <div className='article-source'>{article[3].source}</div>
              </div>
              <hr className="solid"></hr>
              <div className="article-container">
              <div className='image-and-headline'>
              <a href={article[4].link} className='image-and-headline' target="_blank" rel="noopener noreferrer">
                <img className="image-thumbnail"  src={article[4].imageThumbnail}  alt=""></img>
                <div className='head-line' >{article[4].headLine}</div></a>
              </div>
              <div className='article-source'>{article[4].source}</div>
              </div>

              <hr className="solid"></hr>
              <div className="article-container">
              <div className='image-and-headline'>
              <a href={article[5].link} className='image-and-headline' target="_blank" rel="noopener noreferrer">
                <img className="image-thumbnail"  src={article[5].imageThumbnail}  alt=""></img>
                <div className='head-line' >{article[5].headLine}</div></a>
              </div>
              <div className='article-source'>{article[5].source}</div>
              </div>

              <hr className="solid"></hr>
              <div className="article-container">
              <div className='image-and-headline'>
              <a href={article[6].link} className='image-and-headline' target="_blank" rel="noopener noreferrer">
                <img className="image-thumbnail"  src={article[6].imageThumbnail}  alt=""></img>
                <div className='head-line' >{article[6].headLine}</div></a>
              </div>
              <div className='article-source'>{article[6].source}</div>
              </div>

          </div> 
          </div>
          </> 
      )
}}