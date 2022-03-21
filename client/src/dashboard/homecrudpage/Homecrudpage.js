import React, { useState , useEffect } from 'react'
import AXIOS from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import {fetch_home_datas} from '../../redux/actions/Actions'
const Homecrudpage = () => {
  const home_data = useSelector((state)=>state.home_reducers.home)
  const dispatch = useDispatch()
  // const id = home_data._id
  console.log(home_data)
const [title, settitle] = useState('');
const [shortBio, setshortBio] = useState('');
const [bioImgUrl, setImgUrl] = useState('');

  useEffect(()=>{
    dispatch(fetch_home_datas())
  },[])
    const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
   
    // handle input change
    const handleInputChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...inputList];
      list[index][name] = value;
      setInputList(list);
    };
   
    // handle click event of the Remove button
    const handleRemoveClick = index => {
      const list = [...inputList];
      list.splice(index, 1);
      setInputList(list);
    };
  
    // handle click event of the Add button
    const handleAddClick = () => {
      setInputList([...inputList, { firstName: "", lastName: "" }]);
    };
   
  const submitPost = (idd)=>{
    const data ={
      title:title,
      shortBio:shortBio,
      bioImgUrl:bioImgUrl,
      socialContent:inputList,
      id:idd
    }
    AXIOS.put('/api/posthome',data)
    alert('submited!')
  }

  
  
  return (
    <>
    <div className="container grid grid-cols-1  max-w-[80%] lg:max-w-[60%] p-[30px_0px] m-[0px_auto] gap-[10px]">
        <input className='p-[10px] text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px] outline-none' type="text" placeholder='title' onChange={(e)=>{settitle(e.target.value)}}/>
        <input className='p-[10px] text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px] outline-none' type="text" placeholder='shortbio' onChange={(e)=>{setshortBio(e.target.value)}} />
        <input className='p-[10px] text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px] outline-none' type="text" placeholder='img_url' onChange={(e)=>{setImgUrl(e.target.value)}}/>
        {inputList.map((x, i) => {
        return (
          <div key={i} className="box first-letter">
            <input className='p-[10px] text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px] outline-none w-full md:w-[45%] md:mr-[10%]'
              name="firstName"
   placeholder="Social Icon URL"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />
            <input 
              className="ml10 p-[10px] text-[15px] font-normal border-[1px] border-[#bbbbbb] rounded-[5px] m-[8px_0px] outline-none w-full md:w-[45%]"
              name="lastName"
   placeholder="Social link"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr-5 bg-red-600 text-[16px] rounded  text-white p-[5px_12px]"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button className=' bg-sky-600 text-[16px] rounded  text-white p-[5px_12px]'  onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
       {home_data.map(({title, description, imgurl,socialImgandLink,_id})=>{
                return(
                  <div className='m-[0px_auto] p-[30px]'>
                    <div className="imgcard bg-white shadow-[1px_1px_5px_0px_rgba(1,1,1,0.05)] flex gap-2 flex-col items-center rounded-2xl p-8 mb-16 w-full">
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
              <button className='  w-[140px] bg-[#3de5f1] p-[5px_10px] rounded-full' onClick={()=>submitPost(_id)}>Edit Info</button>       
                  </div>
                  
                )
              })}
      
        </div>
    </>
  )
}
        


export default Homecrudpage