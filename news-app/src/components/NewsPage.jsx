import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems';
const NewsPage = ({category}) => {

   const [articles,Setarticles] = useState([]);
    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=25b39121a661413e9c849a23ec3fd3b7`;
        fetch(url).then(response=> response.json()).then(data=> Setarticles(data.articles));
        console.log(url)
    },[{category}])
  return (
   <>
   <div className='bg-dark'>
   <h2 className='text-center text-light'>Today <span className='badge bg-danger text-light'>NEWS</span></h2>
   {articles.map((news,index)=>{
    return <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
   })}
   </div>
   
   </>
  )
}

export default NewsPage;