import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"
import { Movie } from "./Movie"
import { Contact } from "./Contact"

export const Main75 = () => {

  const router = createBrowserRouter([
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
      element: <Movie />
    },
    {
      path: "/contact",
      element: <Contact />
    },
  ])

  return <RouterProvider router={router} />
}