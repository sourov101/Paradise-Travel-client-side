import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddReview from './Components/AddReview/AddReview';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Login from './Components/Login/Login';
import MyReviews from './Components/Reviews/MyReviews';
import UpdateReview from './Components/Reviews/UpdateReview';
import PrivateRoute from './Components/Routes/PrivateRoute';
import AddService from './Components/Services/AddService';
import ServiceDetails from './Components/Services/ServiceDetails';
import Services from './Components/Services/Services';
import Signup from './Components/Signup/Signup';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://paradice-travel-server-sourov101.vercel.app/homeServices')
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
          loader: () => fetch('https://paradice-travel-server-sourov101.vercel.app/services')
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },

        {
          path: '/addService',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path: '/myReviews',
          element: <MyReviews></MyReviews>,
          loader: () => fetch('https://paradice-travel-server-sourov101.vercel.app/reviews')
        },

        {
          path: '/addReview/:id',
          element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
          loader: ({ params }) => fetch(`https://paradice-travel-server-sourov101.vercel.app/services/${params.id}`)
        },
        {
          path: '/serviceDetails/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: ({ params }) => fetch(`https://paradice-travel-server-sourov101.vercel.app/services/${params.id}`)
        },
        {
          path: '/updateReview/:id',
          element: <UpdateReview></UpdateReview>,
          loader: ({ params }) => fetch(`https://paradice-travel-server-sourov101.vercel.app/reviews/${params.id}`)
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
