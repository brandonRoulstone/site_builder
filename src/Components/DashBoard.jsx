import React from 'react'

const TestFile = () => {
  return (
    <>
    <div id='dashBoard'>
      <div className="container" id='containerOne'>

        <div className='container-fluid' id='containerOneChild'>
          Test section 1
        </div>


        <div className='container-fluid' id='containerTwoChild'> 
          Test section 2
        </div>
          
        </div>
        <div className="container" id='containerTwo'>
          Test Route 2
      </div>
    </div>
    </>
  )
}

export default TestFile
