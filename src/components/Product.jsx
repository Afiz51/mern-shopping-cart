import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5;
  mind-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: cneter;
  background-color: #f5fbfd;
`;
const Image = styled.img`
  height: 75%;
`;
const Info = styled.div``;
const Circle = styled.div``;
const Icon = styled.div``;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
