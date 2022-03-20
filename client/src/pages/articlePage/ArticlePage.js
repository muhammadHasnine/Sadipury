import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_article_datas } from '../../redux/actions/Actions'
import ArticleCard from './ArticleCard'
import ArticleNav from './ArticleNav'


const Articles = () => {

  const products = useSelector((state)=>state.article_reducers.articale)
  const dispatch = useDispatch();
  const [all, setall] = useState([])
 

  console.log("articale",products)
  

  useEffect(()=>{
  dispatch(fetch_article_datas())
  },[])

  useEffect(()=>{
    setall([...products])
  },[products])


  const handelarticale = (match) =>{
    console.log(match)
    if(match==='সকল'){
      return setall(products);
    }
    const newarray = products.filter((nar)=>nar.category.includes(match));
    setall(newarray)
  }

const [click, setClick] = useState(false)
const hamberger = () =>{
  setClick(!click)
}

  return (
    <>
    <div className="headtitle relative ">
    <p className="text-2xl m-[20px_0px_0px_40px] inline-block  font-semibold after:content-[''] after:absolute after:top-[38%] after:left-6 after:bg-slate-500 after:w-[5px] after:h-[30px] after:rounded-[5px]">প্রবন্ধ পাতা</p>
  </div>
     <div className='arti_parent grid grid-cols-[1fr] md:grid-cols-[1fr_3fr]'>
       <button className='arti_btn flex justify-between items-center w-[90%] h-[50%] m-[20px_auto] rouned-[5px] shadow-[0px_0px_2px_0px_#9793938c] text-left p-[0px_30px] border-none bg-white md:hidden block ' onClick={hamberger}><p>ক্যাটাগরি</p><p>&#x25BC;</p></button>
       <div className={click ? "acti_nav_active md:block" : "arti_nav hidden md:block"}>
          <ArticleNav handarti = {handelarticale}/>
       </div>
       <div className="arti_card p-[10px]">
            {
              all.map((c)=>{
                return <ArticleCard key={c._id} title ={c.title} imgurl ={c.imgurl} desc ={c.desc} id ={c._id} date={c.date} author={c.author} link={c.downloadLink} category={c.category}/>
              })
            }
       </div>
     
      
    </div>
    </>
   
  )
}

export default Articles



