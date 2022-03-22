export const useSearch = (data, searchitem,num) =>{



    if(searchitem !== null){
        return data.filter((item)=>  Object.values(item)[num[0]].toLowerCase().includes(searchitem.toLowerCase()) || Object.values(item)[num[1]].toLowerCase().includes(searchitem.toLowerCase()))
    
    }

    else return data

}


        // data.filter((item) =>{
            
        //   if(searchitem === null) return item;
        //   else if(item.title.toLowerCase().includes(searchitem.toLowerCase()) ) {
        //     return data;
        //   }
        // })