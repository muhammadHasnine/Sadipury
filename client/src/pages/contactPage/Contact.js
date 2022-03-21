import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetch_home_datas} from '../../redux/actions/Actions'
const Contact = () => {
  const home_data = useSelector((state)=>state.home_reducers.home)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetch_home_datas())
  },[])
    const [name, setname] = useState('');
    const [sub, setsub] = useState('');
    const [email, setemail] = useState('');
    const [number, setnumber] = useState(0);
    const [coment, setcoment] = useState('')
  return (
    <>
    <div className='p-[2rem_0rem_4rem]'>
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-3 m-[30px_auto] w-[90%] md:w-[85%]">
            <div className="inputbody md:col-span-2 ">
              <p className='text-2xl font-semibold'>যোগাযোগ করুন</p>
              <div className="inputfild grid gap-4 grid-cols-1 md:grid-cols-2 bg-white p-8 rounded-2xl mt-[70px] shadow-[1px_1px_5px_0px_rgba(1,1,1,0.05)]">
                  <div className="div">
                  <p className='text-lg'>আপনার নাম</p>
                    <input className='bg-[#e6e6e6] p-2 rounded-lg w-full' type="text" onChange={e=>setname(e.target.value)} />
                  </div>
                  <div className="div">
                  <p className='text-lg'>বিষয়</p>
                    <input className='bg-[#e6e6e6] p-2 rounded-lg w-full' type="text" onChange={e=>setsub(e.target.value)} />
                  </div>
                  <div className="div">
                  <p className='text-lg'>ই-মেইল</p>
                    <input className='bg-[#e6e6e6] p-2 rounded-lg w-full' type="text" onChange={e=>setemail(e.target.value)} />
                  </div>
                  <div className="div">
                  <p className='text-lg'>ফোন নাম্বার</p>
                    <input className='bg-[#e6e6e6] p-2 rounded-lg w-full' type="number" onChange={e=>setnumber(e.target.value)}/>
                  </div>
                  <div className="div md:col-span-2">
                  <p className='text-lg'>আপনার বার্তা</p>
                    <textarea className='w-full h-[140px] bg-[#e6e6e6] p-2 rounded-lg' type="text" onChange={e=>setcoment(e.target.value)}/>
                  </div> 
                  <button className='bg-[#106690] w-[120px] p-[5px_10px] text-center rounded-full text-white mb-3'>সাবমিট</button> 
              </div>     
            </div>
            <div className="client_info">
              {home_data.map(({title, description, imgurl,socialImgandLink})=>{
                return(
                  <div className="imgcard bg-white shadow-[1px_1px_5px_0px_rgba(1,1,1,0.05)] flex gap-2 flex-col items-center rounded-2xl p-8 mb-16">
                     <div className="h_img_wrapper h-[170px] w-[170px] inline-block relative rounded-[50%] ">
                    <img className=" rounded-[50%] w-30px" src={imgurl} alt={title}  />
                  </div>
                  <p className='font-semibold'>{title}</p>
                  <div className="socil_images flex gap-2">
                  {socialImgandLink.map(item =>{
                          return (
                            <a href={item.lastName} target='_blank'>
                              <img src={item.firstName} className="icon h-[30px]" />
                            </a>
                          )
                        })}
                  </div>
              </div>
                )
              })}
              
              <div className="email bg-white shadow-[1px_1px_5px_0px_rgba(1,1,1,0.05)] flex flex-col items-start rounded-2xl p-8 mb-16">
                <p>আমাদের সাথে যোগাযোগ করুন</p>
              </div>
            </div>
            
          </div> 
    </div>
      
    </>
  )
}

export default Contact