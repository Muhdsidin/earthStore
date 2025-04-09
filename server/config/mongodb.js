import mongoose from "mongoose";


const connectDB = async() =>{
    
    try {
        mongoose.connection.on('connected', ()=>{
            console.log("DB connected");
        })
        const connectionInstance = await mongoose.connect(`mongodb+srv://officialzedro:kH3btk42KbdT0LdA@zedro.lkefs1t.mongodb.net/?retryWrites=true&w=majority&appName=zedro`);

    } catch (error) {

        console.log(" while connecting DB ",error.message);
    }

}


export default connectDB