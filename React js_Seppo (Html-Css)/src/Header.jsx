import React from 'react'
import "./style.css"
const Header = () => {
  return (
    <>
    <header>
        <nav>
            <div class="container m-0 p-0">
                <div class="d-flex align-items-center justify-content-between">
                        <a href="index.html"><img src="./IMAGES/logo.png" alt="logo"/></a>
                         <ul class="header_ul d-flex align-items-center">
                             <a class="d-flex align-items-center" href="#ahome_banner"><li class="header_li1">Home</li></a>
                             <a class="d-flex align-items-center" href="#ahome_services"><li class="header_li">Services</li></a>
                             <a class="d-flex align-items-center" href="#asec_about"><li class="header_li">About</li></a>
                             <a class="d-flex align-items-center" href="#asec_client"><li class="header_li">Clients</li></a>
                             <a class="d-flex align-items-center" href="#asec_news"><li class="header_li">News</li></a>
                             <a class="d-flex align-items-center" href="#asec_portfolio"><li class="header_li">Portfolio</li></a>
                             <a class="d-flex align-items-center" href="#asec_pricing"><li class="header_li">Pricing</li></a>
                             <a class="d-flex align-items-center" href="#asec_team"><li class="header_li">Team</li></a>
                             <a class="d-flex align-items-center" href="#asec_skills"><li class="header_li">Skills</li></a>
                             <a class="d-flex align-items-center" href="#asec_milestone"><li class="header_li">Milestones</li></a>
                             <a class="d-flex align-items-center" href="#asec_contact"><li class="header_li me-4">Contact</li></a>
                         </ul>
                         <i class="fa-solid fa-bars-staggered">
                            <div class="invisible_">
                                <a href="#ahome_banner"><li class="header_li1">Home</li></a>
                                <a href="#ahome_services"><li class="header_li">Services</li></a>
                                <a href="#asec_about"><li class="header_li">About</li></a>
                                <a href="#asec_client"><li class="header_li">Clients</li></a>
                                <a href="#asec_news"><li class="header_li">News</li></a>
                                <a href="#asec_portfolio"><li class="header_li">Portfolio</li></a>
                                <a href="#asec_pricing"><li class="header_li">Pricing</li></a>
                                <a href="#asec_team"><li class="header_li">Team</li></a>
                                <a href="#asec_skills"><li class="header_li">Skills</li></a>
                                <a href="#asec_milestone"><li class="header_li">Milestones</li></a>
                                <a href="#asec_contact"><li class="header_li me-4">Contact</li></a>
                            </div>
                        </i>
                        </div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header