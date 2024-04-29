import { TypeAnimation } from 'react-type-animation';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
const LandingPage = () => {
  return (
    <>
        <section className="px-4 pt-5 my-5 text-center" id="bcg">

            <div className="container-fluid mt-5 pt-5">
                <div className="d-flex justify-content-start">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'Best collaborating system',
                            1000,
                            'Best prices & deals',
                            1000,
                            'Best task management system',
                            1000,
                            'Collaborate with friends from anywhere',
                            1000,
                            'Collaborate with colleagues',
                            1000,
                        ]}
                        speed={50}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                        className="mediaQType"
                    />
                </div>
                <h1 className="text-start display-2 mb-3" id='mediaQ'>Manage your <span id='color'>tasks better.</span></h1>

                <hr className="mt-1 w-50"/>

            </div>

            <div className="d-flex mt-2 gap-3 container-fluid" id='flexCol'>
                <Nav.Link to="/friends" as={Link} className="btn py-4 px-4 fw-bold" id="btn">Friends <span className='float'><i className="fa fa-user-o" aria-hidden="true"></i></span></Nav.Link>
                <Nav.Link to="/dashboard" as={Link} className="btn py-4 px-4 fw-bold" id="btn">Dashboard <span className='float'>DB</span></Nav.Link>
                <Nav.Link to="/profile" as={Link} className="btn py-4 px-4 fw-bold" id="btn">profile <span className='float'>Pr</span></Nav.Link>
                <Nav.Link to="/buy" as={Link} className="btn py-4 px-4 fw-bold" id="btn">Buy premium <span className='float'>S</span></Nav.Link>
            </div>
            {/* <img src="https://cdn-images.imagevenue.com/a2/52/9f/ME183BNX_o.png" alt="" height={400} width={400} data-fitObj id="img"/> */}
            <div id="logo">

                <h2 id="logoTxt" className="mx-4">

                    Manage UI
                    
                    <br />

                    <p>Innovative UI</p>

                </h2>
                
                <img src="https://cdn-images.imagevenue.com/43/8c/58/ME18440H_o.png" height={300} width={300} alt="logo" data-fitObj/>
            </div>

        </section>

    </>
  )
}

export default LandingPage;
