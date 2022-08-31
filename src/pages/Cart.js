import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
const Container = styled.div`
`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-item: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton  = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props)=>props.type==="filled" && "none"};
    background-color: ${(props)=>props.type==="filled" ? "black" : "transparent"};
    color: ${(props)=>props.type==="filled" && "white"};
`

const TopTexts = styled.div``
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3;

`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
    
`
const Details = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`
    margin: 10px;
`
const ProductId = styled.span`
    margin: 10px;
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    margin: 10px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`
const ProductSize = styled.span`
    margin: 10px;
`
const PriceDetail = styled.div`
    flex: 1;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 30px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;

`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type==="total" && 500};
    font-size: ${props=>props.type==="total" && "24px"};
`
const SummaryItemText = styled.div`
    
`
const SummaryItemPrice = styled.div`
    
`
const Button = styled.div`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

const Cart = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <Link to='/'><TopButton>CONTINUE SHOPPING</TopButton></Link>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(1)</TopText>
                </TopTexts>
                <Link to='/'><TopButton type="filled">CHECKOUT NOW</TopButton></Link>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetails>
                            <Image src=""/>
                            <Details>
                                <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                                <ProductId><b>ID:</b>93167892</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b>37.5</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 60</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>$ 60</SummaryItemPrice>
                    </SummaryItem>
                    <Link style= {{textDecoration: "none"}} to='/'><Button>CHECKOUT NOW</Button></Link>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
    
    
  )
}

export default Cart