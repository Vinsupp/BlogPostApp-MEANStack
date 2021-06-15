const mongoose = require('mongoose')

const URL = 'mongodb+srv://admin:1234@cluster0.coasv.mongodb.net/meanDb?retryWrites=true&w=majority';

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