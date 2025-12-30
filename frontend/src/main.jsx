import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import CartProvider from './Component/Contextapi/CartProvider.jsx';
import AuthProvider, { AuthContext } from './Component/Contextapi/AuthProvider.jsx';
import { ChakraProvider } from '@chakra-ui/react'
import SearchProvider from './Component/Contextapi/SearchProvider.jsx';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider>
      <ChakraProvider resetCSS={false}>
        <BrowserRouter>
          <CartProvider>
            <AuthProvider>

              <App />


              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

              />
            </AuthProvider>
          </CartProvider>
        </BrowserRouter>
      </ChakraProvider>
    </SearchProvider>
  </StrictMode>,
)
