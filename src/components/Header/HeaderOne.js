import { useRootContext } from "@/context/context";
import navItems, { social } from "@/data/NavItems";
import useScroll from "@/hooks/useScroll";
import logo from "@/images/resources/logo1.png";
import Link from "next/link";
import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";
import { useSelector } from "react-redux";

const HeaderOne = () => {
  const {loggedIn} = useSelector((state) => state.authReducer);
  const { scrollTop } = useScroll(130);
  const { toggleMenu, toggleSearch } = useRootContext();

  useEffect(()=>{
    console.log('---------', loggedIn)
  },[])

  return (
    <header className="main-header clearfix">
      <div className="main-header__logo">
        <Link href="/">
          <a>
            <Image src={logo.src} alt="" />
          </a>
        </Link>
      </div>
      <div className="main-menu-wrapper">
        <div className="main-menu-wrapper__top">
          <div className="main-menu-wrapper__top-inner">
            <div className="main-menu-wrapper__left">
              <div className="main-menu-wrapper__left-content">
                <div className="main-menu-wrapper__left-text">
                  <p>Welcome to the Charity & Donation Theme</p>
                </div>
                <div className="main-menu-wrapper__left-email-box">
                  <div className="icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="email">
                    <a href="mailto:rsfoundation@gmail.com">
                      rsfoundatiiion@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-menu-wrapper__right">
              <div className="main-menu-wrapper__right-social">
                {social.map(({ icon, link }, index) => (
                  <a href={link} key={index}>
                    <i className={`fab ${icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="main-menu-wrapper__bottom">
          <nav
            className={
              scrollTop
                ? "stricky-header stricked-menu main-menu stricky-fixed slideInDown animated"
                : "main-menu slideIn animated"
            }
          >
            <div
              className={
                scrollTop
                  ? "sticky-header__content main-menu__inner"
                  : "main-menu__inner"
              }
            >
              <span
                onClick={() => toggleMenu()}
                className="mobile-nav__toggler"
              >
                <i className="fa fa-bars"></i>
              </span>
              <ul className="main-menu__list">
                {navItems.map((navItem) => (
                  <NavItem key={navItem.id} navItem={navItem} />
                ))}
              </ul>
              <div className="main-menu__right">
                <span
                  onClick={toggleSearch}
                  style={{ cursor: "pointer" }}
                  className="main-menu__search search-toggler icon-magnifying-glass"
                ></span>
                <a href="#" className="main-menu__cart icon-shopping-cart "></a>
                <div className="main-menu__phone-contact">
                  <div className="main-menu__phone-icon">
                    <span className="icon-chat"></span>
                  </div>
                  <div className="main-menu__phone-number">
                    <p>Call Anytime</p>
                    <a href="tel:7905910944">7905910944</a>
                  </div>
                </div>
                {
                  loggedIn ? <Link href="/donation">
                  <a className="main-menu__donate-btn">
                    <i className="fa fa-heart"></i>Donate Us
                  </a>
                </Link> :<Link href="/sign-up">
                  <a className="main-menu__donate-btn">
                    <i className="fa fa-heart"></i>Sign-Up
                  </a>
                </Link>
                }
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
