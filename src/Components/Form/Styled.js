import styled from 'styled-components'
import bg from './the-empire-state-building-hd-1080P-wallpaper.jpg'
export const FormContainer = styled.div`
width: 100%;
height: 90vh;
background-image:linear-gradient(180deg,rgba(224,218,218,0.89),rgba(193,191,191,0.87)), url(${bg});
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
.form-block{
border: 5px solid rgb(87,88,182);
width: 40%;
height: 90%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
@media(min-width: 300px) and  (max-width: 1000px){
width: 80%;
}
h1{
font-family: 'Inter', sans-serif;
margin: 17px 0;
}
.submit{
width: 150px;
height: 50px;
font-family: 'Inter', sans-serif;
background: transparent;
border: 3px solid rgb(26,26,29);
outline: none;
color: rgb(26,26,29);
font-weight:800 !important;
i{
font-size: 20px;
}
}
.AvForm-block{
width: 90%;

}
.invalid-feedback{
display: none;
}
.avForm{
width: 90%;
margin: auto;
height: 50px;
border:2px solid rgb(87,88,182);
//outline: none;
background: transparent;
font-size: 20px;
font-family: 'Inter', sans-serif;
}
.avForm-des{

width: 90%;
margin: auto;
height: 70px;
border:2px solid rgb(87,88,182);
outline: none;
background: transparent;
font-size: 20px;
font-family: 'Inter', sans-serif;
padding-top:18px;
}
}
`