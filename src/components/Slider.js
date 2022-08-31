import { Button } from '@material-ui/core'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { sliderItems } from '../data'
import {mobile} from '../responsive'
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})};
`
// const Container = {
//     width: '100vw',
//     height: '100vh', //full screen slider
//     display: 'flex',
//     position: 'relative',  //parent should be relative if u are using absolute
//     overflow: 'hidden'
// }
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction==="left" && "10px"};
    right: ${props => props.direction==="right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease; 
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`
// transform: translateX(${(props) => props.slideIndex * -100}vw);
// const Wrapper = {
//     height: '100%',
//     display: 'flex',
//     transform: 'transalateX(' + this.props.slideIndex * -100 + 'vw)'
// }
const Slides = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
}
const ImgContainer = {
    height: '100%',
    flex: 1,
}
const InfoContainer = {
    flex: 1,
}

const Title = {
    fontSize: '70px'
}
const Description = {
    margin: '50px 0px',
    fontSize: '20px',
    fontWeight: '500',
    letterSpacing: '3px'
}
const Btn = {
    backgroundColor: 'transparent',
    padding: '10px',
    fontSize: '20px',
    cursor: 'pointer'
}
export const Slider = () => {
    const [sliderIndex,setSliderIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction==="left") {
            setSliderIndex(sliderIndex>0?sliderIndex-1:2)
        }else{
            setSliderIndex(sliderIndex<2?sliderIndex+1:0)
        }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={sliderIndex}>
            {sliderItems.map((item)=>(
                <div style={Slides}>
                <div style={ImgContainer}>
                    {/* <Image src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5559085/2018/5/9/11525849854374-Athena-Women-Burgundy-Solid-Maxi-Dress-4291525849853320-1.jpg"/> */}
                    <img style={{height: '80%', marginTop: '20px'}}src={item.img}/>
                    
                </div>
                <div style={InfoContainer}>
                    <h1 style={Title}>{item.title}</h1>
                    <p style={Description}>{item.desc}</p>
                    <Link style={{textDecoration: "none"}} to='/products'><Button style={Btn}  variant="contained" >SHOP NOW</Button></Link>
                </div>
            </div>
            )
            )}
        </Wrapper>
        <Arrow direction="right"  onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}
