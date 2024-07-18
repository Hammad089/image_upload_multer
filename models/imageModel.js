import mongoose, { Schema } from "mongoose";

const ImageSchemea = new Schema({
    image:{
        name: String,
        data: Buffer,
        contentType: String,
    }
})
const ImageData = mongoose.model('image-upload',ImageSchemea);
export default ImageData