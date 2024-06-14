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




const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
      >
        <Route index element={<Home/>} ></Route>
        <Route path='/contact' element={<ContactUS/>} ></Route>

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