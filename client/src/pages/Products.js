import React from "react";
import { IconButton, Avatar } from "@mui/material";
// import "./Products.css";
import { Card, Button } from "react-bootstrap";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteproduct } from "../js/actions/product";
const Products = ({ product }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);

  const delet = () => {
    if (isAuth === true && product.user_id === user._id) {
      dispatch(deleteproduct(product._id));
    }
  };
  return (
    <div>
      <div>
        {isAuth ? (
          <IconButton style={{ width: "30px", height: "30px" }}>
            <CloseIcon
              style={{ width: "30px", height: "30px" }}
              onClick={() => delet()}
            />
          </IconButton>
        ) : null}
      </div>
      <Link
        to={`/view/${product._id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img
            style={{ height: "290px" }}
            variant="top"
            src={product.image}
          ></Card.Img>
          <Card
            style={{
              border: "1px black solid",
              fontSize: "22px",
            }}
          >
            price:{product.price}dt
          </Card>
          <Card.Body>
            <Card.Title>{product.name} </Card.Title>
            <Card.Text>{product.phone}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default Products;
