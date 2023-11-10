import styled from "styled-components";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import { mobile } from "../../responsive";

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
  ${mobile({marginRight: "0px"})}

`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({margin: "10px 0px"})}

`;

const Option = styled.option``;

// const Container = styled.div``;

const ProductList = () => {
  return (
    <Container>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled defaultValue={"none"}>
              Categoty
            </Option>
            <Option>Living Room</Option>
            <Option>Bedroom</Option>
            <Option>Dining Room</Option>
            <Option>Office</Option>
            <Option>Outdoor</Option>
            <Option>Kids</Option>
          </Select>
          <Select>
            <Option disabled defaultValue={"none"}>
              Material
            </Option>
            <Option>Wood</Option>
            <Option>Metal</Option>
            <Option>Glass</Option>
            <Option>Plastic</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option disabled defaultValue={"none"}>
              Price
            </Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
    </Container>
  );
};

export default ProductList;
