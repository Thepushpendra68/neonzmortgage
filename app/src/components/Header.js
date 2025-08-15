

'use client';
import Link from "next/link";
import { useState } from "react";




export default function Header () {

    const [showNAv, setShowNav] = useState(false)
    


   const handleNavClick = () => {
  setShowNav(false)
};


    return (
        <section id="header">
           
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container d-flex justify-content-between align-items-center w-100">

          <Link className="navbar-brand" href='/'>
            <img onClick={handleNavClick} src="/assets/images/logo.png" className="logo" alt="Neon Mortgage" />
          </Link>

          <button onClick={() => setShowNav((nav) => !nav)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse justify-content-center ${showNAv ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav">
              {[
                { to: '/', label: 'Home' },
                { to: '/about-us', label: 'About Us', onlymobile: true },
                { to: '/products', label: 'Products', submenu: true, children: [
                  {to: '#new-purchase', label: 'New Purchase'},
                  {to: '#re-finance', label: 'Refinance'},
                  {to: '#equity-release', label: 'Equity'},
                  {to: '#non-resident', label: 'Non-Resident'},
                  {to: '#handover-payment', label: 'Handover Payment'},
                  {to: '#under-constructon', label: 'Underconstruction'},
                  {to: '#commercial', label: 'Commercial Mortgage'},
                  {to: '#plot-purchase', label: 'Plot Purchase'}
                ] },
                { to: '/journey', label: 'Eligibility' },
                { to: '/calculator', label: 'Calculator' },
                { to: '/blogs', label: 'Blogs' },
                { to: '/faqs', label: "FAQ's" },
                { to: '/contact-us', label: 'Contact Us', onlymobile: true }
              ].map((item, i) => item.submenu ? (
                <li onClick={handleNavClick} className="nav-item dropdown" key={`${item.to}-${i}`}>
                  <Link href={item.to} >
                  <span className="nav-link dropdown-toggle text text-light">
                     {item.label}
                  </span></Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            {
              item.children.map((child, i) => <li onClick={handleNavClick} key={`${child.to}-${i}`}><Link href={`${item.to}${child.to}`}><span className="dropdown-item" href="#">{child.label}</span></Link></li>)
            }
          </ul>
        </li>
              ) : (
                <li onClick={handleNavClick} className={`nav-item ${item.onlymobile ? 'onlymobile' : ''}`} key={i}>
                  <Link href={item.to} >
                    <span className="nav-link text text-light">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="form-inline header-right">
            <Link href='/about-us' ><span className="nav-link text about-side">About Us</span></Link>
            <Link href='/contact-us'>
              <span className="btn btn-outline-primary btn-rounded btn-noicon text" type="button">Contact Us</span>
            </Link>
          </div>

        </div>
      </nav>
    </section>
    )
}