import react from 'react'; 
import './css/App.css';
import './vendore/bootstrap-4.0.0/dist/css/bootstrap.min.css';
import './vendore/bootstrap-4.0.0/dist/css/bootstrap-grid.min.css';
import './fonts/montserrat/stylesheet.css';
import './fonts/opensans/stylesheet.css';

import UpperBlock from './UpperBlock.js';
import WhyChoose from './WhyChoose.js';
import Portfolio from './OurPortfolio.js';
import ContactUs from './ContactUs.js';
import Footer from './Footer.js'

import './less/responsive.less';
import './css/responsive.css'

function App() {
  return (
      <div className="App">
        <main className="for_page">
          <div className='page'>
            <UpperBlock />
            <WhyChoose />
            <Portfolio />
            <ContactUs />
          </div>
          <Footer />
        </main>
        
      </div>
      

    
  );
}

export default App;
