import express from "express"
import { createCourse, deleteCourse, getCourses,  } from "../Controlers/Controlers.js";
import { addToCart, deleteFromCart, getCart, updateCartQuantity } from "../Controlers/cart.controlers.js";
import { Recivcedata } from "../Controlers/Register.controlers.js";
import { Login } from "../Controlers/Login.controlers.js";
// import multer from "multer";
const router = express.Router();


// const storage= multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"uploads/");
//     },
//       filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname); 
//   }
// })
// const upload =multer({storage:storage});
router.post("/register" ,Recivcedata)
router.post("/login" ,Login)

router.post("/create-course", createCourse);
router.get("/courses", getCourses);
router.delete("/course/:id", deleteCourse);

router.get("/cart", getCart);
router.post("/cart", addToCart);
router.delete("/cart/:id", deleteFromCart);
router.patch("/cart/:id", updateCartQuantity);






// router.get("/products", getAllProducts); 
// router.get("/",uploadeddata)
// router.post("/Image",upload.single("profilePic"),uploadandImage)
// router.post("/create", uploadandImage)

// router.post("/postreq",Recivcedata)
// router.delete("/delete/:id",deleteproduct)
// router.put("/update/:id",upload.single("image"),updateProduct)



export default router