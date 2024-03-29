import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/displayNews.css";

export default function DisplayNews({ searchId, newsBlocks }) {
  const [newslist, setNewsList] = useState();
  
  useEffect(() => {
    if (newsBlocks !== undefined && newsBlocks !== null) {
      let newsDataArray = newsBlocks.pageOne.fetchResult.data.filter(
        (user) =>
          !(
            user.image_url.includes("default") ||
            user.image_url.includes("logo-bg") ||
            user.image_url.includes("movers") ||
            user.image_url.includes("logo")
          )
      );
      setNewsList(newsDataArray);
    }
  }, [newsBlocks]);

  function deleteBadImageStory(uuidNumber) {
    let filteredList = newslist.filter((number) => number.uuid !== uuidNumber.toString());
    setNewsList(filteredList);
  }


  function NewsArticles({newsData}) {
    const { source, image_url, url, title, description, uuid } = newsData;
        return (
          <li key={url}>
            <hr className="line-break"></hr>
            <a
              href={url}
              className="article-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="article-container">
                <div className="image-container">
                  <img
                    alt=""
                    src={image_url}
                    onError={() => {
                     deleteBadImageStory(uuid);
                    }}
                  />
                  <p>{source}</p>
                </div>
                <div className="article-info">
                  <div className="article-title">{title}</div>
                  <div className="article-description">{description}</div>
                </div>
              </div>
            </a>
          </li>
  )}


  if (typeof newslist !== "undefined") {
    return (
      <>
        <div className="news-cards-container">
          <div className="search-id">{searchId}</div>
          <ul>
            {newslist.map((news) => (
              <NewsArticles newsData={news} key={news.uuid} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}
