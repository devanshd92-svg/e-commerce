import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Component/Contextapi/AuthProvider";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleonchange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      login(data.token, formData.email)
      //   localStorage.setItem("token", data.token);
      //   localStorage.setItem("email", formData.email);

      // ✅ REDIRECT ONLY AFTER SUCCESS
      const redirectTo = location.state?.from || "/";
      navigate(redirectTo);

    } catch (err) {
      console.error(err);
      setError("Server error");
    }
  };

  return (
    <div className="  min-h-screen flex items-center justify-center  bg-[url('/sarah-dorweiler-x2Tmfd1-SgA-unsplash.jpg')]  bg-cover bg-center bg-no-repeat   " >


      <form onSubmit={handleSubmit} className="  bg-white p-6  shadow-md w-100 flex gap-5 flex-col rounded-md italicshadow-[5px_5px_5px_black]">
        <h1 className="text-2xl font-sans text-center  font-bold">Welcome Back</h1>
        <p className="text-lg font-sans text-center text-gray-500 ">Sign in to access your dashboard.</p>
        {/* <h2 className="text-2xl font-bold mb-4 text-center">Login</h2> */}

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}



        <div className='flex flex-col'>
          <label htmlFor="email" className='text-sm mb-1 '>Enter your Email</label>

          {/* <input type="email" name='email' onChange={handleonchange} value={formData.email} placeholder="Enter Email" className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E40AF] border-gray-300' /> */}
          <Input placeholder='Enter Email' type="email" name='email' onChange={handleonchange} value={formData.email} className="focus:outline-none" />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="subject" className='text-sm mb-1 '>Enter your Password</label>

          {/* <input type="password" name='password' autocomplete="current-password"
            onChange={handleonchange} value={formData.password} placeholder="Enter Password" className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E40AF] border-gray-300' /> */}

          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              name="password"
              value={formData.password}
              placeholder='Enter Password'
              onChange={handleonchange}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>


        </div>


        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

        <p className="text-sm font-sans  text-center text-gray-600 flex justify-center gap-2"> Don't have an account?  <NavLink to={"/Register"}> <p className="text-blue-500">Sign up</p> </NavLink></p>
      </form>
    </div>
  );
};

export default Login;
