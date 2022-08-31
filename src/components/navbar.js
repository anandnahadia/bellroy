import React from 'react'
import { Search, ShoppingCartOutlined} from '@material-ui/icons';  //search icon material ui icons
import {Badge} from '@material-ui/core'; 
import styled from 'styled-components';
import {mobile} from '../responsive';
import { Link } from "react-router-dom";
const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})};
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "10px 0px"})};
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center; 
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end; 
    ${mobile({justifyContent: "center",flex: 2})};
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})};
`
const SearchContainer =styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({marginLeft: "10px"})};
`
const Input = styled.input`
    border: none;
    ${mobile({width: "80px"})};
`
const Logo = styled.h1`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    ${mobile({fontSize: "24px"})};
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    transition: all 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.2);
    }
    ${mobile({fontSize: "12px",marginLeft: "10px"})};
`
const Image = styled.img`
    height: 40px;
`
const navbar = () => {
  return (
    
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <Search style={{color:"grey",fontSize: "16px"}}/> 
                </SearchContainer>
            </Left>
            <Center>
                
            <Image src="https://image.shutterstock.com/image-vector/letter-b-logo-icon-design-260nw-1741182017.jpg" />
            <Link style = {{textDecoration: "none", color: 'black'}} to="/"><Logo>bellroy</Logo></Link>
            </Center>
            <Right>
                <Link style = {{textDecoration: "none"}} to="/register"><MenuItem>REGISTER</MenuItem></Link>
                <Link style = {{textDecoration: "none"}} to="/login"><MenuItem>SIGN IN</MenuItem></Link>
                <Link style = {{textDecoration: "none"}} to="/cart">
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                        
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Link>
            </Right>
        </Wrapper>
        
    </Container>
    
  )
}

export default navbar