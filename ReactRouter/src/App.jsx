import About from "./pages/About/About"
import HireMe from "./pages/Hire Me/HireMe"
import Work from "./pages/Work/Work"
import './App.css'

// import Navbar from "./components/Navbar"

import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from "./layouts/RootLayout"


const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<About/>} />
      <Route path="work" element={<Work/>} />
      <Route path="hireme" element={<HireMe/>} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
