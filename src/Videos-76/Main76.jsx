import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { About } from "./About"
import { Home } from "./Home"
import { Contact } from "./Contact"
import { Movie } from "./Movie"

export const Main76 = () => {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />
  //   },
  //   {
  //     path: "/about",
  //     element: <About />
  //   },
  //   {
  //     path: "/movie",
  //     element: <Movie />
  //   },
  //   {
  //     path: "/contact",
  //     element: <Contact />
  //   },
  // ])


  // old way
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Route>
      <>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movie" element={<Movie />} />
        </>
      // </Route>
    )
  )

  return <RouterProvider router={router} />
}