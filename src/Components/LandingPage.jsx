import { TypeAnimation } from 'react-type-animation';
const LandingPage = () => {
    
  return (
    <div>

        <div className="px-4 pt-5 my-5 text-center" id="bcg">

            <div className="container-fluid mt-5 pt-5">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'We produce food for Mice',
                        1000,
                        'We produce food for Hamsters',
                        1000,
                        'We produce food for Guinea Pigs',
                        1000,
                        'We produce food for Chinchillas',
                        1000,
                    ]}
                    speed={50}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                />
                <h1 className="text-start display-2 mb-3">Best sellers in Cape Town.</h1>

                <hr className="mt-1 w-50"/>

            </div>
            <div className="d-flex justify-content-evenly mt-5 container-fluid">
                <button className="btn border border-black py-2 px-4 fw-bold">About us</button>
                <button className="btn border border-black py-2 px-4 fw-bold">Store</button>
                <button className="btn border border-black py-2 px-4 fw-bold">login</button>
            </div>
            {/* <img src="https://cdn-images.imagevenue.com/a2/52/9f/ME183BNX_o.png" alt="" height={400} width={400} data-fitObj id="img"/> */}
            <div id="logo">

                <h2 id="logoTxt" className="mx-4">

                    Woo Commerce
                    
                    <br />

                    <p>We innovate</p>

                </h2>
                
                <img src="https://cdn-images.imagevenue.com/7b/a3/e9/ME183BPA_o.png" height={300} width={300} alt="logo" data-fitObj/>
            </div>

        </div>

    </div>
  )
}

export default LandingPage;
