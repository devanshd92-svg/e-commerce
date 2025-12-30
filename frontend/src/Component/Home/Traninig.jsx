import React, { useEffect, useState, useContext } from "react";
import { IoMdCart } from "react-icons/io";

import { NavLink } from "react-router-dom";
import { CartContext } from "../Contextapi/CartProvider";
import { SearchContext } from "../Contextapi/SearchProvider";

const Traninig = () => {
  const { cart, addToCart, removeFromCart, updateQuantity, } = useContext(CartContext);
  const { searchtext } = useContext(SearchContext)

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/courses?search=${searchtext}`)
      .then((res) => res.json())
      .then((data) => setCourses(data.data));
  }, [searchtext]);


  const getCartItem = (courseId) =>
    cart.find((item) => item.courseId === courseId);

  // const Filterdata = courses.filter((item) =>
  //   item.title.toLowerCase().includes(Searchtext.toLowerCase())

  // )

  return (
    <div className="bg-blue-50 min-h-screen pt-10 text-center">
      <h1 className="text-4xl font-bold">Mandatory Trainings</h1>
      <p className="text-2xl mt-2">
        Get certified in essential DOT compliance areas
      </p>


      <div className="flex justify-center gap-25 mt-20 flex-wrap">
        {courses.map((item) => {
          const cartItem = getCartItem(item._id);

          return (
            <div
              key={item._id}
              className="flex flex-col gap-3 p-2 h-120 w-100 border-gray-500 hover:border-blue-600 rounded-md border-2 transition-transform duration-300 scale-90 hover:scale-100"
            >
              <h2 className="text-lg font-semibold p-4">{item.title}</h2>
              <p className="text-gray-600 px-2">{item.description}</p>

              <button className="text-blue-600 mt-4 hover:underline">
                {item.viewText}
              </button>

              <hr className="my-4" />

              <div className="flex justify-around items-center h-45">

                <p className="text-lg font-sans">$ {item.price}</p>

                {cartItem ? (
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() =>
                          updateQuantity(cartItem._id, -1)
                        }
                        className="px-2 py-1 bg-gray-300 rounded"
                        disabled={cartItem.quantity === 1}
                      >
                        -
                      </button>

                      <span>{cartItem.quantity}</span>

                      <button
                        onClick={() =>
                          updateQuantity(cartItem._id, 1)
                        }
                        className="px-2 py-1 bg-gray-300 rounded"
                      >
                        +
                      </button>

                      <button
                        onClick={() =>
                          removeFromCart(cartItem._id)
                        }
                        className="px-6 py-1 bg-red-500 text-white rounded"
                      >
                        Remove
                      </button>
                    </div>



                    <div className="mt-2 text-sm font-semibold border-t pt-2 w-full flex justify-between items-center gap-2">
                      <span>Item Total :</span>
                      <span>
                        ${(item.price * cartItem.quantity).toFixed(2)}
                      </span>
                      <NavLink to="/ViewCart">
                        <div className="flex flex-col">
                          <button className="bg-blue-500 text-white px-1 rounded-md py-1">View Cart</button> </div>   </NavLink>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-[linear-gradient(80deg,#8cc5e4,#138dcf)] px-8 py-2 rounded-md text-white hover:scale-110 flex gap-2 items-center"
                  >
                    <IoMdCart /> Add to Cart
                  </button>
                )}
              </div>

              <p className="px-5 p-3 mt-4 bg-orange-50 rounded-md text-orange-800 text-sm border border-orange-200">
                {item.infoText}
              </p>
            </div>
          );
        })}

        {courses.length === 0 && (
          <p className="text-2xl text-gray-500 mt-10">
            No courses found
          </p>
        )}

      </div>
    </div>
  );
};

export default Traninig;
