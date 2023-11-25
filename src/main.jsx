import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/routingmode' element={<App />}>
    <Route path='' element={<Home/>}/>
    <Route path='/routingmode/about' element={<About/>}/>
    <Route path='/routingmode/contact' element={<Contact/>}/>
  </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
