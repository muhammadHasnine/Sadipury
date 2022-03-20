import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({book_title,book_imgurl,book_author,id,download_link}) => {
  return (
    <>
<Link to={`${book_title}`}>
        <div className="arti_container">
          <div className="arti_imge">
            <img src={book_imgurl} alt={book_title} />
          </div>
          <div className="arti_info">
            <p className='arti_title'>{book_title}</p>  
            <p>{book_author}</p> 
              <a className='arti_button'>Details</a>          
          </div>  
        </div>
        </Link>
     
    </>
  )
}

export default BookCard