import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import Cardbook from './c_components/Cardbook'
import { fetch_book_datas } from '../redux/actions/Actions'
import Uploadbook from '../dashboard/bookCrudpages/Uploadbook'
import Books from '../pages/bookPage/Books'
import EditBookandNav from './c_components/EditBookandNav'

const Cbooks = () => {
    const book_data = useSelector((state)=>state.book_reducers.books)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetch_book_datas())
  },[]) 

  console.log('this books product',book_data)

  return (
      <>
      <Uploadbook/>
      <div className="arti_card">
       <EditBookandNav />
       </div> 
      </> 
  )
}
export default Cbooks