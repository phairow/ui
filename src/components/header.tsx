'use client';

import Image from "next/image";
import Link from "next/link";
import ScrollspyNav from 'react-scrollspy-nav';
import React, { useState } from 'react';
import useToggle from '@/hooks/useToggle';
import logo from '@/images/ratekl_logo_header.png';
import Drawer from '@/components_old/common/Drawer';
import NavMenus from '@/layout/headers/nav-menus';

const Header = ({ onePage = false }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [drawer, setValue] = useToggle();
  const handleClick = () => {
    setValue.toggle()
  }
  return (
    <div className="header-upper">
      <div className="container clearfix">
        <div className="header-inner d-flex align-items-center">
          <div className="logo-outer">
            <div className="logo">
              <Link href="/">
                
                  <Image src={logo} alt="logo" />
                
              </Link>
            </div>
          </div>

          <div className="nav-outer clearfix d-flex align-items-center">
            <nav className="main-menu navbar-expand-lg mx-lg-auto">
              <div className="navbar-header">
                <div className="mobile-logo py-15">
                  <Link href="/">
                    
                      <Image src={logo} alt="logo" />
                    
                  </Link>
                </div>
                <button type="button" className="navbar-toggle" onClick={setValue.toggle}>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>

              <div className="navbar-collapse collapse clearfix">
                {/* nav menu start */}
                {!onePage && <NavMenus />}
                {/* nav menu end */}
                {onePage && <ScrollspyNav
                  scrollTargetIds={["home", "about", "services", "portfolio", "pricing", "news"]}
                  offset={0}
                  activeNavClass="is-active"
                  scrollDuration="100"
                  headerBackground="true"
                > <ul className="navigation onepage clearfix">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#services">services</a></li>
                    <li><a href="#portfolio">portfolio</a></li>
                    <li><a href="#pricing">pricing</a></li>
                    <li><a href="#news">news</a></li>
                  </ul>
                </ScrollspyNav>}

              </div>
            </nav>

            <div className="nav-search mx-25">
              <button className="fa fa-search" onClick={() => setShowSearch(!showSearch)}></button>
              <form className={`${showSearch ? '' : 'hide'}`}>
                <input type="text" placeholder="Search" className="searchbox" required />
                <button type="submit" className="searchbutton fa fa-search"></button>
              </form>
            </div>

            <div className="menu-btn">
              <Link href="/contact" className="theme-btn">
                meet with us
              </Link>
            </div>
          </div>
        </div>
      </div>
    
      {/* sidebar start */}
      <Drawer drawer={drawer} action={setValue.toggle} single_page={onePage} home_nine={""} home_seven={""} single_page_menu={<ScrollspyNav
        scrollTargetIds={["home", "about", "services", "portfolio", "pricing", "news"]}
        offset={0}
        activeNavClass="is-active"
        scrollDuration="100"
        headerBackground="true"
      > <ul className="navigation onepage clearfix">
          <li onClick={handleClick}><a href="#home">Home</a></li>
          <li onClick={handleClick}><a href="#about">about</a></li>
          <li onClick={handleClick}><a href="#services">services</a></li>
          <li onClick={handleClick}><a href="#portfolio">portfolio</a></li>
          <li onClick={handleClick}><a href="#pricing">pricing</a></li>
          <li onClick={handleClick}><a href="#news">news</a></li>
        </ul>
      </ScrollspyNav>} />
      {/* sidebar end */}
    </div>
  );
};

export default Header;
