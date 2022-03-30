import mongoose from 'mongoose';
const videoSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    imgurl:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true
    },
    category:[
        {
        type:String,
        require:true
        }
    ]
})
const data3 = mongoose.model("videoData",videoSchema);
export default data3; 