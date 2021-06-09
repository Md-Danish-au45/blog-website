const mongoose = require('mongoose');
const Review =  require('./review')


const blogSchema  = new mongoose.Schema(
    {
    title : {
        type: String,
        required :true,
    },
    img : {
        type: String,
    },
    bodycontent : {
        type : String,
    },
    writer : {
        type: String,
        required : true,
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]

}
);

const Blog = mongoose.model('blog', blogSchema);

module.exports = Blog;
