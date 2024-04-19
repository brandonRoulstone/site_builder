import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TestFile = () => {
  return (
    <>
      <div id='dashBoard' className='mt-5'>
        <div className='container-fluid' id='containerOneChild'>

          hello

          <Navbar id='justifyNavbar' className='py-3'>
            <Nav.Link to="/" as={Link} id='bottomNav'>Home</Nav.Link>
            <Nav.Link to="/" as={Link} id='bottomNav'>Inbox</Nav.Link>
            <Nav.Link to="/" as={Link} id='bottomNav'>Home</Nav.Link>
            <Nav.Link to="/" as={Link} id='bottomNav'>Home</Nav.Link>
          </Navbar>
        </div>
      </div>
    </>
  )
}

export default TestFile
