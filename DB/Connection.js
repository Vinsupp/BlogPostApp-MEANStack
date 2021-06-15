const mongoose = require('mongoose')

const URL = 'Your MongoDb Atlas Link';

const connectDB = async () =>{
    try{
        await mongoose.connect(URL,{ 
            useNewUrlParser: true ,
            useUnifiedTopology: true, 
            useCreateIndex: true
        });
        console.log('db connected..!')
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB
