import mongoose from 'mongoose'

const ConnectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB Connected")
    } catch (error) {
        console.error(`Error in DB: ${error.message}`)
        process.exit(1)
    }
}

export default ConnectDB
