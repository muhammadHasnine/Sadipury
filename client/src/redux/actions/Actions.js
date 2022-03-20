import API from "../../apis/fakeapies"
//artivale action
export const fetch_article_datas = ()=> async (dispatch)=>{  
        const respo = await API.get("/getarticles");
        dispatch({ 
            type:"FETCHING_ARTICLES_DATA",
            payload:respo.data});
    };
    //book action
export const fetch_book_datas = ()=> async (dispatch)=>{  
        const respo = await API.get("/getbooks");
        dispatch({ 
            type:"FETCHING_BOOKS_DATA",
            payload:respo.data});
    };
    //video action
export const fetch_video_datas = ()=> async (dispatch)=>{  
        const respo = await API.get("/getvideos");
        dispatch({ 
            type:"FETCHING_VIDEOS_DATA",
            payload:respo.data});
 };
export const fetch_home_datas = ()=> async (dispatch)=>{  
        const respo = await API.get("/gethome");
        dispatch({ 
            type:"FETCHING_HOME_DATA",
            payload:respo.data});
 };

 //category action
 export const fatch_category1_datas = (data)=> {
        return {
             type:"FATCHING_CATEGORY1_DATA",
             payload:data
            }
};
export const fatch_category2_datas = (data)=> {
    return {
         type:"FATCHING_CATEGORY2_DATA",
         payload:data
        }
};
export const fatch_theme_datas = (data)=> {
    return {
         type:"FATCHING_THEME_DATA",
         payload:data
        }
};

