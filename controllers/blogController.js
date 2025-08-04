const Blog = require('../models/Blog')
const fs = require('fs');
const path = require('path')



class BlogControlle {

    //crate city

    async create(req, res){

        const {title, image, content, short_des, slug} = req.body;

        if(!title) return res.status(400).json({message: "Title is required."});
        

        let post = null;

        try {
            post = Blog.findOne({slug: slug});
            
            if(post._id) return res.status(400).json({message: 'Title already exist'});
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Server Error."})
        }

        let imagePath = '';
        if(image){
            try {
                const buffer = Buffer.from(image.replace(/^data:image\/(png|jpg|jpeg|pdf);base64/, ''), 'base64');
                const fileExt = image.split(';')[0].split('/')[1];
                const filePath = `/uploads/blog/${Date.now()}-${slug}.${fileExt}`;
    
                fs.writeFileSync(path.resolve(__dirname, `../${filePath}`), buffer, {encoding: 'base64'}, (err, r) => {
                   console.log('...')
                })
    
                imagePath = `${process.env.BASE_URL}${filePath}`;
            } catch (error) {
                console.log(error);
                return res.status(500).json({message: "Error while uploading image"})
            }

        }

        try {
            const post = await Blog.create({...req.body, image: imagePath});
            res.status(200).json({sucess: true, post})
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Internal server error"})
        }

    }

    //gell all cities
    async getAll(req, res){

        const {page} = req.params;
        let skipCount = 0;
        const {s} = req.query;
        console.log(s)

        let filter = {}

        if(page){
            skipCount = (page - 1) * 6;
        }

        if(s){
            let term = "$or";
            filter[term] = [
                {title: new RegExp(s, 'i')},
            ]
        }

        try {
            const posts = await Blog.find(filter).skip(skipCount).limit(6);
            const total = await Blog.find(filter);
            res.status(200).json({posts, total: total.length})
        } catch (error) {
             
            res.status(500).json({message: "Internal server error"})
        }
        
    }

    //get city by id

    async getById (req, res){

        const {id} = req.params;

        if(!id) return res.status(400).json({message: 'Post ID is Required.'});

        try {
            const post = await Blog.findOne({_id: id});
            if(post){
                res.status(200).json({post})
            }else{
                res.status(404).json({message: 'Pos Not Found.'})
            }
        } catch (error) {
            res.status(500).json({message: "Server error"})
        }
    }

    //edit city
    async edit(req, res){

        const {editImage} = req.body;
        const {id} = req.params;
        let post;
        

        try {
            post = await Blog.findOne({_id: id});
            if(!post){
                return res.status(404).json({message: "Post Not Found."})
            } 
        } catch (error) {
            return res.status(500).json({message: "Server error"})
        }
        let imagePath = post.image;
        let title = post.title;

        let newSlug = req.body.slug;

        try {
            let epost = Blog.findOne({slug: newSlug});
            
            if(epost._id) return res.status(400).json({message: 'Title already exist'});
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Server Error."})
        }

        if(editImage){

            try {
                const buffer = Buffer.from(editImage.replace(/^data:image\/(png|jpg|jpeg|pdf);base64/, ''), 'base64');
                const fileExt = editImage.split(';')[0].split('/')[1];
                const filePath = `/uploads/blog/${Date.now()}-${title}.${fileExt}`;
    
                fs.writeFileSync(path.resolve(__dirname, `..${filePath}`), buffer, {encoding: 'base64'}, (err, r) => {
                   console.log('...')
                })
    
                imagePath = `${process.env.BASE_URL}${filePath}`;
            } catch (error) {
                console.log(error)
                return res.status(500).json({message: "Error while uploading image"})
            }

        }

        try {
            const updatedPost = await Blog.findOneAndUpdate({_id: id}, {$set: {...req.body, image: imagePath, slug: newSlug}}, {upsert: false, returnDocument: 'after'})
            res.status(200).json({updatedPost})
        } catch (error) {
            res.status(500).json({message: "Server error"}) 
        }
    }

    //delete city

    async delete (req, res){

        const {id} = req.params;
        if(!id) return res.status(400).json({message: "Post ID is required"})

        try {
            const post = await Blog.findOne({_id: id});
            if(!post) return res.status(400).json({message: "Post Already Deleted"});
            let deleted = await Blog.findOneAndDelete({_id: id});
            return res.status(200).json({message: "Post Deleted"})
        } catch (error) {
            res.status(500).json({message: "Server Error"})
        }

    }

    async getPostBySlug (req, res) {
        try {
            const post = await Blog.findOne({slug: req.params.slug});
            return res.json({post})
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Server Error"})
        }
    }
}

module.exports = new BlogControlle;