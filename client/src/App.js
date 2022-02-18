import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup/Signup.js";
import Dashbord from "./Components/Dashbord/Dashbord";
import PrivateRoute from "./Components/router/PrivateRoute";
import { useDispatch } from "react-redux";
import { current } from "./js/actions/user";
import { useEffect } from "react";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList.js";
import Contactus from "./pages/Contactus.js";
import Addproduct from "./pages/Addproduct.js";
import Shops from "./pages/Shops.js";
import View from "./pages/View.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Addproduct />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/view/:id" element={<View />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/contactUs" element={<Contactus />} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashbord" element={<Dashbord />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
