import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const EditbookCard = ({book_title,book_imgurl,book_author,id}) => {
  const deletedata = (id) =>{
    axios.delete(`/api/deletebook/${id}`)
  } 
  return (
    <>

        <div className="arti_container">
          <div className="arti_imge">
            <img src={book_imgurl} alt={book_title} />
          </div>
          <div className="arti_info">
            <p className='arti_title'>{book_title}</p>  
            <p>{book_author}</p> 
            <Link to={`/admin/books/editbook/${id}`}>
              <a className='arti_button'>Edit</a> 
            </Link>       
            <a className='cursor-pointer arti_button' onClick={()=>deletedata(id)}>Delete</a> 
          </div>  
        </div>
     
    </>
  )
}

export default EditbookCard