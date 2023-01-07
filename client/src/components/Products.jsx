import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category, sort, filters }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category} `
            : "http://localhost:5000/api/products"
        );
        setProducts(response.data);
      } catch (error) {}
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);
  console.log(filteredProducts);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  console.log(category, sort, filters);
  return (
    <Container>
      {category
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 6)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
