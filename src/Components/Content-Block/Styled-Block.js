import styled from 'styled-components'
export const BlockMenu = styled.div`
width: 100%;
//height: 100vh;
`
export const  BlockBox1 = styled.div`
width: 50%;
height: 52vh;
margin: auto;
overflow: hidden;
display: flex;
border-radius: 10px;
@media(min-width: 300px) and  (max-width: 900px){
width: 95%;
}
.box-text{
width: 95%;
height: 100%;
margin: auto;
line-height: 28px;
font-size: 17px;
text-align: center;
font-family: 'Montserrat', sans-serif;

h1{
font-size: 40px;
margin: 17px 0;
font-weight: 700;
color: #1f1e1e;
}

}

Fide{
transition: 1s linear !important;

video{

width: 100%;
height: 100%;
transform: scale(1.7);
}

}

`
export const BlockFooter = styled.div`
width: 80%;
height: 200px;
display: flex;
justify-content: center;
overflow: hidden;
align-items: end;
@media(min-width: 300px) and  (max-width: 900px){
align-items: flex-start;
width: 90%;

}
margin: auto;
.footer-fade{
width: 100%;
height: 150px;
display: flex;
justify-content: space-between;
text-align: center;
.footer-item{
width: 23%;
height: 170px;
display: flex;
flex-wrap: wrap;
justify-content: center;
font-size: 20px;
font-weight: 600;
font-family: 'Montserrat', sans-serif;
@media(min-width: 700px) and  (max-width: 900px){
font-size: 16px;
}
@media(min-width: 300px) and  (max-width: 700px){
font-size: 13px;
}
i{
font-size: 60px;
color: #4f4ff3;
}
}
}
`
