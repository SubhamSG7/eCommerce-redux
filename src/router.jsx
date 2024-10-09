import { createBrowserRouter } from "react-router-dom";
import axios from "axios";
import Home from "./Pages/Home";
import Wrapper from "./components/Wrapper";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import NotFound from "./Pages/NotFound";
import SingleProduct from "./Pages/SingleProduct";
import SingleBlog from "./Pages/SingleBlog";
import ProductLayout from "./components/ProductLayout";
import BlogLayout from "./components/BlogLayout";
import Signup from "./components/SignUp";
import Login from "./components/Login";

async function fetchProducts(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function fetchSingleProduct(event,url) {
  try {
    const response = await axios.get(url+event.params.id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}



const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/blog",
        element: <BlogLayout />,
        children: [
          {
            index: true,
            element: <Blog />,
          },
          {
            path: ":id",
            element: <SingleBlog />
         
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <ProductLayout />,
    
        children: [
          {
            index: true,
            element: <Product />
          
          },
          {
            path: ":id",
            element: <SingleProduct />,
      
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path:"/login",
        element:<Login/>
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;