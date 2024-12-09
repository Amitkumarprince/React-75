import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"
import { Movie } from "./Movie"
import { Contact } from "./Contact"
import { AppLayout } from "./Components/Layout/AppLayout"
import "../App.css"
import { ErrorPage } from "./ErrorPages"
import { NotFound } from "./NotFound"
import { getMoviesData } from "./api/GetApiData"

export const Main82 = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/movie",
          element: <Movie />, 
          loader: getMoviesData,
        },
        {
          path: "/contact",
          element: <Contact />
        },
        // {
        //   path: "*",
        //   element: <NotFound />
        // },
      ]
    },

  ])

  return <RouterProvider router={router} />
}