import mongoose from 'mongoose'
const bookSchema = new mongoose.Schema({
    book_title: {
        type: String,
        require: true
    },
    book_author: {
        type: String,
        require: true
    },
    book_translator: {
        type: String,
        require: true
    },
    book_editor: {
        type: String,
        require: true
    },
    book_publication: {
        type: String,
        require: true
    },
    book_imgurl: {
        type: String,
        require: true
    },
    book_page: {
        type: Number,
        require: true
    },
    book_volume: {
        type: Number,
        require: true
    },
    book_size: {
        type: Number,
        require: true
    },
    book_category:
    {
        type: Map,
        require: true
    },
   
    // book_isPublished:{
    //     type: Boolean,
    //     require: true
    // },
    book_slug: {
        type: String,
        require: true
    },
    book_download_link: {
        type: String,
        require: true
    },
    book_description: {
        type: String,
        require: true
    },
    book_up_date: {
        type: Date,
        default: Date.now
    }
})
const data2 = mongoose.model("bookData", bookSchema);
export default data2;