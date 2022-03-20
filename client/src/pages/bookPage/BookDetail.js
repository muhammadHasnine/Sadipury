import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetch_book_datas } from '../../redux/actions/Actions'

const BookDetail = () => {
  const book_data = useSelector((state)=>state.book_reducers.books)
  const dispatch = useDispatch()
console.log(book_data)
    const {slag} = useParams()

    useEffect(()=>{
      dispatch(fetch_book_datas())
    },[])
    const filtarti = book_data.filter((fil)=> fil.book_title === slag)
    console.log("filter",filtarti)

  return (
    <div>
        {filtarti.map((c)=>(
        <>
          <div className="arti_detail_container w-[90%] md:w-[80%] m-[40px_auto]">
                  <div className="ar_de_title">
                    <h2>{c.book_title}</h2>
                  </div>
            <div className="arti_detail_con_child bg-[#ffffff] mt-[30px] shadow-[0px_0px_2px_px_#9793938c] rounded-[5px] "> 
                  <div className="arti_img_detail p-[0px] md:p-[30px]">
                    <img src={c.book_imgurl} alt={c.book_title} className='w-[100%] h-[100%] rounded-[5px_5px_0px_0px] md:rounded-[5px]'/>
                  </div>
                  <div className="arti_desc_detail p-[20px_40px_40px_40px] md:p-[ 0px_40px_40px_40px] ">
                      <p>{c.book_author}</p>
                      <a href={c.download_link}>Download</a>
                  </div>
            </div>      
          </div>
        </>
    ))}
    </div>
  )
}

export default BookDetail