
import mongoose, { Mongoose } from "mongoose";
// import User from "../Modules/User.Schemas.js";



import Course from "../Modules/Course.schema.js";


export async function createCourse(req, res) {
  console.log("REQ BODY:", req.body); //

  try {
    const course = await Course.create(req.body);
    res.status(201).json({ success: true, course });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}



// export async function getCourses(req, res) {
//   try {
//     const courses = await Course.find();
//     res.status(200).json({ data: courses });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// }

export async function getCourses(req, res) {
  try {
    const { search } = req.query;

    let query = {};

    if (search) {
      query = {
        title: { $regex: search, $options: "i" }, 
      };
    }

    const courses = await Course.find(query);

    res.status(200).json({ data: courses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}





export async function deleteCourse(req, res) {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}






































// export async function getAllProducts(req, res) {
//   try {
//     const data = await User.find();
//     res.status(200).json({ data });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// }



// import User from "../Modules/User.schemas.js";


// export async function Recivcedata(req, res) {

//     console.log("data", req.body);
//     const { price, title } = req.body
//     if (!price || !title) {
//         return res.status(401).json({ message: "error", error: "data is not find" })

//     }
//     // const newUser = new User({ name: name, email: email })
//     try {
//         // await newUser.save()
//         return res.status(201).json({ message: "success", success: "data is find" })
//     } catch (error) {
//         console.log("error", error)

//     }

// }

//  "show all the data products"
  // export async function uploadeddata(req,res) {
  //    const data = await User.find()
  //   res.json({data:data})
    
  // }

// "create the products and show the image"
// export async function  uploadandImage(req, res) {
//     const { price, title } = req.body
//     if (!price || !title) {
//         return res.status(400).json({ message: "error", error: "data is not find" })



//     }

      
//     const imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;
//      const newUser = new User ({price,title,image:imageUrl})
//       await newUser.save()
//       res.status(201).json({ message: "Image and data uploaded successfully", imageUrl });
//     console.log("Saved:", { title, price, imageUrl });

    




// }



// export async function uploadandImage(req, res) {
//   const { title, price } = req.body;

//   if (!title || !price) {
//     return res.status(400).json({ message: "All fields required" });
//   }

//   const newUser = new User({ title, price });
//   await newUser.save();

//   res.status(201).json({
//     success: true,
//     message: "Product created successfully",
//   });
// }



// export async function deleteproduct(req,res) {


//   try {
//       const {id} = req.params
//    if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({message:"id is invalid"})

//     }
//    const data = await User.findByIdAndDelete(id)

//    if (!data) {
//     return res.status(404).json({message:"user is not found"})

    
//    }
// return res.status(200).json({message:"user is delect from db",data})



//   } catch (error) {
//             console.error("Error in getdata:", error);
//         return res.status(500).json({ message: "Server error" });
    
//   }
 
   
   

  
  
// }


// export async function updateandedit(req,res) {
// const {id} =req.params
// const {title,price}=req.body

//  if (!title || !price ) return res.status(400).json({message: "Field cannot be empty"})

//         try {
//             await User.findByIdAndUpdate(id, {title,price})
//             return res.status(200).json({message: "Updated Successfully",success:true})
//         } catch (error) {
//             console.log("Error in update user", error);
//         }

  
// }

// export async function updateProduct(req, res) {
//   const { id } = req.params;
//   const { title, price } = req.body;

//   if (!title || !price) {
//     return res.status(400).json({ success: false, message: "All fields required" });
//   }

//   try {
//     let imageUrl;

//     // if new image uploaded
//     if (req.file) {
//       imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;
//     }

//     // update the document
//     const updatedProduct = await User.findByIdAndUpdate(
//       id,
//       {
//         title,
//         price,
//         ...(imageUrl && { image: imageUrl }),
//       },
//       { new: true }
//     );

//     if (!updatedProduct) {
//       return res.status(404).json({ success: false, message: "Product not found" });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Updated successfully",
//       product: updatedProduct,
//     });
//   } catch (err) {
//     console.log("Error updating product:", err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// }