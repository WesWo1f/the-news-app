import React, { useEffect } from 'react'
import "../styles/displayNews.css"
import Card from 'react-bootstrap/Card';
         
export default function DisplayNews({searchId, newsBlocks}) {


  




  // if(typeof(newsBlocks) !== 'undefined'){
  //   console.log(newsBlocks)
  //   return (
  //     <>
  //       <div className='news-cards-container'>
  //         <div className='search-id'>{searchId}</div> 
  //         <ul>
  //           {newsBlocks.pageOne.fetchResult.data.map((article, index) => {
  //             return (
  //               <li key={article.url}>
  //                 <hr className="solid"></hr>
  //                     <img src={article.image_url}/>
  //                       <div>{article.source}</div>
  //                       {article.title}
  //                       {article.description}
  //               </li> 
  //             );
  //           })}
  //         </ul> 
  //       </div> 
  //     </>
  //   )
  // }}



  if(typeof(newsBlocks) !== 'undefined'){
    console.log(newsBlocks)
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
                    <img src={article.image_url} className='article-image'/>
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
    )
  }}




//   <div className='similar-news-container'>
//   <div className='simlar-news'>
//     <div>{index*index}</div>
//     <div>{newsBlocks.pageTwo.fetchResult.data[index]?.source}</div>
//     {newsBlocks.pageTwo.fetchResult.data[index]?.title}
//   </div>
//   <div className='simlar-news'>
//   <div>{index+2}</div>
//     <div>{newsBlocks.pageTwo.fetchResult.data[index]?.source}</div>
//     {newsBlocks.pageTwo.fetchResult.data[index]?.title}
//   </div>
//   <div className='simlar-news'>
//   <div>{index+3}</div>
//     <div>{newsBlocks.pageTwo.fetchResult.data[index]?.source}</div>
//     {newsBlocks.pageTwo.fetchResult.data[index]?.title}
//   </div>
// </div>









// if(typeof(newsBlocks) !== 'undefined'){
//   console.log(newsBlocks)
// return (
// <>
//   <div className='news-cards-container'>
//   <div className='search-id'>{searchId}</div> 
//     <ul>
//       {newsBlocks.pageOne.fetchResult.data.map((article, index) => {
//         const dataIndex = Math.min(index);
//         return (
//           <li key={article.url}>
//             <hr className="solid"></hr>
//             <div className='container-children'>
//               <Card className='article-card' >
//                 <a href={article.url} className='article-link' target="_blank" rel="noopener noreferrer">
//                   <Card.Img variant="top"  className='article-image' src={article.image_url} />
//                   <Card.Body>
//                     <Card.Title className='article-source'>{article.source}</Card.Title>
//                     <Card.Text className='article-title'>{article.title}</Card.Text>
//                   </Card.Body>
//                 </a>
//               </Card>
//               <div>{index}</div>
//               <div className='similar-news-container'>
//                  <div className='simlar-news'>
//                   <div>{newsBlocks.pageTwo.fetchResult.data[index].source}</div>
//                   {newsBlocks.pageTwo.fetchResult.data[index].title}
//                 </div>
//                 <div className='simlar-news'>
//                     <div>{newsBlocks.pageTwo.fetchResult.data[index].source}</div>
//                   {newsBlocks.pageTwo.fetchResult.data[index].title}
//                 </div>
//                 <div className='simlar-news'>
//                     <div>{newsBlocks.pageTwo.fetchResult.data[index].source}</div>
//                   {newsBlocks.pageTwo.fetchResult.data[index].title}
//                 </div>
//               </div>
//             </div>
//           </li>
//         );
//       })}
//     </ul> 
//   </div> 
// </>
// )
// }}

