import React, { useEffect } from 'react'
import "../styles/displayNews.css"

export default function DisplayNews({newsData, searchId}) {

  

    if(typeof(newsData) !== 'undefined'){
    return (
             <div className='cards-container'>
             <div className='cards-box'>
               <div className='title-category'>
                 <div>{searchId}</div> 
                 <hr className="solid"></hr>
               </div>
               <div className="article-container">
                 <div className='image-and-headline'>
                   <ul>
                     {newsData.fetchResult.data.map((article, index) => {
                       if (!article.image_url) {
                         newsData.fetchResult.data.splice(index, 1);
                         return null;
                       }
                       return (
                         <li key={article.url}>
                           <a href={article.url} className="image-and-headline" target="_blank" rel="noopener noreferrer">
                             <img 
                               className="image-thumbnail"
                               src={article.image_url}
                               alt=""
                             />
                             <div className="head-line">{article.title}</div>
                           </a>
                         </li>
                       );
                     })}
                   </ul>
                 </div>
               </div>
             </div>
           </div>
      )
}}



