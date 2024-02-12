import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// 1 - Configurando router
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import ContactDatails from "./routes/ContactDatails.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home></Home>,
//   },
//   {
//     path: "/Contact",
//     element: <Contact></Contact>,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // 3 - Página de erro
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      // 5 - masted routes - identificador único - dymic routes
      {
        path: "/contact/:id",
        element: <ContactDatails></ContactDatails>,
      },
      // 7 - Navigate para páginas inexistentes
      // Semelhante ao hook navigate 
      // aproveitar o tráfico
      {
        path: "oldcontact",
        element: <Navigate to={"/contact"}></Navigate>
      }
    ],
  },
  {
    path: "/Contact",
    element: <Contact></Contact>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
