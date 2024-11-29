import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv()

let URLDB = "mongodb+srv://rebecamargaritacruz1:JAZdqcWQi5YNrW2n@cluster0.luqdv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const MongoConexion = async () => {
    
    try {
        
        await mongoose.connect(URLDB)
        console.log("conexion exitosa a la base de datos");
        

    } catch (error) {
        console.error(error);
        
    }
    
}

export default MongoConexion