import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Navbar from "./components/Navbar.jsx";
import Announcement from "./components/Announcement.jsx";
import Footer from "./components/Footer.jsx";
import ProductList from "./pages/ProductList.jsx";
import Product from "./pages/Product.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Cart from "./pages/Cart.jsx";
import Success from "./pages/Success.jsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:categories" element={<ProductList />} />
          <Route path="cart" element={<Cart />}></Route>
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
      </>
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
