import './App.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { createBrowserRouter, Route, createRoutesFromElements, Link, Outlet, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home/index.jsx';
import { About } from './pages/About/index.jsx';
import { Contact } from './pages/Contact/index.jsx';

const App = () => {
  const router = createBrowserRouter(
     createRoutesFromElements(
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
     )
  )

  return (
    <Theme appearance="dark" accentColor="tomato" grayColor="mauve" radius="large">
      <div className='App'>
        <RouterProvider router={router}/>
      </div>
    </Theme>
  )
}

const Root = () => {
    return (
      <>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/product">Product</Link>
        </div>

        <div>
          <Outlet />  
        </div> 
      </>
    )
}

export default App;