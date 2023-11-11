import styled from "styled-components";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import { mobile } from "../../responsive";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

// const Container = styled.div``;

const ProductList = () => {
  // get ID from url
  const params = useParams();

  // filter data according to categories and sort
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };

  return (
    <Container>
      <Title>Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="categories" onChange={handleFilters}>
            <Option disabled>Categoty</Option>
            <Option value="none">None</Option>
            <Option value="living-room">Living Room</Option>
            <Option value="bedroom">Bedroom</Option>
            <Option value="dining-room">Dining Room</Option>
            <Option value="office">Office</Option>
            <Option value="outdoor">Outdoor</Option>
            <Option value="kids">Kids</Option>
          </Select>
          <Select name="type" onChange={handleFilters}>
            <Option disabled>Material</Option>
            <Option value="none">None</Option>
            <Option value="wood">Wood</Option>
            <Option value="metal">Metal</Option>
            <Option value="glass">Glass</Option>
            <Option value="plastic">Plastic</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option disabled>Price</Option>
            <Option value="newest">New</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={params.categories} filters={filters} sort={sort} />
      <Newsletter />
    </Container>
  );
};

export default ProductList;
