//articles reducer
const initial_articles_data = {
    articale:[]
};
export const article_reducers = (state=initial_articles_data,{type,payload}) =>{ 
    switch (type) {
        case "FETCHING_ARTICLES_DATA":
            return {...state,articale:payload};
        default:
            return state;
    }
};

//book reducer
const inital_books_data = {
    books:[]
};
export const book_reducers = (state=inital_books_data,{type,payload}) =>{
    switch (type) {
        case "FETCHING_BOOKS_DATA":
            return {...state,books:payload};
        default:
            return state;
    }
};

//video reducer
const inital_videos_data = {
    videos:[]
};
export const video_reducers = (state=inital_videos_data,{type,payload}) =>{
    switch (type) {
        case "FETCHING_VIDEOS_DATA":
            return {...state,videos:payload};
        default:
            return state;
    }
};
//home reducer
const inital_home_data = {
    home:[]
};
export const home_reducers = (state=inital_home_data,{type,payload}) =>{
    switch (type) {
        case "FETCHING_HOME_DATA":
            return {...state,home:payload};
        default:
            return state;
    }
};
