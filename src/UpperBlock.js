import react from 'react';
import styled from 'styled-components'
import './less/upperblock.less'
import './css/upperblock.css';



const UpperBlock= () => {
    return (
        <div className="upper-block" id="home">
            <div className="upper-bg-block">

                <p className="upper-bg-block-p-akad">akad.</p>

                <div className="container creative-agency-block">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="upper-green-block">
                                we're
                            </div>
                            <h1 className="upper-grey-frame">
                                creative agency
                            </h1>
                            <p className="upper-text-block">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container upper-columns-block">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 upper-column-left">
                            <div className="upper-left-column-img">

                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 upper-column-right" id='about'>
                            <div className="upper-right-column-block">
                                <div className="upper-right-small-green"></div>
                                <p className="upper-right-column-headline">
                                    history of agency
                                </p>
                                <p className="upper-right-column-text">
                                    Porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi modi tempora incidunt ut labore.
                                </p>
                                <a className="upper-right-column-button" href='https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0'>Read more</a>
                                <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default UpperBlock;

/*<div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        

                        
                    </div>
                </div>
            </div> */