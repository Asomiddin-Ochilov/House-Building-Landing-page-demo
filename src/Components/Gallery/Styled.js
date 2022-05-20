import styled from 'styled-components'
import gallery from './1802071.jpg'
export const ContainerGallery = styled.div`
width: 100%;
height: 100vh;
background-image: linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,255,255,0.95)) ,url(${gallery});
background-position: center;
background-size: cover;
display: flex;
flex-wrap: wrap;
align-items: center;
.gallery-block{
width: 100%;
height: 100px;
display: flex;
align-items: end;
justify-content: end;
overflow: hidden;
.box-gallery{
box-shadow: 0px 16px 16px -11px rgba(4,25,42,0.87);
width: 140px;
height: 70px;
display: flex;
background: yellow;
color: white;
font-family: 'Inter', sans-serif;
justify-content: center;
align-items: center;
font-size: 27px;
}
}

.block-carousel{

width: 80%;
height: 60%;
margin: auto;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
overflow: hidden;
@media(min-width: 600px) and  (max-width: 1000px){
overflow-y: auto !important;
}
}
.carousel-items{
width: 20%;
height: 90%;
box-shadow: 0px 16px 16px -11px rgba(34,60,80,0.66);
background: white;
margin: 15px 0;
img{
width: 100%;
height: 50%;
image-orientation: flip;
image-resolution: normal;
}
.item-text{
width: 100%;
height: 50%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;

h5{

font-size: 20px;
font-family: 'Zen Kaku Gothic Antique', sans-serif;

}

p{

font-size: 15px;
text-align: center;
font-family: 'Zen Kaku Gothic Antique', sans-serif;
}
}
@media(min-width: 700px) and  (max-width: 1000px){
width: 32%;

}
@media(min-width: 450px) and  (max-width: 700px){
width: 48%;

}
@media(min-width: 200px) and  (max-width: 450px){
width: 80%;
margin: 10px auto;
}

}

`