import './less/contactus.less'
import './css/contactus.css'
import buttonClick from './functions/buttonClick.js'

const ContactUs =() =>{

    return (
      <div className='contact-us-main' id='blog'>
        <div className='container contact-us-container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 contact-us-left'>
              <h2 className='contact-us-left-text'>
                you think we're cool ? Let's work together
              </h2>
              <a href='https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD' className='contact-us-left-button'>Get in touch</a>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 contact-us-right'>
              <div className='contact-us-right-white'>
                <h3 className='contact-us-right-headline'>
                  stay informed with our newsletter
                </h3>
                <p className='contact-us-right-text'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className='container contact-us-right-input-block'>
                  <div className="row">
                    <div className="col-9 right-input">
                      <input className='contact-us-right-input' id='input-mail' type='email' placeholder='your email'></input>
                    </div>
                    <div className="col-3 right-button">
                      <button className='contact-us-right-button' onClick={buttonClick} type='submit'>Send</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactUs;
  