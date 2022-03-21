import React from 'react';
import Articles from './pages/articlePage/ArticlePage';
import {Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/homePage/Homepage'
import ArticleDetail from './pages/articlePage/ArticleDetail';
import VidCompon from './pages/videoPage/VidCompon'
import WatchVideo from './pages/videoPage/WatchVideo'
import Navbar from './components/Navbar';
import Books from './pages/bookPage/Books';
import BookDetail from './pages/bookPage/BookDetail'
import Cnavbar from './dashboard/Cnavbar';
import Cbooks from './dashboard/Cbooks';
import Cvideos from './dashboard/Cvideos'
import Carticles from './dashboard/Carticles';
import Editbook from './dashboard/c_components/Editbook';
import Editaritle from './dashboard/c_components/Editarticle';
import Editvideo from './dashboard/c_components/Editvideo';
import Homecrudpage from './dashboard/homecrudpage/Homecrudpage';
import Addinputfield from './dashboard/homecrudpage/AddInputfield';
import { library } from '@fortawesome/fontawesome-svg-core' //allows later to just use icon name to render-them
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import Contact from './pages/contactPage/Contact';

library.add(fas)


const App = () => {
  const navClick = useSelector((state)=>state.theme_reducers.theme)
  console.log("click",navClick)

  return (
<>

{/* <div className='overflow-y-hidden' > */}
<Routes>
    <Route path='/' element={<Navbar/>}>
    <Route index element={<Home/>} />
    <Route path='/book' element = {<Books /> } />
    <Route path='/book/:slag' element={<BookDetail/>}/>
    <Route path='/article' element={<Articles />}/>
    <Route path='/article/:id' element={<ArticleDetail/>} />
    <Route path='/video' element={<VidCompon/>}/>
    <Route path='/watch/:id' element={<WatchVideo />}/>
    <Route path='/contact' element={<Contact/>}/>

  </Route>

  
  <Route path='/admin' element={<Cnavbar/>}>
    <Route path='home' element={<Homecrudpage />}/>
    <Route path='books' element={<Cbooks />}/>
    <Route path='books/editbook/:id' element={<Editbook/>}/>
    <Route path='articles' element={<Carticles/>}/>
    <Route path='articles/editarticle/:id' element={<Editaritle/>}/>
    <Route path='videos' element={<Cvideos />}/>
    <Route path='videos/editvideo/:id' element={<Editvideo/>}/>
  </Route>
</Routes>
  {/* </div> */}
</>
  )
 
};

export default App;
