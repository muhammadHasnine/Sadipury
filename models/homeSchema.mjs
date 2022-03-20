import mongoose from 'mongoose';

const homeSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    imgurl:{
        type:String,
        require:true
    },
    socialImgandLink:
    {
    type:[Map],
    require:true
    }

});


const data1 = mongoose.model("homeData",homeSchema);


export default data1;