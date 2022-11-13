import mongoose from 'mongoose';

const Connection = async () => {
    try{
        mongoose.connect('mongodb+srv://devteamenquire:Enquire@369@cluster0.cmyck7w.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true});
      
        console.log('Database Connected Succesfully');
    }   
    catch(error){
        console.log("Error: ", error.message)
    }
};

export default Connection;