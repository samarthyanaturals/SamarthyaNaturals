import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';
import SearchInput from '../Form/SearchInput';
import useCategory from '../../hooks/useCategory';
import { useCart } from '../../context/cart';
import { useFavorites } from '../../context/favourite';
import { Badge, Avatar } from 'antd';
import { FaCartShopping } from "react-icons/fa6";
import Hamburger from './Hamburger';
import './Navbar.css';
import { FaRegHeart } from "react-icons/fa";
import logo from './image/logo.png'

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [cart] = useCart();
  const [favorites] = useFavorites();
  const [auth, setAuth] = useAuth();
  const categories = useCategory([]);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  //Logout function
  const handleLogout = async () => {
    try {
      await toast.promise(
        new Promise((resolve, reject) => {
          setTimeout(() => {
            setAuth({
              ...auth,
              user: null,
              token: "",
            });
            localStorage.removeItem("auth");
            resolve();
          }, 1000); // Simulating a delay for demonstration purposes
        }),
        {
          loading: 'Logging out...',
          success: () => {
            toast.success("Logout Successfully");
          },
          error: () => {
            toast.error("Failed to logout");
          }
        }
      );
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error("Something went wrong during logout");
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className='left_container'>
          <ul style={{display:'flex',alignItems:'center'}}>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
            <NavLink to="/about">About</NavLink>
            </li>
            <li>
            <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
          </div>
          
          <div className="logo" style={{width:'29%'}}>
            <NavLink to="/"><img src={logo} width={'100%'}></img></NavLink>
          </div>

          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`} style={{top:62}}>
            <ul>
              <li id='home'>
                <NavLink to="/">Home</NavLink>
              </li>
              <li id='shop'>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <div className="dropdown" id='loginout' style={{ marginRight: "4%", marginTop: "1%", padding: 0 }}>
                {!auth.user ? (
                  <>
                    <a
                      className="btn  dropdown-toggle nav-link"
                      href="#"
                      role="button"
                      id="authDropdown"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ backgroundColor: '#7fad39' }}
                    >
                      Sign Up / Login
                    </a>
                    <div className="dropdown-menu" aria-labelledby="authDropdown">
                      <NavLink to="/register" className="dropdown-item">Sign Up</NavLink>
                      <NavLink to="/login" className="dropdown-item">Login</NavLink>
                    </div>
                  </>
                ) : (
                  <>
                    <a
                      className="btn btn-info dropdown-toggle nav-link"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ backgroundColor:'transparent',border:'none'}}
                    >
                      {auth?.user?.name}
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <NavLink to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`} className="dropdown-item">Dashboard</NavLink>
                      <NavLink onClick={handleLogout} to="/login" className="dropdown-item">Logout</NavLink>
                    </div>
                  </>
                )}
              </div>
              <li id='blog'>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li id='about'>
                <NavLink to="/about">About</NavLink>
              </li>

              <li style={{ marginRight: 20,lineHeight:'30px'}}>
                <button type="button" className="position-relative btn  p-0" >
                  <NavLink to="/cart" className="nav-link">
                    <FaCartShopping size={18} color='#00db1a'/>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      {cart?.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </NavLink>
                </button>
              </li>
              <li style={{ marginRight: 20,lineHeight:'30px' }}>
                <button type="button" className="position-relative btn p-0" >
                  <NavLink to="/favourite" className="nav-link">
                    <FaRegHeart fontSize={18} color='#00db1a'/>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      {favorites?.length}
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </NavLink>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
