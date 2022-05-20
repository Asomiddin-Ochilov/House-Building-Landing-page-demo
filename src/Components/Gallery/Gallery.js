import {ContainerGallery} from "./Styled";
import React from 'react'
import Fade from 'react-reveal/Fade';
import img1 from './Images/91495903_FQPGYjS7SJXnVt2921_8IQ3AMpaUPic3GbBzTEmF8C0.jpg'
import img2 from './Images/photo-1546412414-c2658fffe7d9.jpg'
import img3 from './Images/photo-1516757936754-d2ed473f712d.jpg'
import img4 from './Images/very-tall-hotel-with.jpg'
function Gallery() {

    return(
        <ContainerGallery id={'gallery'}>

            <div className="gallery-block">
                <Fade right>
                    <div className="box-gallery">
                        GALLERY
                    </div>
                </Fade>

            </div>

            <div className="block-carousel">

                <Fade bottom>
                    <div className="carousel-items">
                        <img src={img1} alt=""/>
                        <div className="item-text">
                            <h5>Lorem ipsum dolor.</h5>

                            <p>Lorem ipsum dolor sit amet,
                                consectetur adipisicing.
                            </p>
                        </div>

                    </div>
                </Fade>
                <Fade bottom>
                    <div className="carousel-items">
                        <img src={img2} alt=""/>
                        <div className="item-text">
                            <h5>Lorem ipsum dolor.</h5>

                            <p>Lorem ipsum dolor sit amet,
                                consectetur adipisicing.
                            </p>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="carousel-items">
                        <img src={img3} alt=""/>
                        <div className="item-text">
                            <h5>Lorem ipsum dolor.</h5>

                            <p>Lorem ipsum dolor sit amet,
                                consectetur adipisicing.
                            </p>
                        </div>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="carousel-items">
                        <img src={img4} alt=""/>
                        <div className="item-text">
                            <h5>Lorem ipsum dolor.</h5>

                            <p>Lorem ipsum dolor sit amet,
                                consectetur adipisicing.
                            </p>
                        </div>
                    </div>
                </Fade>


            </div>




        </ContainerGallery>
    )

}
export default Gallery