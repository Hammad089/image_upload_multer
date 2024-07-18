import express from 'express';
import { ImageRetrieve, ImageUpload } from '../controllers/imageController.js';
import upload from '../imageConfig/imageConfig.js';
const router = express.Router();
router.post('/image-upload',upload.single('image'),ImageUpload);
router.get('/image-upload/:id',ImageRetrieve)
export default router