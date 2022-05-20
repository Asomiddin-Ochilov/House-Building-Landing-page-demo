import {FooterContainer} from "./StyledFooter";
import React from 'react'
import logo from './output-onlinepngtools (3).png'
function FooterContent() {

    return(
        <FooterContainer id={'contact'}>
          <div className="footer-block">
              <div className="footer-items"><img src={logo} alt=""/></div>

               <div className="footer-item-2">

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci eaque eligendi exercitationem
                    BuildingHouse@gmail.com <br/>
                    Tel-71-134-55-65

                </p>
               </div>
          </div>
        </FooterContainer>
    )

}
export default FooterContent