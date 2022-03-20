import mongoose from 'mongoose';
const articleSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    imgurl:{
        type:String,
        require:true
    },
    downloadLink:{
        type:String,
        require:true
    },
    category:[
        {
            type:String,
            require:true
        }
    ],
    desc:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    }
});


const data1 = mongoose.model("articleData",articleSchema);


export default data1;