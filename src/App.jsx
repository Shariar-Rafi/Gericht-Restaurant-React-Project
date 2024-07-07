import React from "react";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./componensts/layer/RootLayout";
import Home from "./componensts/page/Home";
import ContactUS from "./componensts/page/ContactUS";
import Service from "./componensts/page/Service";
import About from "./componensts/page/About";
import ErrorPage from "./componensts/page/ErrorPage";
import Faq from "./componensts/Faq";
import OurChef from "./componensts/page/OurChef";
import ChefDetails from "./componensts/page/ChefDetails";
import Blog from "./componensts/page/Blog";
import BlogsDetail from "./componensts/page/BlogsDetail";
import ComingSoon from "./componensts/page/ComingSoon";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
        // errorElement={<ErrorPage />}

      >
        <Route index element={<Home/>} ></Route>
        <Route path='/service' element={<Service/>} ></Route>
        <Route path='/about-us' element={<About/>} ></Route>
        <Route path='/contact-us' element={<ContactUS/>} ></Route>
        <Route path='/faq' element={<Faq/>} ></Route>
        <Route path='/our-chef' element={<OurChef/>} ></Route>
        <Route path='/chef-details' element={<ChefDetails/>} ></Route>
        <Route path="/our-blogs" element={<Blog/>} ></Route>   
        <Route path="/blogs-detail" element={<BlogsDetail/>} ></Route> 
        <Route path="/ComingSoon" element={<ComingSoon/>} ></Route>

      </Route>
    )
  );
  return (
   <>
     <RouterProvider router={router} />
   </>
  )
}

export default App