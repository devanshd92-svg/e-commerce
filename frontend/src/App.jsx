
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Footer } from './Component/Footer.jsx'
import Navbar from './Component/Navbar.jsx'
import { footer } from './data.js'
import Home from './Pages/Home.jsx'
import Course from './Pages/Course.jsx'
import Insight from './Pages/Insight.jsx'
import Contact from './Pages/Contact.jsx'
import ScrollToTop from './Component/insight/ScrollToTop.jsx'
import AdminAddCourse from './Component/AdminAddCourse.jsx'
import ViewCart from './Pages/ViewCart.jsx'
import Signup from './Pages/Signup.jsx'
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
import ProtectedRoutes from './Component/ProtectedRoutes.jsx'
import Dashboard from './Component/Dashboard.jsx'
import Payment from './Pages/Payment.jsx'

function App() {





  return (
    <>
      <ScrollToTop />

      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Insight" element={<Insight />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='/admin' element={<AdminAddCourse />} />
        <Route path='/ViewCart' element={<ViewCart />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoutes> <Dashboard /></ProtectedRoutes>}
        />

        <Route
          path="/payment"
          element={
            <ProtectedRoutes>
              <Payment />
            </ProtectedRoutes>
          }
        />


      </Routes>



      <Footer h2={footer.h2} h1={footer.h1} h22={footer.h22} h23={footer.h23} h24={footer.h24} h25={footer.h25} h26={footer.h26} p1={footer.p1} p2={footer.p2} p3={footer.p3} p4={footer.p4} p5={footer.p5} p6={footer.p6} p7={footer.p7} p8={footer.p8} title={footer.title} image={footer.image} title1={footer.title1} />

    </>
  )
}

export default App
