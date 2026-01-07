import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`      https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c0b2d00e6f944b41b416603c648237ff
`)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles || []))
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <div>
      <p>{category} News</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px",
        }}
      >
        {articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            image={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default News;