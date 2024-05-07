import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './routes/contact.jsx'
import Careers from './routes/careers.jsx'
import About from './routes/about.jsx'
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Jobs, {loader as careerLoader} from './routes/jobs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/contactUs",
    element: <Contact />
  },
  {
    path: "/careers",
    element: <Careers />
  },
  {
    path: "/careers/:careersId",
    element: <Jobs />,
    loader: careerLoader,
  },
  {
    path: "/aboutUs",
    element: <About />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
