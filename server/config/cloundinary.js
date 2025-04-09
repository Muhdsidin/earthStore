import {v2 as cloudinary} from 'cloudinary';


const connectCloudinary = async () => {

    const cloudinaryConnectionInstance = await cloudinary.config({
        cloud_name: 'djmvsz8em', 
        api_key: '324891732384222', 
        api_secret: 'K8GfEtsReqCJ77-c9IkSLzF8dYM' // Click 'View API Keys' above to copy your API secret
    })

    

}

export default connectCloudinary;