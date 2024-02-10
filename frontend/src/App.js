import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';
import Signup from './pages/signin/signin';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import store from './store/store';
import { Provider } from 'react-redux';
import Login from './pages/login/login';
import Blogs from './pages/Blogs/Blogs';
import MyBlogs from './pages/Blogs/MyBlogs';
import BlogsForm from './pages/Blogs/blogsFrom';
import BlogUpdate from './pages/Blogs/BlogsUpdate';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [

      {
        path: "/",
        element: < Login />,
        // user?<Blogs /> :
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
