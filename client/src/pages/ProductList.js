import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../js/actions/product";
import Navbar from "./Navbar";
import Products from "../pages/Products";
import { Search } from "@mui/icons-material";
import "./Navbar.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);

  const loadProduct = useSelector((state) => state.productReducer.loadProduct);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  const [search, setsearch] = useState("");
  const searchProduct = (search) => {
    setsearch(search);
  };
  const [categorie, setcategorie] = useState({ value: "" });
  const searchcate = (categorie) => {
    setcategorie(categorie);
  };
  const [city, setcity] = useState({ value: "" });
  const searchcity = (city) => {
    setcity(city);
  };
  return (
    <div>
      <Navbar searchProduct={searchProduct} />

      <div>
        <div className="search">
          <input
            type="text"
            placeholder="search"
            onChange={(e) => searchProduct(e.target.value)}
          />

          <Search />
        </div>

        <select
          style={{
            width: "200px",
            height: "35px",
            marginTop: "20px",
            marginLeft: "100px",
            borderRadius: "10px",
          }}
          onClick={(e) => searchcate({ ...categorie, value: e.target.value })}
        >
          <option value="">category</option>
          <option value="wear">wear</option>
          <option value="vehicle">vehicle</option>
          <option value="job">job</option>
          <option value="truck">truck</option>
          <option value="informatics">informatics</option>
        </select>
        {/* <select
          style={{
            width: "200px",
            height: "35px",
            marginTop: "20px",
            marginLeft: "100px",
            borderRadius: "10px",
          }}
          onClick={(e) => searchcity({ ...city, value: e.target.value })}
        >
          <option value="">tunisia</option>
          <option value="tunis">tunis</option>
          <option value="gabes">gabes</option>
          <option value="sousse">sousse</option>
          <option value="sfax">sfax</option>
        </select> */}
      </div>

      <div
        style={{
          marginTop: "200px",
          display: "grid",
          gridTemplateColumns: "20% 20% 20% 20% 20%",
          marginLeft: "30px",
          height: "300px",
        }}
      >
        {loadProduct ? (
          <h2>loading..</h2>
        ) : (
          products
            .filter(
              (el) =>
                el.name.toLowerCase().includes(search.toLowerCase()) &&
                el.categorie.includes(categorie.value)
              // el.localisation.includes(city.value)
            )

            .map((el) => <Products key={el._id} product={el} />)
            .reverse()
        )}
      </div>
    </div>
  );
};

export default ProductList;
