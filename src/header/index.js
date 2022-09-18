import React from 'react'

function Header(props) {
    return (
        <header id="header" class="fixed-top d-flex align-items-center header-transparent header-scrolled">
            <div class="container d-flex align-items-center"><h1 class="logo">
                <a>JR Builders</a></h1>
                <nav id="navbar" class="navbar order-last order-lg-0"><ul>
                    <li><a class="nav-link scrollto" href="#hero">Home</a></li><li>
                        <a class="nav-link scrollto" href="#about">About</a></li><li>
                        <a class="nav-link scrollto" href="#services">Services</a>
                    </li><li><a class="nav-link scrollto" href="#portfolio">Projects</a>
                    </li><li><a class="nav-link scrollto" href="#team">Team</a></li>
                    <li>
                        <a class="nav-link scrollto active" href="#footer">Contact</a></li></ul>
                    <i class="bi bi-list mobile-nav-toggle"></i></nav>
            </div>
            <div class="social-links">
            <a href="https://www.instagram.com/buildersjr/" class="facebook"><i class="fa fa-facebook"></i></a>
                                <a href="https://www.instagram.com/buildersjr/" class="instagram"><i class="fa fa-instagram"></i></a>
                                <a href="https://in.linkedin.com/in/jayakumar-dhanasekaran-1a7391111" class="linkedin"><i class="fa fa-linkedin"></i></a>
            </div>
        </header>

    )

}

export default Header