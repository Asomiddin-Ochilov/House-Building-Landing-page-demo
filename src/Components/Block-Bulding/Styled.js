import styled from 'styled-components'

export const ContainerBuilding = styled.div`
width: 100%;
height: 100vh;

`
export const ContentBuilding = styled.div`

width: 100%;
height: 56%;
display: flex;
overflow: hidden;
justify-content: end;
.block-fade{

width: 50%;
height: 100%;
@media(min-width: 300px) and  (max-width: 900px){
width: 100%;
}
background: rgba(21,21,23,0.59);
.content-text{
width: 53%;
height: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
h1{
font-size: 40px;
margin-left: 30px;
margin-top: 10px;
font-weight: 800;
color: #dbf546;
font-family: 'Cabin', sans-serif;
}
p{
font-size: 18px;
margin-left: 30px;
color: white;
font-family: 'Cabin', sans-serif;
letter-spacing: 1px ;
}
button{
border: 2px solid white;
background: transparent;
color: white;
width: 160px;
font-size: 16px;
font-family: 'Cabin', sans-serif;
margin-bottom: 16px;
margin-left: 30px;
height: 50px;
padding-top: 4px;
}
}
}

`
export const FooterBuilding = styled.div`
background: rgba(41,41,160,0.73);
width: 80%;
height: 40%;
display: flex;
overflow: hidden;
align-items: center;
justify-content: center;
.fade-text{
font-family: 'Inter', sans-serif;
width: 70%;
height: 70%;
color: white;
font-size: 28px;
}

@media(min-width: 300px) and  (max-width: 1000px){
.fade-text{
font-size: 18px;
text-align: center;
}
}

`
