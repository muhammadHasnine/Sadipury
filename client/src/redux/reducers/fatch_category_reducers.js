const inital_category1_data = {
    category1:[]
};
export const category1_reducers = (state=inital_category1_data,{type,payload}) =>{
    switch (type) {
        case "FATCHING_CATEGORY1_DATA":
            return {...state,category1:payload};
        default:
            return state;
    }
};
const inital_category2_data = {
    category2:[]
};
export const category2_reducers = (state=inital_category2_data,{type,payload}) =>{
    switch (type) {
        case "FATCHING_CATEGORY2_DATA":
            return {...state,category2:payload};
        default:
            return state;
    }
};
