import { connect } from 'mongoose';
import config from "../config";

export const connectDB = async () => {
    try{
        await connect(config.mongoDB as string)
        console.log('database connected!!')
    }catch(error){
        console.log('Failed to conect db')
    }
}