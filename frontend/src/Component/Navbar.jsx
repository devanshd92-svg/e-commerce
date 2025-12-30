import React, { useState, useContext } from "react";

import { IoMdCart } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "./Contextapi/CartProvider.jsx";
import { useAuth } from "./Contextapi/AuthProvider.jsx";

const Navbar = () => {
  const { cart, removeFromCart, updateQuantity, subtotal } = useContext(CartContext);
  const [opendropdown, setopendropdown] = useState(false);
  const { isAuthenticated, email, logout } = useAuth();

  const totalItems = cart.reduce((a, c) => a + c.quantity, 0);

  const navigate = useNavigate();
  const [opendown, setOpendown] = useState(false);

  // const token = localStorage.getItem("token");
  // const email = localStorage.getItem("email");

  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/Register";




  const handleLogout = () => {
    // localStorage.removeItem("token");
    // localStorage.removeItem("email");
    logout();
    setOpendown(false);
    navigate("/login");
  };


  const totalcourse = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )



  return (
    // <nav className="flex flex-col md:flex-row items-center justify-around bg-amber-50 absolute top-0 z-10 w-full rounded-b-4xl min-h-15" 
    // >
    <nav
      className={`flex flex-col md:flex-row items-center justify-around absolute top-0 z-10 w-full min-h-15
    ${isAuthPage ? "bg-transparent shadow-none " : "bg-amber-50 rounded-b-4xl"}
  `}
    >


      <NavLink to="/">
        <img
          className="hidden md:block w-[120px] h-[100px]"
          src="/logo.webp"
          alt="logo"
        />
      </NavLink>


      <div className="flex gap-2 border rounded-full px-4 py-2">
        {["/", "/Course", "/Insight", "/Contact"].map((path, i) => (
          <NavLink
            key={i}
            to={path}
            className={({ isActive }) =>
              `rounded-full px-7 py-2 font-bold drop-shadow-lg ${isActive ? "bg-blue-200" : "hover:bg-blue-200"
              }`
            }
          >
            {path === "/" ? "Home" : path.replace("/", "")}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center gap-5">

        <div className="flex  gap-4 relative">
          <IoMdCart
            onClick={() => setopendropdown(!opendropdown)}
            className="w-10 h-8 cursor-pointer"
          />

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {totalItems}
            </span>
          )}

          {opendropdown && (
            <div className=" absolute w-[300px] bg-white shadow-2xl  top-12 right-0 border p-4 rounded-md z-50 h-auto flex flex-col gap-1  ">
              <h1 className="flex justify-between items-center text-xl font-semibold mb-4">
                Shopping Cart
                <CgClose
                  className="cursor-pointer"
                  onClick={() => setopendropdown(false)}
                />
              </h1>

              {cart.length === 0 ? (
                <p className="text-gray-500 text-center">Cart is empty</p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item._id}
                    className="flex flex-col mb-2 text-sm border-b pb-2 gap-5"
                  >
                    <div className="flex justify-center flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <div className="truncate w-40  ">{item.title} </div>
                        <MdDelete onClick={() => { removeFromCart(item._id) }} className="text-lg text-red-600" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1 text-xs text-gray-600">{item.quantity} <p className=" text-gray-600">course</p> </div>
                        <div className="flex  font-semibold  font-sans gap-2 ">
                          <span className="text-sm">Item Total :</span>

                          <span className="text-sm">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>

                ))
              )}

              <div className="flex flex-col">
                {cart.length > 0 && (
                  <div className="flex gap-2 font-bold    items-center text-sm">
                    <span className="text-sm">Subtotal :</span>

                    <span className="text-sm">${subtotal.toFixed(2)}</span>
                  </div>
                )}

                {cart.length > 0 && (
                  <div className="flex items-center gap-1 text-sm">{totalcourse} <p className=" text-gray-600">course</p> </div>
                )}
              </div>
              {cart.length > 0 ? (
                <NavLink to="/ViewCart">
                  <button
                    onClick={() => setopendropdown(false)}
                    className="w-full bg-blue-500 text-white py-1 mt-4 rounded"
                  >
                    View Cart →
                  </button>
                </NavLink>
              ) : (
                <NavLink to="/Course">
                  <button
                    onClick={() => setopendropdown(false)}
                    className="w-full bg-blue-500 text-white py-1 mt-4 rounded"
                  >
                    Browse Course
                  </button>
                </NavLink>
              )}


            </div>
          )}
        </div>


        <div className="flex gap-2">
          {!isAuthenticated ? (

            <NavLink to="/login">
              <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700">
                Login
              </button>
            </NavLink>
          ) : (

            <div className="relative">
              <div
                onClick={() => setOpendown(!opendown)}
                className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full cursor-pointer uppercase"
              >
                {email?.charAt(0)}
              </div>

              {opendown && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md">
                  <p className="px-4 py-2 text-sm text-gray-600 truncate">
                    {email}
                  </p>
                  <hr />
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          <NavLink to={"/Register"}>
            <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700">
              Register
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


