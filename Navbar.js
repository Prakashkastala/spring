import React from 'react'
function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg nav-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Full Stack Application</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  <div> 
<a href='/add-user' className='btn btn-outline-light mx-2'>Add User</a>
  </div>
  </div> 
</nav>
    
    </>
  )
}
export default Navbar;