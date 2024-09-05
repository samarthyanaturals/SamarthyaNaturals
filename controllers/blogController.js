import BlogModel from "../models/BlogModel.js";
import fs from 'fs'
import slugify from "slugify";
import mongoose from "mongoose";


//create new blogs
export const CreateBlogController = async (req, res) => {
    try {
        const { title, description, content } = req.fields;
        const { thumbnail } = req.files;

        //validation
        switch (true) {
            case !title:
                return res.status(500).send({success:false, message: "title is Required" });
            case !description:
                return res.status(500).send({ success:false, message: "description is Required" });
            case !content:
                return res.status(500).send({ success:false, message: "content is Required" });
            case thumbnail && thumbnail.size > 10000000:
                return res
                    .status(500)
                    .send({success:false, message: "thumbnail is Required and should be less then 10mb" });
        }

        const blogs = new BlogModel({ ...req.fields, slug: slugify(title) });
        if (thumbnail) {
            blogs.thumbnail.data = fs.readFileSync(thumbnail.path);
            blogs.thumbnail.contentType = thumbnail.type;
        }
        await blogs.save();
        res.status(200).send({
            success: true,
            message: "Blog Created Successfully",
            blogs,
        })


    } catch (error) {
        console.log(error);
        res.status(501).send({
            success: false,
            error,
            message: "Error in creating blog",
        });
    }
}
//get blog controller
export const GetBlogController = async (req, res) => {
    try {
        const blogs = await BlogModel.find({}).select('-thumbnail').sort({ createdAt: -1 })
        res.status(200).send({
            success: true,
            message: "Blogs fetched successfull",
            countTotal: blogs.length,
            blogs
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error while getting product',
            error
        })
    }
}


//single blog controller
export const getSingleBlogController = async (req, res) => {
    try {
        const blog = await BlogModel.findOne({ slug: req.params.slug }).select('-thumbnail')
        res.status(200).send({
            success: true,
            message: 'Single product fetched',
            blog
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'error while getting blog',
            error
        })
    }
}

//get photo controller
export const blogPhotoController = async (req, res) => {
    try {
        const blog = await BlogModel.findById(req.params.pid).select('thumbnail')
        if (blog.thumbnail.data) {
            res.set('content-type', blog.thumbnail.contentType)
            return res.status(200).send(blog.thumbnail.data)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error while getting photo',
            error
        })
    }
}

//delete Blog controller
export const deleteBlogController=async(req,res)=>{
    try{
       await BlogModel.findByIdAndDelete(req.params.pid).select("-thumbnail")
       res.status(200).send({
        success: true,
        message: "Product Deleted Successfully"
    })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({
            success: true,
            message: 'Error while deleting photo',
            error
        })
    }
}

//update blog controller
export const updateBlogController = async (req, res) => {
    try {
        const { title, description, content} =req.fields;
        const { thumbnail } = req.files;
        //validation
        switch (true) {
            case !title:
                return res.status(500).send({ error: "title is Required" });
            case !description:
                return res.status(500).send({ error: "description is Required" });
            case !content:
                return res.status(500).send({ error: "content is Required" });
            case thumbnail && thumbnail.size > 1000000:
                return res
                    .status(500)
                    .send({ error: "thumbnail is Required and should be less then 1mb" });
        }

        const blogs = await BlogModel.findByIdAndUpdate(req.params.pid,
            { ...req.fields, slug: slugify(title) },
            { new: true }
        );
        if (thumbnail) {
            blogs.thumbnail.data = fs.readFileSync(thumbnail.path);
            blogs.thumbnail.contentType = thumbnail.type;
        }
        await blogs.save();
        res.status(201).send({
            success: true,
            message: "Blog Updated Successfully",
            blogs,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in Updating blog",
        });
    }
}