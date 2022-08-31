import { Facebook, Instagram, LinkedIn, Mail, Phone, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;    
    ${mobile({flexDirection: "column"})};
`
const Left = styled.div`
    flex: 1;
    display: flex;  
    flex-direction: column;
    padding: 20px;

`
const Logo = styled.h1`
`
const Desc = styled.p`
    marging: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
       
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})};
`

const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})};
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    
`
const Footer = () => {
    return (
        <Container>
        <Left>
            <Logo>LAMA.</Logo>
            <Desc>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </Desc>
            <SocialContainer>
                <SocialIcon color="#3b5998">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="#E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="#55acee">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="#0077b5">
                    <LinkedIn />
                </SocialIcon>

            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight: "10px"}}/>A 277, a block south city 1 gurgaon </ContactItem>
            <ContactItem><Phone style={{marginRight: "10px"}}/>+91 7018626342</ContactItem>
            <ContactItem><Mail style={{marginRight: "10px"}}/>anandnahadia0@gmail.com</ContactItem>
        </Right>
    </Container>
    )
}


export default Footer