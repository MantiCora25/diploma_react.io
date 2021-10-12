import react from 'react';
import './less/portfolio.less';
import './css/portfolio.css'
import Masonry from 'react-masonry-css';


const Portfolio = () => {
    return (
        <div className="portfolio-main" id='portfolio'>
            <div className="portfolio-headline">
                <h2 className='portfolio-headline-text'>our portfolio</h2>
                <div className='portfolio-small-green'></div>
            </div>

            <p className="portfolio-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="container portfolio-content-container">
                <div className="row">
                    <div className="col-xl-3">
                        <div className='portfolio-left-column'>
                            <h2 className='portfolio-left-headline'>Choose Category</h2>
                            <ul className='portfolio-left-menu'> <h3 className='portfolio-left-menu-headline'>all</h3>
                                <li className='portfolio-left-menu-item'><a className='portfolio-left-menu-item-a' href='https://en.wikipedia.org/wiki/Design'>webdesign</a></li>
                                <li className='portfolio-left-menu-item'><a className='portfolio-left-menu-item-a' href='https://en.wikipedia.org/wiki/Design'>graphic design</a></li>
                                <li className='portfolio-left-menu-item'><a className='portfolio-left-menu-item-a' href='https://en.wikipedia.org/wiki/Design'>fashion</a></li>
                                <li className='portfolio-left-menu-item'><a className='portfolio-left-menu-item-a' href='https://en.wikipedia.org/wiki/Design'>logo design</a></li>
                                <li className='portfolio-left-menu-item'><a className='portfolio-left-menu-item-a' href='https://en.wikipedia.org/wiki/Design'>advertising</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-9 gallery-container">
                    <Masonry
                        breakpointCols={3}
                        className="gallery-main"
                        columnClassName="gallery-column">
                            <div className="gallery-item gallery-item-1"></div>
                            <div className="gallery-item gallery-item-2"></div>
                            <div className="gallery-item gallery-item-3"></div>
                            <div className="gallery-item gallery-item-4"></div>
                            <div className="gallery-item gallery-item-5"></div>
                            <div className="gallery-item gallery-item-6"></div>
                            <div className="gallery-item gallery-item-7"></div>
                            <div className="gallery-item gallery-item-8"></div>
                            <div className="gallery-item gallery-item-9"></div>
                    </Masonry>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;