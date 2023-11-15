import React,{useState} from 'react'
import MenuButton from './MenuButton'
import { Outlet} from "react-router-dom";
import styled from 'styled-components'

function Navbar() {

    const[clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }
    return (
        <>
            <NavContainer>
                <h2>Manage <span>Procees</span></h2>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <a onClick={handleClick} href="#h">1</a>
                    <a onClick={handleClick} href="#h">2</a>
                    <a onClick={handleClick} href="#h">3</a>
                    <a onClick={handleClick} href="#h">4</a>
                    <a onClick={handleClick} href="#h">5</a>
                </div>
                <div className='menu'>
                    <MenuButton clicked={clicked} handleClick={handleClick}/>
                </div>
                <BgDiv className={`initial ${clicked ? 'active': ''}`}></BgDiv>
            </NavContainer>
            <ContainerDiv>
            <section >
                <Outlet></Outlet>
            </section>
            </ContainerDiv>
            
        </>
    )
}

export default Navbar;

const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .menu{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const ContainerDiv = styled.div`
position: absolute;
right: 0;
left: 0;
margin: auto;
z-index: -2;
`