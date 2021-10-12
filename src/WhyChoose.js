import react from 'react';
import styled from 'styled-components'
import Banner from './OurPortfolio.js'
import Reviews from './Reviews/Reviews.js'
import './css/whychoose.css'

const WhyChoose= () => {
    return (
        <div className="why-choose-main">
            <div className="why-choose-headline">
                <h2 className='why-choose-headline-text'>why choose us</h2>
                <div className='why-choose-small-green'></div>
            </div>
            
            <p className="why-choose-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="why-choose-content" id='services'>
                <div className="container why-choose-content-container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 why-choose-left-column">
                            <div className="container why-choose-left-column-content">
                                <div className="row">
                                    <div className="col-6 left-column-block-item block-item-1">
                                        <div className="left-column-block-img left-top-img-1"></div>
                                        <ul className="left-column-menu"> Unlimited options
                                            <li className='left-column-menu-item'><a href='https://en.wikipedia.org/wiki/Design'>branding</a></li>
                                            <li className='left-column-menu-item'><a href='https://en.wikipedia.org/wiki/Design'>design&copywriting</a></li>
                                            <li className='left-column-menu-item'><a href='https://en.wikipedia.org/wiki/Design'>concept development</a></li>
                                            <li className='left-column-menu-item'><a href='https://en.wikipedia.org/wiki/Design'>user experience</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-6 left-column-block-item block-item-2">
                                        <div className="left-column-block-img left-top-img-2"></div>
                                        <ul className="left-column-menu"> Design & Development
                                            <li className='left-column-menu-item'><a href='https://en.wikipedia.org/wiki/Design'>information architecture</a></li>
                                            <li className='left-column-menu-item'><a href='https://en.wikipedia.org/wiki/Design'>interface design</a></li>
                                            <li className='left-column-menu-item'><a href='https://en.wikipedia.org/wiki/Design'>product design</a></li>
                                            <li className='left-column-menu-item'><a href='https://en.wikipedia.org/wiki/Design'>integrated ad companies</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-6 left-column-block-item block-item-3">
                                        <div className="left-column-block-img left-top-img-3"></div>
                                        <ul className="left-column-menu"> E-commerce
                                            <li className='left-column-menu-item'><a href='https://en.wikipedia.org/wiki/Design'>prototyping</a></li>
                                            <li className='left-column-menu-item'><a href='https://en.wikipedia.org/wiki/Design'>technical consulting</a></li>
                                            <li className='left-column-menu-item'><a href='https://en.wikipedia.org/wiki/Design'>web applications</a></li>
                                            <li className='left-column-menu-item'><a href='https://en.wikipedia.org/wiki/Design'>quality testing</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-6 left-column-block-item block-item-4">
                                        <div className="left-column-block-img left-top-img-4"></div>
                                        <ul className="left-column-menu"> Customizable design
                                            <li className='left-column-menu-item'><a href='https://en.wikipedia.org/wiki/Design'>information architecture</a></li>
                                            <li className='left-column-menu-item'><a href='https://en.wikipedia.org/wiki/Design'>interface design</a></li>
                                            <li className='left-column-menu-item'><a href='https://en.wikipedia.org/wiki/Design'>product design</a></li>
                                            <li className='left-column-menu-item'><a href='https://en.wikipedia.org/wiki/Design'>integrated ad companies</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 why-choose-right-column">
                            <div className='why-choose-right-column-img'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChoose;