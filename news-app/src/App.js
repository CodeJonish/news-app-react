import React, { useState } from 'react'
import Navbar from './components/Navbar';
import NewsPage from './components/NewsPage';
import NewsItems from './components/NewsItems';

 const App = () => {
  const [category,setCategory] = useState('general');
  return (
    <>
    <Navbar setCategory={setCategory}/>
    <NewsPage category={category}/>
    
    </>
  )
}


export default App;