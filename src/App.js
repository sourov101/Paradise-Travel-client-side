import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Login from './Components/Login/Login';
import AddService from './Components/Services/AddService';
import ServiceDetails from './Components/Services/ServiceDetails';
import Services from './Components/Services/Services';
import Signup from './Components/Signup/Signup';
import MyReviews from './Reviews/MyReviews';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/homeServices')
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/services',
          element: <Services></Services>,
          loader: () => fetch('http://localhost:5000/services')
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/addService',
          element: <AddService></AddService>
        },
        {
          path: '/myReviews',
          element: <MyReviews></MyReviews>
        },
        {
          path: '/serviceDetails/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
        },
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
