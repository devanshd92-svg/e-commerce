import React, { useContext } from "react";

import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Component/Contextapi/CartProvider";
import { useAuth } from "../Component/Contextapi/AuthProvider";


const ViewCart = () => {

  const { isAuthenticated} = useAuth()
  const navigate = useNavigate();
   const isLoggedIn = !! isAuthenticated

  const { cart, removeFromCart, subtotal } = useContext(CartContext);

  const totalCourses = cart.reduce((t, i) => t + i.quantity, 0);

  const handleCheckout = () => {
  

    if (isLoggedIn) {
      // user logged in → payment
      navigate("/payment");
    } else {
      // user not logged in → register first
      navigate("/register", {
        state: { from: "/payment" }
      });
    }
  };


  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] gap-4">
        <FaShoppingCart className="text-7xl text-gray-300" />
        <h2 className="text-3xl text-gray-500">Your Cart is empty</h2>
        <p className="text-gray-400">
          Add some courses to your cart to get started.
        </p>
        <NavLink to="/Course">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
            Browse Courses
          </button>
        </NavLink>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <p className="text-gray-500">{totalCourses} courses in your cart</p>
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-sm p-6 flex justify-between"
            >
              <div className="space-y-2">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-blue-600 font-bold">
                  ${item.price.toFixed(2)}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>Quantity: {item.quantity}</span>
                  <span>
                    Subtotal: $
                    {(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item._id)}
                className="bg-red-500 text-white p-3 rounded-full h-fit"
              >
                <MdDelete size={20} />
              </button>
            </div>
          ))}


          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold mb-2">What you get:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✔ Certificate of completion</li>
              <li>✔ Mobile and desktop access</li>
            </ul>
          </div>
        </div>


        <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-2 text-sm">
            {cart.map((item) => (
              <div key={item._id} className="flex justify-between">
                <span className="truncate w-40">{item.title}</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span className="text-blue-600">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold"
          >
            {isLoggedIn
              ? "Go to Payment"
              : `Register & Checkout $${subtotal.toFixed(2)}`}
          </button>



          <p className="text-xs text-gray-500 text-center mt-3">
            Secure payment powered by Stripe
          </p>

          <NavLink
            to="/Course"
            className="block text-center text-blue-600 text-sm mt-4"
          >
            ← Continue Shopping
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;




