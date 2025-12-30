import mongoose from "mongoose";

async function connectdb() {

    try {
      await mongoose.connect(process.env.MONGO_URI)
     console.log("connectsucessdb");
     
    } catch (error) {
        console.log("coneccterror",error)
    }
}

export default connectdb;


// devanshd92_db_user
// t0360A8sUPiaZZUh