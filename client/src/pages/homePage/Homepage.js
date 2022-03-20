import React, { useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import {fetch_home_datas} from '../../redux/actions/Actions'
const Home = () => {
  const home_data = useSelector((state)=>state.home_reducers.home)
  console.log(home_data)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetch_home_datas())
  },[])
  return (
    <>
    {home_data.map(({title, description, imgurl,socialImgandLink})=>{
      return (<div className="home_section h-[calc(100vh-70px)]  ">
      <div className="home_content grid grid-cols-12 pt-[40px] md:pt-[100px] gap-8">
        <div className="w-full col-start-2 col-end-12 text-center md:col-start-2 md:col-end-6 home_img bg-[#ffffff] shadow-[#e8e8e8_1px_3px_6px_0px] rounded-[15px] p-[25px]">
          <div className="h_img_wrapper h-[170px] w-[170px] inline-block relative rounded-[50%] ">
            <img className=" rounded-[50%] w-30px" src={imgurl} alt=""  />
          </div>
          <div className="flex justify-center icons">
          {/* {socialImgandLink.map((i)=>{
                    return <img src={i.firstName} />
                  })} */}
            {socialImgandLink.map(item =>{
              return (
                <a href={item.lastName} target='_blank'>
                <img src={item.firstName} className="icon h-[30px]" />
            </a>
           

              )
            })}
          </div>
        </div>
        <div className="home_dtls h-[fit-content] bg-[#ffffff] text-[#40464e] col-start-2 col-end-12 md:col-start-7 md:col-end-12 p-[25px] rounded-[15px] shadow-[#e8e8e8_1px_3px_6px_0px] ">
          <div className="title text-[32px] font-[900]">
            <p>{title}</p>
          </div>
          <div className="description text-[22px]">
            <p>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div >)

    })}
      
    </>
  );
};

export default Home;
