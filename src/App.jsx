import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  Link,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Navbar from "./components/Navbar.jsx";
import Announcement from "./components/Announcement.jsx";
import Footer from "./components/Footer.jsx";
import ProductList from "./pages/ProductList.jsx";
import Product from "./pages/Product.jsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="products" element={<ProductList />} />
        <Route index element={<Product />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

const Root = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
