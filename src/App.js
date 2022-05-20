import {Container} from "./StyledAppJs";
import React,{useEffect,useState} from "react";
import Carousel from "./Components/Carousel/Carousel";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
function App() {

   const [header,setHeader] = useState(true)

    const options = {
        position: positions.TOP_CENTER,
        timeout: 3000,
        offset: '50px',
        transition: transitions.SCALE
    }

    function HeaderShow(){
        if(window.scrollY >= 200){
            setHeader(false)
        }
        else{
            setHeader(true)
        }
    }
    useEffect(()=>{
     HeaderShow()
    },[])

    window.addEventListener('scroll',HeaderShow)

  return(

      <AlertProvider template={AlertTemplate} {...options}>
          <Container>
              <Carousel header={header}/>

          </Container>
      </AlertProvider>

  )

}

export default App