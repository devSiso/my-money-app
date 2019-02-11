/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import Navbar from './navbar'

export default props => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'>
                <i className='fa fa-money'/>
            </span>
            <span className='logo-lg'>
                <i className='fa fa-money'/>
                <b> My</b> Money
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href="javascript:;" className='sidebar-toggle' data-toggle='offcanvas'></a>
            <Navbar />
        </nav>
    </header>
)