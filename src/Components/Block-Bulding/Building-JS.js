import {ContainerBuilding, ContentBuilding, FooterBuilding} from "./Styled";
import React from 'react'
import './main.css'
import Fade from 'react-reveal/Fade';
function Building() {

    return(
       <ContainerBuilding id={'building'}>
       <ContentBuilding>
   <Fade right>
       <div className="block-fade">
       <div className="content-text">
           <h1>BUILDING SMART CITY</h1>
           <p>
               Lorem ipsum dolor sit amet,
               consectetur adipisicing elit.
               Ad adipisci ea nam non pariatur
               voluptatem.
           </p>
           <button>
               GET INFO
           </button>
       </div>

       </div>

   </Fade>

       </ContentBuilding>
           <FooterBuilding>
               <Fade bottom>
                   <div className="fade-text">
                       Lorem ipsum dolor sit amet,
                       consectetur adipisicing elit.
                       Consectetur ipsa iste laboriosam
                       laborum necessitatibus perspiciatis
                       quae quibusdam soluta, ullam voluptate.
                   </div>
               </Fade>

           </FooterBuilding>
       </ContainerBuilding>
    )

}
export default Building