const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary')

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_KEY,
  api_secret:process.env.CLOUDINART_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder: 'ssnclubs',
        allowedformats:['jpg','png','jpeg']
    }
});


module.exports={
    cloudinary,
    storage
}