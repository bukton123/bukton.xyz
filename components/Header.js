import React from 'react'
import Link from 'next/link'

export default () => {

  return (
    <section className="header">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <img src="/static/img/logo.png" width="30" />
            </a>
          </Link>

          {/* <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a> */}
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link href="/">
              <a className="navbar-item">
                Home
              </a>
            </Link>
            <a className="navbar-item" href="http://blog.bukton.xyz">
              Blog
            </a>
          </div>

          <div className="navbar-end">
            <a
              className='navbar-item is-hidden-touch is-hidden-desktop-only'
              target='_blank'
              href="https://github.com/bukton123">
              <span className='icon'>
                <i className="fab fa-github" />
              </span>
            </a>
            <a
              className='navbar-item is-hidden-touch is-hidden-desktop-only'
              target='_blank'
              href="https://www.linkedin.com/in/kanok-kanket-002391146/">
              <span className='icon'>
                <i className="fab fa-linkedin-in" />
              </span>
            </a>
            <a
              className='navbar-item is-hidden-touch is-hidden-desktop-only'
              target='_blank'
              href="https://medium.com/@bukton">
              <span className='icon'>
                <i className="fab fa-medium" />
              </span>
            </a>
            <a
              className='navbar-item is-hidden-touch is-hidden-desktop-only'
              target='_blank'
              href="https://www.facebook.com/buk.ton.3">
              <span className='icon'>
                <i className="fab fa-facebook" />
              </span>
            </a>
            <a
              className='navbar-item is-hidden-touch is-hidden-desktop-only'
              target='_blank'
              href="mailto:buk_ton2@hotmail.com">
              <span className='icon'>
                <i className="far fa-envelope"/>
              </span>
            </a>
          </div>
        </div>
      </nav>
    </section>
  )
}