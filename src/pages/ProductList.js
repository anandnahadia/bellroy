import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
`
const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    Padding: 10px;
    margin-right: 20px;
`
const Option = styled.option``
const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Blue</Option>
                    <Option>Red</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort By</FilterText>
                <Select>
                    <Option>Recommended</Option>
                    <Option>Popularity</Option>
                    <Option>What's New</Option>
                    <Option>Better Discount</Option>
                    <Option>Price: High to Low</Option>
                    <Option>Price: Low to High</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default ProductList