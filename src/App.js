import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Shop from './components/Shop/Shop';
import OrderRivew from './components/OrderRivew/OrderRivew';
import ManageInventory from './components/ManageInventory/ManageInventory';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import PrivateRoute from './components/utilites/PrivateRoute';


function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/', element: <Home></Home>
        },
        {
          path: '/home', element: <Home></Home>
        },
        {
          path: '/shop', element: <PrivateRoute><Shop></Shop></PrivateRoute>
        },
        {
          path: '/order-review', loader: () => fetch('products.json'),
          element: <PrivateRoute><OrderRivew></OrderRivew></PrivateRoute>
        },
        {
          path: '/manage-inventory', element: <PrivateRoute><ManageInventory></ManageInventory></PrivateRoute>
        },
        {
          path: '/log-in', element: <LogIn></LogIn>
        },
        {
          path: '/sign-up', element: <SignUp></SignUp>
        }
      ]
    }
  ])




  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
