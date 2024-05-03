import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import addTaskIcon from './icons/addTaskIcon.jsx'
import axios from 'axios'
import { PropTypes } from 'prop-types';

const Dashboard = () => {
  const [isClosed, setClosed] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [taskData, setTaskData] = useState([]);
  // const [isCompleted, setCompleted] = useState(false)

  const fetchdata = async () => {
    try {
      const {data} = await axios.get('http://localhost:3360/tasks');
      setTaskData(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchdata();
  }, []);

  const toggleSideBar = () => {
    let elem = document.getElementById("sideBar");
    elem.style='left: -100%';
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

  const [addNexTask, setAdd] = useState({
    taskname: '',
    taskdeadline: '',
    completed: false,
    created: ''
  });
  
  const addTask = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:3360/tasks', {...addNexTask, [e.target.name]: e.target.value});
      console.log('Task added:', data);
      // setAdd(
      //   { ...addNexTask, 
      //   [e.target.name]: e.target.value,
      // }
      // );
    } catch (error) {
      console.error('Error adding task:', error);
    }
  }

  const handleChange = (e) => {
    setAdd({...addNexTask, [e.target.name]: e.target.value,});
    console.log(e.target.value);
  };


  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

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

          <div className="toolbar">
            <button className='btn' onClick={addTask}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
               <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
              </svg>
            </button>
          </div>

          { isClosed === false ? <button id='close' onClick={toggleSideBar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
            </svg>
          </button> : <button id='close' onClick={openSideBar}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
            </svg>
          </button>}

          <div className='container'>
            {taskData.map((value) => {
              return <div key={value.taskId} className='d-flex justify-content-center container-fluid mt-5'>
                <div id='taskCard' className='bg-white w-50 mt-3'>
                  <div className='d-flex justify-content-end gap-4 w-100 my-1'>
                    <p>{value.taskdeadline}</p>
                    {
                      value.completed >= 1 
                      ? (<input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} id="checkbox" value={value.completed} />) 
                      : ( <input type="checkbox" onChange={handleCheckboxChange} id="checkbox" value={value.completed} />)
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
              <div className='card py-5 w-100' id='cardXv'>
                <form className='adjust_alignment'>
                  <input
                    type="text"
                    name="name"
                    placeholder="Task Name"
                    defaultValue={addNexTask.taskname}
                    onChange={handleChange}
                    className='mb-3 styledInput'
                  />
                  <input
                    name="deadline"
                    placeholder="Task deadline"
                    defaultValue={addNexTask.taskdeadline}
                    onChange={handleChange}
                    className='mb-3 styledInput'
                  />
                  <input
                    name="completed"
                    placeholder="Task completion"
                    defaultValue={addNexTask.completed}
                    onChange={handleChange}
                    className='mb-3 styledInput'
                  />
                  <input
                    name="created"
                    placeholder="Created"
                    defaultValue={addNexTask.created}
                    onChange={handleChange}
                    className='mb-3 styledInput'
                  />
                  <button type="button" className='primary_styled_btn' onClick={addTask}>
                    Add Task  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9454ee" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
