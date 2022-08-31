

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
    url("https://images5.alphacoders.com/554/thumb-1920-554817.jpg"),
    center;
    display: flex;
    
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width:40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Aggrement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`
const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="gmail"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Aggrement>
                    By Creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Aggrement>
                
                <Link style={{textDecoration: "none", color: 'white',width: '40%'}} to="/"><Button>CREATE</Button></Link>
                
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register