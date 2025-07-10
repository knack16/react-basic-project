import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import Github, {githubInfoLoader} from './components/GitHub/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { 
//         path: '/',
//         element : <Home />
//       },
//       {
//         path: '/about',
//         element: <About />
//       },
//       {
//         path: '/contactUs',
//         element: <ContactUs />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contactUs" element={<ContactUs />} />
      <Route path="user/:userId" element={<User />} />
      <Route  
        loader={githubInfoLoader}
        path="github" 
        element={<Github />}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
