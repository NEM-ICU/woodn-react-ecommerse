import styled from "styled-components";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilterdProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products?category=${category}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    filters &&
      setFilterdProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => {
            if (value == "none") return true;
            return item[key]?.includes(value);
          })
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort == "asc") {
      setFilterdProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (sort == "desc") {
      setFilterdProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    } else {
      setFilterdProducts((prev) => {
        return [...prev].sort((a, b) => {
          const dateA = new Date(a.createdAt).getTime();
          const dateb = new Date(b.createdAt).getTime();
          return dateA - dateb;
        });
      });
    }
  }, [sort]);

  return (
    <Container>
      {filters
        ? filteredProducts?.map((item) => (
            <Product item={item} key={item._id} />
          ))
        : products
            .slice(0, 8)
            ?.map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
