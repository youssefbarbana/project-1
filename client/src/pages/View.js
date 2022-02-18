import React, { useEffect } from "react";
import { getOne } from "../js/actions/product";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./View.css";
const View = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(getOne(id));
  }, [dispatch]);

  const product = useSelector((state) => state.productReducer.product);
  const loadProduct = useSelector((state) => state.productReducer.loadProduct);

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "100px" }}>
        <h2 style={{ marginTop: "50px", fontFamily: "arial" }}>
          {product.name}
        </h2>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            width: "80%",
            justifyContent: "space-around",
          }}
        >
          <img
            style={{ height: "400px", marginLeft: "200px" }}
            alt="product"
            src={product ? product.image : <h1>loading...</h1>}
          />

          <div>
            <h1> {product ? product.price : <h1>loading...</h1>}dt</h1>
            <span style={{ display: "inline-block", float: "right" }}>
              <h3 style={{ fontFamily: "arial" }}>phone: {product.phone}</h3>

              <h3 style={{ fontFamily: "arial" }}>owner: {product.shop}</h3>
              <h3 style={{ fontFamily: "arial" }}>
                localisation: {product.localisation}
              </h3>
            </span>
          </div>
        </div>
        <h2>
          date:{" "}
          {product.createdAt ? (
            product.createdAt.substr(0, 10)
          ) : (
            <h2>loading...</h2>
          )}
        </h2>
        <p style={{ marginTop: "100px", fontSize: "20px" }}>{product.desc}</p>
      </div>
    </div>
  );
};

export default View;
