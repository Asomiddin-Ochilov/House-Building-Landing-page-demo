import {
    BarMenuItem,
    Block1,
    Box1,
    Box2,
    ContentBlock,
    Header,
    HeaderBarMenu,
    Logo,
    Navbar,
    Number
} from "./StyledCarousel";
import React,{useState} from 'react'
import './Carousel.css'
import logo from  './output-onlinepngtools (3).png'
import Fade from 'react-reveal/Fade';
import Block from "../Content-Block/Block";
import { NavHashLink } from "react-router-hash-link";
import {BrowserRouter} from "react-router-dom";
import Building from "../Block-Bulding/Building-JS";
import Gallery from "../Gallery/Gallery";
import FooterContent from "../Footer-Content/FooterContent";
import Form from "../Form/Form";

function Carousel(props) {
const [openMenu,setOpenMenu] = useState(false)


    return(
        <BrowserRouter>
            <div className={'con'} id={'home'}>

                <Header header={props.header}>
                    <NavHashLink smooth to={'#home'} onClick={()=>setOpenMenu(false)}>
                        <Logo>

                            <img src={logo} alt=""/>

                        </Logo>
                    </NavHashLink>
                    <Navbar>
                        <NavHashLink className={'nav-item'} smooth to="#onas" activeClassName={'active'}>
                            BIZ HAQIMIZDA
                        </NavHashLink>
                            <NavHashLink className={'nav-item'} smooth to="#building" activeClassName={'active'}>
                                 SMART CITY
                        </NavHashLink>
                        <NavHashLink className={'nav-item'} smooth to="#gallery" activeClassName={'active'}>
                             GALEREYA
                        </NavHashLink>

                        <NavHashLink className={'nav-item'} smooth to="#contact" activeClassName={'active'}>
                             ALOQA UCHUN
                        </NavHashLink>

                        <NavHashLink className={'nav-item'} smooth to="#form" activeClassName={'active'}>
                           XABAR   JO'NATISH
                        </NavHashLink>


                    </Navbar>


                    <Number>
                        <i className="bi bi-telephone"></i>  71 134-55-65
                    </Number>

                    <div className="menu-btn">

                        {
                            openMenu ?
                                <button  onClick={()=>setOpenMenu(false)}>  <i className="bi bi-x"></i></button>

                                :
                                <button  onClick={()=>setOpenMenu(true)}><i className="bi bi-list"></i> </button>


                        }

                    </div>

                </Header>

                    <HeaderBarMenu open={openMenu}>


                        <BarMenuItem>
                            <NavHashLink onClick={()=>setOpenMenu(false)} className={'nav-item'} smooth to="#onas" activeClassName={'active'}>
                                BIZ HAQIMIZDA
                            </NavHashLink>
                            <NavHashLink onClick={()=>setOpenMenu(false)} className={'nav-item'} smooth to="#building" activeClassName={'active'}>
                                SMART CITY
                            </NavHashLink>
                            <NavHashLink onClick={()=>setOpenMenu(false)} className={'nav-item'} smooth to="#gallery" activeClassName={'active'}>
                                GALEREYA
                            </NavHashLink>

                            <NavHashLink onClick={()=>setOpenMenu(false)} className={'nav-item'} smooth to="#contact" activeClassName={'active'}>
                                ALOQA UCHUN
                            </NavHashLink>

                            <NavHashLink onClick={()=>setOpenMenu(false)} className={'nav-item'} smooth to="#form" activeClassName={'active'}>
                                XABAR   JO'NATISH
                            </NavHashLink>

                        </BarMenuItem>

                    </HeaderBarMenu>
                <ContentBlock className={'content'}>


                    <Block1>
                        <Box1>
                            <Fade className={'fade'} right>
                                <h1>SMART BUILDING CITY  </h1>
                                <h1>  DEVELOPMENT  PROJECT</h1>

                            </Fade>
                        </Box1>

                        <Box2>
                            <Fade className={'fade'} left>

                                <h3>Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                    Delectus ducimus hic ipsa minus modi
                                </h3>
                            </Fade>

                        </Box2>

                    </Block1>

                </ContentBlock>
                <Block/>
                <Building/>
                <Gallery/>
                <FooterContent/>
                <Form/>
            </div>
        </BrowserRouter>


    )
}

export default Carousel