import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../product/Product";
import { fetchProducts } from "../../redux/productsSlice";
import { Container, Row } from "reactstrap";
export default function Products() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);
  useEffect(() => {
    if (status === "start") {
      dispatch(fetchProducts());
    }
  }, []);
  const { cartList } = useSelector((state) => state.cart);
  return (
    <div>
      Products
      <Container >
        <Row className="">
        {items.map((pro, index) => (
          <Product key={index} pro={pro} />
        ))}
        </Row>
      </Container>
      <h1>Cart: {cartList.length}</h1>
    </div>
  );
}
