import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';
import Signup from './pages/signin/signin';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import store from './store/store';
import { Provider, useSelector } from 'react-redux';

import Blogs from './pages/Blogs/Blogs';
import MyBlogs from './pages/Blogs/MyBlogs';
import BlogsForm from './pages/Blogs/blogsFrom';
import BlogUpdate from './pages/Blogs/BlogsUpdate';
import Login from './pages/login/login';
import Home from './pages/home/home';
// const user = localStorage.getItem("user")
// const user = useSelector((s) => s.user)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Login",
        element: <Login />
      },
      {
        path: "/Sigin",
        element: <Signup />
      },
      {
        path: "/Blogs",
        element: <Blogs />
      },
      {
        path: "/MyBlogs",
        element: <MyBlogs />
      },
      {
        path: "/BlogsForm",
        element: <BlogsForm />
      },
      {
        path: "/BlogUpdate/:id",
        element: <BlogUpdate />
      },
    ]
  }
])
function App() {


  return (
    <div className="App">
      <ConfigProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ConfigProvider>
    </div>
  );
}

export default App;
