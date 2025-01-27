'use strict';

import mongoose from "mongoose";

export const dbConnection = async ()=> {
    try {
        mongoose.connection.on('error', ()=>{
            console.log('MongoDB | Could not be connected to MongoDB');
            mongoose.disconnect();
        });

        mongoose.connection.on('open', ()=>{
        console.log('MongoDB | conected to db');
        });

        mongoose.connection.on('open', ()=>{
            console.log('MongoDB | conected to db');
        });
    
        mongoose.connection.on('disconected', ()=>{
            console.log('MongoDB | disconected');
        });

        mongoose.connection.on('reconected', ()=>{
        console.log('MongoDB | reconected MongoDB');
        });

        mongoose.connection.on('open', ()=>{
            console.log('MongoDB | conected to db');
        });
    
        mongoose.connect(process.env.URI_MONGO, {
            serverSelectionTimeoutMS: 5000,
            maxPoolSize: 50,
        });
    } catch (error) {
        console.log('database connection failed', error);
    }
}