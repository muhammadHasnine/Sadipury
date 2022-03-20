import React, { useEffect }  from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {fetch_article_datas} from '../../redux/actions/Actions'
const ArticleDetail = () => {
const article_data = useSelector((state)=>state.article_reducers.articale)
const dispatch = useDispatch()
    const {id} = useParams()

  useEffect(()=>{
    dispatch(fetch_article_datas()) 
  },[])
    const filtarti = article_data.filter((fil)=> fil._id === id)
    console.log("filter",filtarti)
  return (
    <div>
        {filtarti.map((c)=>(
        <>
          <div className="arti_detail_container w-[92%] md:w-[80%] m-[40px_auto]">
                  <div className="ar_de_title">
                    <h2 className='font-extrabold text-'>{c.title}</h2>
                  </div>
            <div className="arti_detail_con_child bg-[#ffffff] mt-[30px] shadow-[0px_0px_2px_px_#9793938c] rounded-[5px] "> 
                  <div className="arti_img_detail p-[0px] md:p-[30px]">
                    <img src={c.imgurl} alt={c.title} className='w-[100%] h-[100%] rounded-[5px_5px_0px_0px] md:rounded-[5px]'/>
                  </div>
                  <div className="arti_desc_detail p-[20px_40px_40px_40px] md:p-[ 0px_40px_40px_40px]">
                      <p className='mb-[10px] font-semibold'>লেখক: {c.author}</p>
                     <div>
                     <div dangerouslySetInnerHTML={{ __html: c.desc }} />
                     </div>
                      {/* <p>{c.desc}</p> */}
                  </div>
            </div>      
          </div>
        </>
    ))}
    </div>
  )
}

export default ArticleDetail