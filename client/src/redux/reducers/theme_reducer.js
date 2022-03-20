const inital_theme_data = {
    theme:[]
};
export const theme_reducers = (state=inital_theme_data,{type,payload}) =>{
    switch (type) {
        case "FATCHING_THEME_DATA":
            return {...state,theme:payload};
        default:
            return state;
    }
};