import styled from 'styled-components'

export const ContentBlock = styled.div`
width: 100%;
height: 100vh;
display: flex;

`
export const Header = styled.div`
background: ${props => props.header ? 'rgb(53, 56, 139)' : 'rgba(23,20,20,0.94)'};

width: 100%;
height: 90px;
margin: auto;
display: flex;
//justify-content: center;
align-items: center;
position: sticky !important;
position: -webkit-sticky;
z-index: 1;
top: 0;
`

export const HeaderBarMenu = styled.div`

width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
right: ${props=>props.open ? '0' : '-100%'};
position: fixed;
transition: 0.5s linear;
background: black;
z-index: 1 !important;
`

export const BarMenuItem = styled.div`

width: 300px;
display: flex;
flex-wrap: wrap;
justify-content: center;
height: 80%;
`
export const Logo = styled.div`
width: 100px;
height: 70px;
display: flex;
align-items: center;
margin-right: 10px;
justify-content: center;
img{
width: 60px;
height: 60px;
}

`
export const Navbar = styled.div`
width: 70%;
height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text-danger{
  color: red;
  }
  @media(min-width: 300px) and (max-width: 1000px){
  display: none;
  }
`

export const Number = styled.div`
width: 200px;
margin-left: 10px;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
font-size: 25px;
color: white;
font-family: 'Zen Maru Gothic', sans-serif;
i{
margin: 0 9px;
}
@media(min-width: 1000px) and (max-width: 1100px){
font-size: 20px;
}
`

export const Block1 = styled.div`
width: 80%;

display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: auto;
overflow: hidden;
padding: 0 20px;
@media(min-width: 800px) and  (max-width: 1000px){
width: 100%;
}
@media(min-width: 200px) and  (max-width: 800px){
width: 100%;
justify-content: center;

}
`
export const Box1 = styled.div`
width: 41%;
font-size: 26px;
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;
text-align: center;
overflow: hidden;
color: white;
font-family: 'Josefin Sans', sans-serif;
@media (min-width: 200px) and (max-width: 800px){
width: 100%;
margin: auto;
}
`
export const Box2 = styled.div`
width: 27%;

font-size: 26px;
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;
text-align: center;
overflow: hidden;
color: white;
font-family: 'Josefin Sans', sans-serif;
@media(min-width: 800px) and  (max-width: 1000px){
padding: 0 10px;
width: 26%;
}
@media(min-width: 0) and  (max-width: 800px){
display: none;
}
`