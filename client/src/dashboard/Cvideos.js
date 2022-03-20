import React from 'react'
import UploadVideo from '../dashboard/videoCrudpage/UploadVideo'
import EditVideoandNav from './c_components/EditVideoandNav'
const Carticles = () => {
  return (
    <div>
      <div className="headtitle relative ">
    <p className="text-2xl m-[20px_0px_0px_40px] inline-block  font-semibold after:content-[''] after:absolute after:top-[38%] after:left-6 after:bg-slate-500 after:w-[5px] after:h-[30px] after:rounded-[5px]">ভিডিও আপলোড পাতা</p>
  </div>
        <UploadVideo />
        <div className="arti_card">
        <div className="headtitle relative ">
    <p className="text-2xl m-[20px_0px_0px_40px] inline-block  font-semibold after:content-[''] after:absolute after:top-[38%] after:left-6 after:bg-slate-500 after:w-[5px] after:h-[30px] after:rounded-[5px]">ভিডিও ইডিট করুন</p>
  </div>
       <EditVideoandNav />
       </div> 
    </div>
  )
}

export default Carticles