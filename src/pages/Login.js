
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
    background-size: cover;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width:40%;
    margin: 10px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`
const Link1 = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`
const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Link style={{textDecoration: "none", color: 'white'}} to="/"><Button>LOGIN</Button></Link>
                <Link1>Forget Password?</Link1>
                <Link1>Don't have an account?</Link1>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login