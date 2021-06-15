var mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')


var articleSchema = new mongoose.Schema({
    title: {
        required: true,
        type : String
    },
    name: {
        required: true,
        type : String
    },
    imageURL: {
        required: true,
        type : String
    },
    description: {
        type : String
    },
    content: {
        type : String,
        required : true
    },
    createdAt :{
        type: Date,
        default : Date.now
    },
    slug: {
        type : String,
        required : true,
        unique : true
    },
});

articleSchema.pre('validate', function(next){
    if(this.title){
        this.slug = slugify(this.title, {lower: true, strict : true})
    }

    next()
});

module.exports = mongoose.model('article', articleSchema);
