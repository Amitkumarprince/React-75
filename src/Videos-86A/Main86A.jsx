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
import { getMoviesDetails } from "./api/GetMovieDetails"

export const Main86A = () => {

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
          loader: getMoviesDetails,
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