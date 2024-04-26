import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const TestFile = () => {
  const [isClicked, setClick] = useState(false);

  const click = function (){
    if(isClicked === true){
      console.log('clicked');
     return <div>clicked</div>
    }
  }
  return (
    <>
      <div id='dashBoard' classNameName='mt-5'>
        <div className="flex-shrink-0 p-3 bg-white" style={{width: '250px', height: '100vh'}}>
        <Nav.Link to="/" as={Link} className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
        <i class="fa-solid fa-chart-line" style={{color: "#000000"}}></i>
        <span className="fs-5 fw-semibold">Collapsible</span>
        </Nav.Link>
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button className="btn btn-toggle align-items-center collapsed border-0 w-100" data-bs-toggle="collapse" id="sideBarButton" data-bs-target="#home-collapse" aria-expanded="true" {...click}>
              Home
            </button>
            <div className="collapse show" id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><Nav.Link to="/" as={Link} className="link-dark rounded mt-2 fs-6" id="linkz">Overview</Nav.Link></li>
                <li><Nav.Link to="/" as={Link} className="link-dark rounded mt-2 fs-6" id="linkz">Updates</Nav.Link></li>
                <li><Nav.Link to="/" as={Link} className="link-dark rounded mt-2 fs-6" id="linkz">Reports</Nav.Link></li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button className="btn btn-toggle align-items-center collapsed border-0 w-100" data-bs-toggle="collapse" id="sideBarButton" data-bs-target="#dashboard-collapse" aria-expanded="false">
              Dashboard
            </button>
            <div className="collapse" id="dashboard-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><Nav.Link to="/" as={Link} className="link-dark rounded mt-2 fs-6" id="linkz">Overview</Nav.Link></li>
                <li><Nav.Link to="/" as={Link} className="link-dark rounded mt-2 fs-6" id="linkz">Weekly</Nav.Link></li>
                <li><Nav.Link to="/" as={Link} className="link-dark rounded mt-2 fs-6" id="linkz">Monthly</Nav.Link></li>
                <li><Nav.Link to="/" as={Link} className="link-dark rounded mt-2 fs-6" id="linkz">Annually</Nav.Link></li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button className="btn btn-toggle align-items-center collapsed border-0 w-100" data-bs-toggle="collapse" id="sideBarButton" data-bs-target="#orders-collapse" aria-expanded="false">
              Orders
            </button>
            <div className="collapse" id="orders-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><Nav.Link to="/" as={Link} className="link-dark rounded mt-2 fs-6" id="linkz">New</Nav.Link></li>
                <li><Nav.Link to="/" as={Link} className="link-dark rounded mt-2 fs-6" id="linkz">Processed</Nav.Link></li>
                <li><Nav.Link to="/" as={Link} className="link-dark rounded mt-2 fs-6" id="linkz">Shipped</Nav.Link></li>
                <li><Nav.Link to="/" as={Link} className="link-dark rounded mt-2 fs-6" id="linkz">Returned</Nav.Link></li>
              </ul>
            </div>
          </li>
          <li className="border-top my-3"></li>
          <li className="mb-1">
            <button className="btn btn-toggle align-items-center collapsed border-0 w-100" data-bs-toggle="collapse" id="sideBarButton" data-bs-target="#account-collapse" aria-expanded="false">
              Account
            </button>
              <div className="collapse" id="account-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li><Nav.Link to="/" as={Link} className="link-dark rounded mt-2 fs-6" id="linkz">New...</Nav.Link></li>
                  <li><Nav.Link to="/" as={Link} className="link-dark rounded mt-2 fs-6" id="linkz">Profile</Nav.Link></li>
                  <li><Nav.Link to="/" as={Link} className="link-dark rounded mt-2 fs-6" id="linkz">Settings</Nav.Link></li>
                  <li><Nav.Link to="/" as={Link} className="link-dark rounded mt-2 fs-6" id="linkz">Sign out</Nav.Link></li>
                </ul>
              </div>
          </li>
        </ul>
        </div>
        <div className='container-fluid' id='containerOneChild'>

          {/* <Navbar id='justifyNavbar' classNameName='py-3'>
            <Nav.Link to="/" as={Link} id='bottomNav'>Home</Nav.Link>
            <Nav.Link to="/" as={Link} id='bottomNav'>Inbox</Nav.Link>
            <Nav.Link to="/" as={Link} id='bottomNav'>Home</Nav.Link>
            <Nav.Link to="/" as={Link} id='bottomNav'>Home</Nav.Link>
          </Navbar> */}
        </div>
      </div>
    </>
  )
}

export default TestFile
