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
    <div className="container grid grid-cols-1  max-w-[80%] lg:max-w-[60%] m-[20px_auto] gap-[10px]">
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
       {home_data.map((c)=>{
         return<>
                <div className="container">
                  <img src={c.imgurl} />
                  {c.socialImgandLink.map((i)=>{
                    return <img src={i} />
                  })}
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                </div>
                <button onClick={()=>submitPost(c._id)}>Submit post</button>
              </>
       })}
        </div>
    </>
  )
}
        


export default Homecrudpage