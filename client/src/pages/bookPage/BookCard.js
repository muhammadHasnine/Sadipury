import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({book_title,book_imgurl,book_author,book_download_link,book_translator,book_editor,book_publication,book_page,book_volume,book_size,book_category,book_slug}) => {
  return (
    <>
 <div className="b_card flex bg-white gap-9 p-4 shadow-[2px_1px_8px_0px_#e3dfdf] rounded text-[16px] md:text-[20px]">
          <div className="b_img max-w-[110px] md:max-w-[130px]">
            <img src={book_imgurl} alt={book_title} />
          </div>
          <div className="b_info text-[18px]">
            <p className='b_title text-[22px] font-bold'> বই: {book_title}</p>
            <p> <span className='font-bold'>লেখক: </span> {book_author}</p>
            {book_translator === "" ? null : 
            <p><span className='font-bold'>অনুবাদ: </span> {book_translator}</p>}
            {book_editor === "" ? null : 
            <p><span className='font-bold'>সম্পাদনা: </span> {book_editor}</p>}
            {book_volume === 0 ? null : 
            <p><span className='font-bold'>ভলিউম: </span> {book_volume}</p>}
            <p><span>পৃষ্ঠা: {book_page}</span> <span>সাইজ: {book_size}</span></p>
            {book_category.cat1.map((catagory) =>{ return <p className='bg-[#ffbb00] inline-block rounded-[50px] p-[2px_14px] text-[14px] mr-[5px]'>{catagory}</p>})} <br/>
            {book_category.cat2.map((catagory) =>{ return <p className='bg-[#ffbb00] inline-block rounded-[50px] p-[2px_14px] text-[14px] mr-[5px]'>{catagory}</p>})} <br/>
            <div className="b_btns mt-3">
            <Link to={`${book_slug}`}>
            <p className='b_dtls_btn bg-slate-500 text-white p-[3px_10px] inline-block text-[16px] mr-[20px]'>বিস্তারিত</p>
            </Link>
            <p className='b_dtls_btn bg-slate-500 text-white mt-2 p-[3px_10px] inline-block text-[16px]'>ডাউনলোড</p>

            </div>
            
            
          </div>
        </div>
      
    </>
  )
}

export default BookCard
// import React from 'react'
// import { Link } from 'react-router-dom'

// const bCard = ({ b_title, b_imgurl, b_author, b_translator, b_editor,b_pages,b_size, download_link,b_catagory,b_slug }) => {
//   return (
//     <>
      
//         <div className="b_card flex bg-white gap-9 p-4 shadow-[2px_1px_8px_0px_#e3dfdf] rounded text-[16px] md:text-[20px]">
//           <div className="b_img max-w-[110px] md:max-w-[130px]">
//             <img src={b_imgurl} alt={b_title} />
//           </div>
//           <div className="b_info text-[18px]">
//             <p className='b_title text-[22px] font-bold'> বই: {b_title}</p>
//             <p> <span className='font-bold'>লেখক: </span> {b_author}</p>
//             {b_translator === "" ? null : 
//             <p><span className='font-bold'>অনুবাদ: </span> {b_translator}</p>}
//             {b_editor === "" ? null : 
//             <p><span className='font-bold'>সম্পাদনা: </span> {b_editor}</p>}
//             <p><span>পৃষ্ঠা: {b_pages}</span> <span>সাইজ: {b_size}</span></p>
//             {b_catagory.map((catagory) =>{ return <p className='bg-[#ffbb00] inline-block rounded-[50px] p-[2px_14px] text-[14px] mr-[5px]'>{catagory}</p>})} <br/>
//             <div className="b_btns mt-3">
//             <Link to={`${b_slug}`}>
//             <p className='b_dtls_btn bg-slate-500 text-white p-[3px_10px] inline-block text-[16px] mr-[20px]'>বিস্তারিত</p>
//             </Link>
//             <p className='b_dtls_btn bg-slate-500 text-white p-[3px_10px] inline-block text-[16px]'>ডাউনলোড</p>

//             </div>
            
            
//           </div>
//         </div>
      

//     </>
//   )
// }

// export default bCard