
var express = require('express');
var router = express.Router();
var Article = require('../models/dataSchema');


router.post('/create',(req, res, next)=>{
    var newArticle = new Article({
        title: req.body.title,
        name: req.body.name,
        imageURL: req.body.imageURL,
        description: req.body.description,
        content: req.body.content,
        createdAt: req.body.createdAt

    });

    newArticle.save((err, article)=>{
        if(err)
            res.status(500).json({errmsg: err});
        res.status(200).json({msg: article});
    });
    
});

router.get('/read',(req, res, next)=>{
    Article.find({},(err,articles)=>{
        if(err)
            res.status(500).json({errmsg: err});
        res.status(200).json({msg: articles});
    });
    
});

router.put('/update',(req, res, next)=>{
    Article.findById(req.body._id,(err,article)=>{
        if(err)
            res.status(500).json({errmsg: err});
        article.title= req.body.title;
        article.name= req.body.name;
        article.imageURL= req.body.imageURL;
        article.description= req.body.description;
        article.content= req.body.content;
        article.createdAt= req.body.createdAt;
        article.save((err,article)=>{
            if(err)
                res.status(500).json({errmsg: err});
            res.status(200).json({msg: article});

        });
        
    })
});

router.delete('/delete/:id',(req, res, next)=>{
    Article.findOneAndRemove({_id:req.params.id},(err, article)=>{
        if(err)
            res.status(500).json({errmsg: err});
        res.status(200).json({msg: article});
    });
});



module.exports =router;