import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_article_datas } from '../../redux/actions/Actions'
import ArticleNav from '../../pages/articlePage/ArticleNav'
import EditarticleCard from './EditarticleCard'
import { useSearch } from '../../hooks/useSearch'


const EditArticleandNav = () => {
  const articles_data = useSelector((state)=>state.article_reducers.articale)
  const dispatch = useDispatch();
  const [all, setall] = useState([])
  const [search, setsearch] = useState(null)
  const num = [1,2];

  console.log("articale",articles_data)
  

  useEffect(()=>{
  dispatch(fetch_article_datas())
  },[])

  useEffect(()=>{
    setall([...articles_data])
  },[articles_data])


  const handelarticale = (match) =>{
    console.log(match)
    if(match==='সকল'){
      return setall(articles_data);
    }
    const newarray = articles_data.filter((nar)=>nar.category.includes(match));
    setall(newarray)
  }

const [click, setClick] = useState(false)
const hamberger = () =>{
  setClick(!click)
}

  return (
    <>
     <div className='arti_parent grid grid-cols-[1fr] md:grid-cols-[1fr_3fr]'>
       <button className='arti_btn w-[80%] h-[70%] m-[20px_auto] rouned-[5px] shadow-[0px_0px_2px_0px_#9793938c] text-left pl-[30px] border-none bg-white md:hidden block' onClick={hamberger}>&#9776;</button>
       <div className={click ?  "acti_nav_active md:block" : "arti_nav hidden md:block p-[10px]"}>
       <input
            type="search"
            placeholder="Enter name to be searched"
            className="searchbar p-[3px] rounded-full  text-[red]"
            onChange={(e) =>setsearch(e.target.value)}
          />
          <ArticleNav handarti = {handelarticale}/>
       </div>
       <div className="arti_card p-[10px]">
            {
              useSearch(all,search,num).map((c)=>{
                return <EditarticleCard key={c._id} title ={c.title} imgurl ={c.imgurl} desc ={c.desc} id ={c._id} date={c.date} author={c.author} link={c.downloadLink} category={c.category}/>
              })
            }
       </div>
    </div>
    </>
   
  )
}

export default EditArticleandNav