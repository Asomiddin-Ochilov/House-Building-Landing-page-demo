import {BlockBox1, BlockFooter, BlockMenu} from "./Styled-Block";
import React from 'react'
import {Block1} from "../Carousel/StyledCarousel";
import Fade from 'react-reveal/Fade';

function Block() {
    return(

   <BlockMenu id={'onas'}>

  <Block1 className={'mt-5'}>

      <BlockBox1>
          <Fade left>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/I92NxgeEoJk"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
          </Fade>

      </BlockBox1>

      <BlockBox1>

          <div className="box-text">
              <Fade bottom>
                  <h1>BUILDING DEVELOPMENT</h1>

                  <p>Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit.
                      Accusantium ad animi deserunt
                      earum eius eum excepturi hic impedit
                      ipsam magnam pariatur, perspiciatis quae totam.
                      Adipisci architecto atque officia quae tempore?
                      Laborum quasi, recusandae. Voluptatum.
                  </p>
              </Fade>
          </div>





      </BlockBox1>

  </Block1>

       <BlockFooter>

           <Fade left>
               <div className={'footer-fade'}>
                  <div className="footer-item"><i className="bi bi-building"></i><p> Lorem ipsum dolor sit.</p></div>
                  <div className="footer-item"><i className="bi bi-building"></i><p> Lorem ipsum dolor sit.</p></div>
                  <div className="footer-item"><i className="bi bi-building"></i><p> Lorem ipsum dolor sit.</p></div>
                  <div className="footer-item"><i className="bi bi-building"></i><p> Lorem ipsum dolor sit.</p></div>
               </div>
           </Fade>

       </BlockFooter>




   </BlockMenu>
    )
}
export default Block