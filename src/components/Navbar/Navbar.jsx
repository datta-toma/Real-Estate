import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo img.jpg';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import "./Nav.css";


const Navbar = () => {

  const {logout, user} = useAuth()
    console.log(user)

  const links = <>
  <li><NavLink to="/" >Home</NavLink></li>
  <li><NavLink to="/about">About</NavLink></li>
  <li><NavLink to="/update">Update Profile</NavLink></li>
  {
    user && <>
    <li><NavLink to="/contact">Contact Us</NavLink></li>
    </>
  }
  </>

    


    return (
        <div className="navbar Nav-contain p-3  rounded-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <img className='w-24' src={logo} alt=''></img>
          <a className="btn btn-ghost text-4xl font-extrabold">Crowny</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
          
          </ul>
        </div>


       <div className="navbar-end ">
        {
          user? <div className=" flex   gap-3 dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip  tooltip-left" data-tip={user.email}>

              <div className="w-10 rounded-full">
                  <img src={user?.photoURL || "https://i.postimg.cc/c4RMWFc4/unnamed.png" } />
                

                  <button className="btn">Left</button>
              </div>
              
          </label>
          <div>
          <button
                      onClick={logout}
                      className="btn btn-sm  btn-glass">Logout</button>
          </div>
          
      </div>
          :
          <Link to='/login'>
              <button className="btn btn-sm  btn-ghost">Login</button>
          </Link>
        }
       </div>

        {/* <div className="navbar-end">
          <Link to="/login">
          <button className="btn btn-sm  btn-ghost">Login</button>
          </Link>

        </div> */}

{/* <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li><a>Logout</a></li>
      </ul>
    </div> */}
  </div>


    );
};

export default Navbar;