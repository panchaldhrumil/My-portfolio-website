import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter ,  RouterProvider } from 'react-router-dom'

import Home from './components/navbar_components/Home'
import About from './components/navbar_components/About'
import Project from './components/navbar_components/Project'
import Contact from './components/navbar_components/Contact'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  // const router=createBrowserRouter(
  //   [
  //     {
  //       path: "/" ,
  //       element: <Navbar/>,
  //       children:[
  //           {path: "/Home" , element: <Home/>},
  //           {path: "/About" , element: <About/>},
  //           {path: "/project" , element: <Project/>},
  //           {path: "/Contact" , element: <Contact/>},
  //       ] ,
  //     },
  //   ]
  // ) ;

  return (
    <>
    <BrowserRouter> 
    {/* here its imp to wrap the route and routes into browserRouter */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
      {/* <RouterProvider router={router} /> */}

      
    </>
  )
}

export default App
