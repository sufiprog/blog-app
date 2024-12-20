import mongoose from 'mongoose'

const ConnectDB = async () => {
    try {
        const connection = await mongoose.connect("mongodb+srv://sufi:007007007@cluster0.dzu4v.mongodb.net/")
        console.log("DB Connected")
    } catch (error) {
        console.error(`Error in DB: ${error.message}`)
        process.exit(1)
    }
}

export default ConnectDB