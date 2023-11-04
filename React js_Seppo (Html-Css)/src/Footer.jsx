import React from 'react'
import "./style.css"
const Footer = () => {
  return (
    <>
    <footer>
        <div class="d-flex justify-content-around pt-5 mb-4">
            <div class="footer_img"><img src="../IMAGES/logo.png" alt="footer_logo"/></div>
        </div>
        <div class="d-flex justify-content-around mb-4">
            <div class="mb-2 vertical_line"></div>
        </div>
        <div class="d-flex justify-content-around mb-4">
            <a href="javascript:void(0)"><p class="footer_p1">hello@cocobasic.com</p></a>
        </div>
        <div class="d-flex justify-content-around">
            <div class="vertical_line"></div>
        </div>
        <div class="d-flex justify-content-around mb-4">
            <div class="mb-2 horizontal_line"></div>
        </div>
        <div class="d-flex justify-content-around mb-4">
            <div class="footer_iconmain">
                <a href="javascript:void(0)"><i class="fa-brands fa-twitter"></i></a>
                <a href="javascript:void(0)"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="javascript:void(0)"><i class="fa-brands fa-behance"></i></a>
                <a href="javascript:void(0)"><i class="fa-brands fa-dribbble"></i></a>
            </div>
        </div>
        <div class="d-flex justify-content-around">
            <p class="footer_p2">&copy; 2022 Seppo HTML Template by <span class="footer_span">CocoBasic</span></p>
        </div>
    </footer>
    </>
  )
}

export default Footer