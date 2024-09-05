import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import formidable from 'express-formidable'
import { blogPhotoController, CreateBlogController, deleteBlogController, GetBlogController, getSingleBlogController, updateBlogController } from '../controllers/blogController.js'

const router=express.Router()

//create blog routes
router.post('/create-blog',requireSignIn,isAdmin,formidable(),CreateBlogController)

//get blog controller
router.get('/get-blog',GetBlogController)

//get single product
router.get('/get-blog/:slug',getSingleBlogController)

//get photo
router.get('/blog-photo/:pid',blogPhotoController)

//delete product
router.delete('/delete-blog/:pid',requireSignIn,isAdmin,deleteBlogController)

//update  product
router.put('/update-blog/:pid',requireSignIn,isAdmin,formidable(),updateBlogController)

export default router;
