import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import formidable from 'express-formidable'
import { bannerPhotoController, createBannerController, getAllBannerController } from '../controllers/bannerController.js'



const router=express.Router()
//create banner
router.post('/create-banner',requireSignIn,isAdmin,formidable(),createBannerController)

//get all banner
router.get('/get-banner',getAllBannerController)

//get banner photo
//get photo
router.get('/banner-photo/:pid',bannerPhotoController)

export default router