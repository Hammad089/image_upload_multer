
import ImageData from "../models/imageModel.js";
import mongoose from "mongoose";
export const ImageUpload = async(req,res) => {
    try {
        const newImage = new ImageData({
            name:req.file.originalname,
            data:req.file.buffer,
            contentType:req.file.mimetype
        })
        await newImage.save();
        
        res.send({
            success:true,
            ImageId:newImage._id
        })
    } catch (error) {
        res.status(500).send('Error uploading image');
    }
}

export const ImageRetrieve = async (req, res) => {
    try {
      const imageId = req.params.id;
      console.log('Image id', imageId);
  
      // Validate the ID
      if (!mongoose.Types.ObjectId.isValid(imageId)) {
        return res.status(400).send('Invalid image ID');
      }
  
      const image = await ImageData.findById(imageId);
  
      if (!image) {
        return res.status(404).send('Image not found');
      }
  
      res.set('Content-Type', image.contentType);
      res.send(image.data);
    } catch (error) {
      res.status(500).send('Error retrieving image');
    }
  };