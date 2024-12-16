import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"
import { Movie } from "./Movie"
import { Contact } from "./Contact"
import { AppLayout } from "./Components/Layout/AppLayout"
import "../App.css"
import { ErrorPage } from "./ErrorPages"
import { getMoviesData } from "./api/GetAPIData"
import { MovieDetails } from "./Components/UI/MovieDetails"

export const Main86 = () => {

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
          path: "/movie/:movieID",
          element: <MovieDetails />,
        },
        {
          path: "/contact",
          element: <Contact />
        },
      ]
    },

  ])

  return <RouterProvider router={router} />
}