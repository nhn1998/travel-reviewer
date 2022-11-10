import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Main from './components/Main/Main';
import About from './components/About/About';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import AllServices from './components/AllServices/AllServices';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import WrongRoute from './components/WrongRoute';




function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>fetch('https:/assaingment-eleven-server.vercel.app/service'),
          element:<Home></Home>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/services',
          loader:()=>fetch('https:/assaingment-eleven-server.vercel.app/services'),
          element:<AllServices></AllServices>
        },
        {
          path:'/services/:id',
          loader:({params})=>fetch(`https:/assaingment-eleven-server.vercel.app/services/${params.id}`),
          element:<ServiceDetails></ServiceDetails>
        },
        {
          path:'/*',
          element:<WrongRoute></WrongRoute>
        }
      ],
      
    },

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
