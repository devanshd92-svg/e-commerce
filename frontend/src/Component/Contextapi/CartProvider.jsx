


import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  
  const fetchCart = async () => {
    const res = await fetch("http://localhost:3000/cart");
    const data = await res.json();
    setCart(data);
    console.log(cart)
  };

  
  const addToCart = async (course) => {
    await fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        courseId: course._id,
        title: course.title,
        price: course.price,
      }),
    });
    toast.success("Course added to cart ");
    fetchCart();
  };

   const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  
  const removeFromCart = async (id) => {
    await fetch(`http://localhost:3000/cart/${id}`, {
      method: "DELETE",
    });
     toast.success("Item removed from cart");
    fetchCart();
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = async (id, qty) => {
    await fetch(`http://localhost:3000/cart/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ qty }),
    });
    fetchCart();
  };

  useEffect(() => {
    fetchCart();
  }, []);

  

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart,updateQuantity,subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;