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


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>fetch('http://localhost:5000/service'),
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
          loader:()=>fetch('http://localhost:5000/services'),
          element:<AllServices></AllServices>
        }
      ]
    },

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
