
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MyPage from './pages/Mypage.jsx';
import ScrollToTopButton from './components/ScrollTopButton';
const App = () => {
  const [theme, setTheme] = useState(() => {
    // Get the theme from localStorage or default to 'light' if not present
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    // Save the theme to localStorage whenever it changes
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (

    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      {/* <Route path="/mypage" element={<MyPage/>}/> */}
   </Routes>

      <Footer />
      <ScrollToTopButton/>
    </div>
    

  );
};

export default App;
