import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Shop from './components/Shop/Shop';
import OrderRivew from './components/OrderRivew/OrderRivew';
import ManageInventory from './components/ManageInventory/ManageInventory';
import LogIn from './components/LogIn/LogIn';


function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/', element: <Shop></Shop>
        },
        {
          path: '/shop', element: <Shop></Shop>
        },
        {
          path: '/order-review', element: <OrderRivew></OrderRivew>
        },
        {
          path: '/manage-inventory', element: <ManageInventory></ManageInventory>
        },
        {
          path: '/log-in', element: <LogIn></LogIn>
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
