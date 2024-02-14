import dotenv from 'dotenv'

const envFound = dotenv.configDotenv()

if(envFound.error){
    throw new Error('error on dotenv')
}

export default {
    port: process.env.PORT || 3000,
    mongoDB: process.env.MONGODB_URI,
    jwtPass: process.env.JWT_SECRET,
}