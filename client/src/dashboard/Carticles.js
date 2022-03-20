import React from 'react'
import Addpost from '../dashboard/articleCrudpage/Addpost'
import EditArticleandNav from './c_components/EditArticleandNav'
const Carticles = () => {
  return (
    <div>
      <div className="headtitle relative ">
    <p className="text-2xl m-[20px_0px_0px_40px] inline-block  font-semibold after:content-[''] after:absolute after:top-[38%] after:left-6 after:bg-slate-500 after:w-[5px] after:h-[30px] after:rounded-[5px]">প্রবন্ধ আপলোড পাতা</p>
  </div>
        <Addpost />
        <div className="arti_card">
       <EditArticleandNav />
       </div> 
    </div>
  )
}

export default Carticles