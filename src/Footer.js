import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faYoutube, faLinkedin, faPinterest, faInstagram} from '@fortawesome/free-brands-svg-icons'
//import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import './less/footer.less'
import './css/footer.css'
import './vendore/fontawesome/css/all.css'

const Footer =() => {
    return (
        <div className="footer-main" id='contact'>
            <div className='container footer-container'>
                <div className='row'>
                    <div className="col-6 footer-left-block">
                        <div className="footer-navigation-block">
                            <a className='footer-navigation-item' href="#home">Home</a>
                            <p className='footer-navigation-dash'>-</p>
                            <a className='footer-navigation-item' href="#about">About Us</a>
                            <p className='footer-navigation-dash'>-</p>
                            <a className='footer-navigation-item' href="#services">Services</a>
                            <p className='footer-navigation-dash'>-</p>
                            <a className='footer-navigation-item' href="#portfolio">Portfolio</a>
                            <p className='footer-navigation-dash'>-</p>
                            <a className='footer-navigation-item' href="#blog">Blog</a>
                            <p className='footer-navigation-dash'>-</p>
                            <a className='footer-navigation-item' href="#contact">Contact US</a>
                        </div>
                    </div>

                    <div className="col-6 footer-right-block">
                        <div className="footer-right-text">Created By Liubomyr Liakhovych, 2021. All Rights Reserved</div>
                        <div className="footer-right-icons">
                            <a className="footer-icon fb-icon" href='https://www.facebook.com/'>
                                <FontAwesomeIcon icon={faFacebookF} className="icon"/>
                            </a>
                            <a className="footer-icon tw-icon" href='https://twitter.com/'>
                                <FontAwesomeIcon icon={faTwitter} className="icon"/>
                            </a>
                            <a className="footer-icon yt-icon" href='https://www.youtube.com/'>
                                <FontAwesomeIcon icon={faYoutube} className="icon"/>
                            </a>
                            <a className="footer-icon li-icon" href='https://www.linkedin.com/'>
                                <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                            </a>
                            <a className="footer-icon pi-icon" href='https://www.pinterest.ru/'>
                                <FontAwesomeIcon icon={faPinterest} className="icon"/>
                            </a>
                            <a className="footer-icon inst-icon" href='https://www.instagram.com/'>
                                <FontAwesomeIcon icon={faInstagram} className="icon"/>
                            </a>
                        </div>
                        <div className="clear">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Footer;