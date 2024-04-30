import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Dashboard = () => {
  const [isClosed, setClosed] = useState(false);
  const [taskData, setTaskData] = useState([]);
  // const [isCompleted, setCompleted] = useState(false)

  const fetchdata = async () => {
    try {
      const data = await axios.get('http://localhost:3360/tasks');
      setTaskData(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchdata();
  }, []);

  const toggleSideBar = () => {
    let elem = document.getElementById("sideBar");
    elem.style='left: -50%';
    setClosed(true);
    console.log(isClosed);
  }

  const openSideBar = () => {
    let elem = document.getElementById("sideBar");
    if(isClosed === true){
      elem.style='left: 0%';
      setClosed(false);
      console.log(isClosed);
    }
  }

  return (
    <>
      <div id='dashBoard' className='mt-5'>
        <div className="flex-shrink-0 p-3 bg-white" id='sideBar'>
          <Nav.Link to="/" as={Link} className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
          <span className="fs-5 fw-semibold">Collapsible</span>
          </Nav.Link>
          <ul className="list-unstyled ps-0">
            <li className="mb-1">
              <button className="btn btn-toggle align-items-center collapsed border-0 w-100" data-bs-toggle="collapse" id="sideBarButton" data-bs-target="#home-collapse" aria-expanded="true">
                Plan
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
                Managment
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
                Blog
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
                    <li><Nav.Link to="/" as={Link} className="link-dark rounded mt-2 fs-6" id="linkz">Profile</Nav.Link></li>
                    <li><Nav.Link to="/" as={Link} className="link-dark rounded mt-2 fs-6" id="linkz">Settings</Nav.Link></li>
                    <li><Nav.Link to="/" as={Link} className="link-dark rounded mt-2 fs-6" id="linkz">Sign out</Nav.Link></li>
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

          { isClosed === false ? <button id='close' onClick={toggleSideBar}>
            x
          </button> : <button id='close' onClick={openSideBar}>
            {">"}
          </button>}

          <div className='container-fluid'>
            {taskData.map((value) => {
              return <div key={value.taskId} className='d-flex justify-content-center container-fluid mt-5'>
                <div id='taskCard' className='bg-white w-50 mt-3'>
                  <div className='d-flex justify-content-end gap-4 w-100 my-1'>
                    <p>{value.taskdeadline}</p>
                    {
                      value.completed >= 1 
                      ? (<input type="checkbox" checked id="checkbox" value={value.completed} />) 
                      : ( <input type="checkbox" id="checkbox" value={value.completed} />)
                    }
                  </div>
                  <h5 className='fw-bold'>{value.taskname}</h5>
                  <p>{value.created}</p>
                </div>
              </div>
              })
            }
          </div>
          <div className='mt-1 pt-5 px-2 py-2' id='cardsNotify'>
              <div className='card py-5 w-100' id='cardXv'>
                <div className='position-absolute top-0 w-100'>
                  <ul className='list-unstyled d-flex justify-content-end gap-3 mx-2'>
                    <li><Nav.Link className='fw-bold text-white'>asign task</Nav.Link></li>
                    <li><Nav.Link className='fw-bold text-white'>my tasks</Nav.Link></li>
                    <li><Nav.Link className='fw-bold text-white'>Completed</Nav.Link></li>
                  </ul>
                </div>
              </div>
              {/* <div className='card py-5 w-100' id='cardXv'>
                assigned
              </div> */}
              <div className='card py-5 w-100' id='cardXv'>
                messages
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
