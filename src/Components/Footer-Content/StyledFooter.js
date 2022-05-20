import styled from 'styled-components'
import bg from './37-375434_building-hd-wallpaper-building-images-hd-quality.jpg'
export const FooterContainer = styled.div`
width: 100%;
height: 40vh;
background-image:linear-gradient(180deg,rgba(0,0,0,0.89),rgba(0,0,0,0.87)), url(${bg});
background-size: cover;

.footer-block{

width: 60%;
height: 100%;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
@media(min-width: 300px) and  (max-width: 600px){
width: 100%;
}
.footer-item-2{

width: 50%;
height: 80%;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
color: white;
font-family: 'Quicksand', sans-serif;
}
.footer-items{
width: 30%;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
img{
width: 80px;
height: 80px;
}
}
}

`