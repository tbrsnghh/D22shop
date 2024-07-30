import React from "react";
import cart, { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
export default function Product(props) {
  const { pro } = props;
  const dispatch = useDispatch();
  return (
    <Col lg={3} md={4} sm={6} xs={6} className="">
      <Card style={{ width: "18rem" }}>
        <img src={pro.img} />
        <CardBody>
          <CardTitle tag="h5">{pro.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {pro.price}
          </CardSubtitle>
          <CardText>{pro.desc.substring(0,50)}</CardText>
          <Button color="success" onClick={() => dispatch(addToCart(pro))}>
            Add to cart
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
}
