import express ,{json, Router} from "express" 
import cors from "cors"

import dotenv from "dotenv"
import router from "./routes/Routers.js";  
import connectdb from "./Config/db.connect.js";
// import path from "path";
// import { fileURLToPath } from "url";

const app = express();
dotenv.config()


const port = process.env.PORT

const corsOptions={
    origin:"http://localhost:5173",
    methods:["GET","POST","PUT","PATCH","HEAD","DELETE"]
}
app.use(cors(corsOptions))

app.use(express.json()) 

app.use("/uploads", express.static("uploads"));
// app.use(express.static(""));

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.static(path.join(__dirname, "../frontend/dist")));

// app.get("/api", (req, res) => {
//   res.json({ message: "API is working" });
// });

// // For any other route, serve React index.html
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
// });


app.use("/",router)

connectdb()



app.listen(port,()=>{
    console.log(`console log${port}`)
})
