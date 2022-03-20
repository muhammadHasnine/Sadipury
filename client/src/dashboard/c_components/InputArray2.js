import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { fatch_category2_datas } from '../../redux/actions/Actions'
const InputArray2 = () => {
    const dispatch = useDispatch()
    const cat_array2 = ["লিখিত","সম্পাদিত","অনুবাদিত"]

    const array =cat_array2

    const displayarray = []

    const [first, setfirst] = useState(displayarray)


    const addbtn = (i) => {
        const check = first.every(item => {
            return item !== i
        })
        if (check) {
            first.push(i)
        }


        setfirst([...first])
        // console.log(displayarray)
        console.log(first)

    }

    dispatch(fatch_category2_datas(first))


    return (

        <div>
            
            <div className='flex flex-wrap gap-3 justify-evenly bg-[#ffffff] rounded-[5px] p-[0px_10px] '>
                {array.map((item) => {
                    return <p className='cursor-pointer' onClick={() => addbtn(item)}>{item}</p>
                })}
              
            </div>
            <div className='flex flex-wrap gap-3 justify-evenly bg-[#ffffff] rounded-[0px_0px_5px_5px] p-[0px_10px]'>
            
                {first.map((i) => {
                    return <p>{i}</p>
                    })}
            </div>
        </div>
    )


}


export default InputArray2