import React from "react";
import "./style.css";
const Main = () => {
  return (
    <>
      <header>
        <nav>
          <div className="container m-0 p-0">
            <div className="d-flex align-items-center justify-content-between">
              <a href="javascript:void(0)">
                <img src="./IMAGES/logo.png" alt="logo" />
              </a>
              <ul className="header_ul d-flex align-items-center">
                <a className="d-flex align-items-center" href="#ahome_banner">
                  <li className="header_li1">Home</li>
                </a>
                <a className="d-flex align-items-center" href="#ahome_services">
                  <li className="header_li">Services</li>
                </a>
                <a className="d-flex align-items-center" href="#asec_about">
                  <li className="header_li">About</li>
                </a>
                <a className="d-flex align-items-center" href="#asec_client">
                  <li className="header_li">Clients</li>
                </a>
                <a className="d-flex align-items-center" href="#asec_news">
                  <li className="header_li">News</li>
                </a>
                <a className="d-flex align-items-center" href="#asec_portfolio">
                  <li className="header_li">Portfolio</li>
                </a>
                <a className="d-flex align-items-center" href="#asec_pricing">
                  <li className="header_li">Pricing</li>
                </a>
                <a className="d-flex align-items-center" href="#asec_team">
                  <li className="header_li">Team</li>
                </a>
                <a className="d-flex align-items-center" href="#asec_skills">
                  <li className="header_li">Skills</li>
                </a>
                <a className="d-flex align-items-center" href="#asec_milestone">
                  <li className="header_li">Milestones</li>
                </a>
                <a className="d-flex align-items-center" href="#asec_contact">
                  <li className="header_li me-4">Contact</li>
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section
          className="home_banner d-flex align-items-center"
          id="ahome_banner"
        >
          <div className="container">
            <div className="d-sm-flex col-sm-12 justify-content-sm-center">
              <h1 className="home_banner_h1">Technology</h1>
              <h1 className="home_banner_h1">& Visual Agency</h1>
            </div>
            <div className="col-6">
              <a href="javascript:void(0)">
                <div className="bannerbtn commonbutton btn rounded-pill mt-5">
                  LEARN MORE
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="home_services commonsec" id="ahome_services">
          <div className="crossbox d-flex align-items-center service_cross">
            <div className="cross1 d-flex justify-content-center align-items-center">
              <h3 className="crossh3">SERVICES</h3>
            </div>
          </div>
          <div className="container">
            <div className="mixno">
              <div className="ROW_1 row d-flex align-items-center justify-content-center">
                <div className="col-4">
                  <span className="back_no ms-5">1</span>
                </div>
                <div className="col-4">
                  <span className="back_no ms-5">2</span>
                </div>
                <div className="col-4">
                  <span className="back_no ms-5">3</span>
                </div>
              </div>
              <div className="ROW_2 row d-flex align-items-center justify-content-around">
                <div className="col-3 p-0 m-0 card hm_ser_card">
                  <h1 className="service_card_h1">Preciese</h1>
                  <p className="service_card_p1 mb-5">
                    Curabitur cursus mattis ligula a maximus pellentesque in
                    purus malesuada pharetra eros.
                  </p>
                  <div className="d-flex justify-content-start">
                    <a href="javascript:void(0)">
                      <div className="service_circle">
                        <h6 className="mt-1 service_card_more">MORE</h6>
                      </div>
                    </a>
                  </div>{" "}
                </div>
                <div className="col-3 p-0 m-0 card hm_ser_card">
                  <h1 className="service_card_h1">Support</h1>
                  <p className="service_card_p1 mb-5">
                    Est sem integer suscipit enim quis dictum feugiat etiam
                    pellentesque curabitur donec porttitor.
                  </p>
                  <div className="d-flex justify-content-start">
                    <a href="javascript:void(0)">
                      <div className="service_circle">
                        <h6 className="mt-1 service_card_more">MORE</h6>
                      </div>
                    </a>
                  </div>{" "}
                </div>
                <div className="col-3 p-0 m-0 card hm_ser_card">
                  <h1 className="service_card_h1">Responsive</h1>
                  <p className="service_card_p1 mb-5">
                    Donec vel est sem integer suscipit enim quis lorem posuere
                    vestibulum metus tempor vitae.
                  </p>
                  <div className="d-flex justify-content-start">
                    <a href="javascript:void(0)">
                      <div className="service_circle">
                        <h6 className="mt-1 service_card_more">MORE</h6>
                      </div>
                    </a>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec_about commonsec" id="asec_about">
          <div className="crossbox d-flex align-items-center about_cross">
            <div className="cross1 d-flex justify-content-center align-items-center ">
              <h3 className="crossh3">ABOUT</h3>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <p className="about_p1">WHO WE ARE</p>
                <h2 className="about_h2">
                  Live up to your creative potential.
                </h2>
                <p className="about_p2">
                  Code the energy hidden in matter citizens of distant epochs
                  from which we spring drake equation perga inconspicuous
                  motespatch clean designed code and energy matter.
                </p>
                <div className="commonbutton btn rounded-pill mt-5">
                  LEARN MORE
                </div>
              </div>
              <div className="col-6">
                <img src="./IMAGES/about_01.jpg" alt="about_person" />
              </div>
            </div>
          </div>
        </section>
        <section
          className="sec_client commonsec d-flex align-items-center"
          id="asec_client"
        >
          <div className="container">
            <div className="client_banner_out">
              <div className="client_banner">
                <div className="swiper mySwiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="client_slider_main">
                        <img
                          className="sec_client_quote"
                          src=" ./IMAGES/quotes_image.png"
                          alt="quotationimage"
                        />
                        <p className="sec_client_p mt-5 mb-5">
                          Curabitur cursus mattis ligula a maximus pellentesque
                          in purus malesuada, pharetra eros id, malesuada diam
                          vivamus eu gravida lacus nulla at consectetur quam
                          vestibulum ac arcu sed.
                        </p>
                        <div className="d-flex justify-content-start align-items-center sec_client_flex">
                          <div className="sec_client_flex1">
                            <img
                              src="./IMAGES/quote_image_03.jpg"
                              alt="client1"
                            />
                            <p className="sec_client_flex1p1 ms-5 me-3">
                              Jane Williams
                            </p>
                            <p className="sec_client_flex1p2">DESIGNER</p>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="client_slider_main">
                        <img
                          className="sec_client_quote"
                          src=" ./IMAGES/quotes_image.png"
                          alt="quotationimage"
                        />
                        <p className="sec_client_p mt-5 mb-5">
                          Vivamus quis ante varius, pretium lectus ut, tempor
                          eros maecenas vitae purus lobortis, pulvinar lorem eu,
                          porta elit suspendisse blandit porta magna, nec
                          scelerisque urna viverra lorem gravida.
                        </p>
                        <div className="d-flex justify-content-start align-items-center sec_client_flex">
                          <div className="sec_client_flex1">
                            <img
                              src=" ./IMAGES/quote_image_04.jpg"
                              alt="client1"
                            />
                            <p className="sec_client_flex1p1 ms-5 me-3">
                              JOHN SMITH
                            </p>
                            <p className="sec_client_flex1p2">GURU</p>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="client_slider_main">
                        <img
                          className="sec_client_quote"
                          src=" ./IMAGES/quotes_image.png"
                          alt="quotationimage"
                        />
                        <p className="sec_client_p mt-5 mb-5">
                          Suspendisse enim erat, vehicula sit amet odio eu,
                          congue gravida magna mauris a ex aliquam, ornare
                          tortor sit amet, placerat ante aenean sit amet sem et
                          metus elementum pellentesque.
                        </p>
                        <div className="d-flex justify-content-start align-items-center sec_client_flex">
                          <div className="sec_client_flex1">
                            <img
                              src=" ./IMAGES/quote_image_03.jpg"
                              alt="client1"
                            />
                            <p className="sec_client_flex1p1 ms-5 me-3">
                              Peter Hall
                            </p>
                            <p className="sec_client_flex1p2">CEO</p>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec_news" id="asec_news">
          <div className="crossbox d-flex align-items-center news_cross">
            <div className="cross1 d-flex justify-content-center align-items-center ">
              <h3 className="crossh3">NEWS</h3>
            </div>
          </div>
          <div className="row justify-content-around align-items-center">
            <div className="col-3">
              <a href="javascript:void(0)" className="news_a">
                <div className="news_img">
                  <img src=" ./IMAGES/blog_img_01.jpg" alt="news_1" />
                </div>
              </a>
              <p className="sec_news_p1 mt-4 mb-4">
                How to write rogue mote of dust love
              </p>
              <p className="sec_news_p2">
                Bearable only through love hydrogen atoms bits of moving fluff
                culture shores of the cosmic ocean paroxysm of global death ...
              </p>
            </div>
            <div className="col-3">
              <a href="javascript:void(0)" className="news_a">
                <div className="news_img">
                  <img src=" ./IMAGES/blog_img_02.jpg" alt="news_2" />
                </div>
              </a>
              <p className="sec_news_p1 mt-4 mb-4">
                Epochs encyclopa galactica stellar
              </p>
              <p className="sec_news_p2">
                Bearable only through love hydrogen atoms bits of moving fluff
                culture shores of the cosmic ocean paroxysm of global death ...
              </p>
            </div>
            <div className="col-3">
              <a href="javascript:void(0)" className="news_a">
                <div className="news_img">
                  <img src=" ./IMAGES/blog_img_03.jpg" alt="news_3" />
                </div>
              </a>
              <p className="sec_news_p1 mt-4 mb-4">
                How to write rogue mote of dust love
              </p>
              <p className="sec_news_p2">
                Bearable only through love hydrogen atoms bits of moving fluff
                culture shores of the cosmic ocean paroxysm of global death ...
              </p>
            </div>
          </div>
          <a href="javascript:void(0)" className="a_news_">
            <div className="d-flex justify-content-center news_btn_">
              <div className="bannerbtn commonbutton btn rounded-pill mt-5 news_btn_width">
                GO TO BLOG
              </div>
            </div>
          </a>
        </section>
        <section className="sec_portfolio commonsec" id="asec_portfolio">
          <div className="crossbox d-flex align-items-center portfolio_cross">
            <div className="cross1 d-flex justify-content-center align-items-center">
              <h3 className="crossh3">PORTFOLIO</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3 m-0 p-0">
              <div className="portfolio_img_out">
                <img src=" ./IMAGES/portfolio_item_01.jpg" alt="" />
              </div>
            </div>
            <div className="col-6 m-0 p-0">
              <div className="portfolio_img_out">
                <img src=" ./IMAGES/portfolio_item_02.jpg" alt="" />
              </div>
            </div>
            <div className="col-3 m-0 p-0">
              <div className="portfolio_img_out">
                <img src=" ./IMAGES/portfolio_item_03.jpg" alt="" />
              </div>
              <div className="portfolio_img_out">
                <img src=" ./IMAGES/portfolio_item_04.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="sec_pricing commonsec" id="asec_pricing">
          <div className="crossbox d-flex align-items-center">
            <div className="cross1 d-flex justify-content-center align-items-center ">
              <h3 className="crossh3">PRICING</h3>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-3 price_card p-5">
                <p className="price_p1">BASIC</p>
                <p className="price_p2 m-0 p-0">$25</p>
                <p className="price_p3">PER MONTH</p>
                <ul className="m-0 p-0 price_ul">
                  <li className="price_li1">
                    <div className="price_li_flex d-flex">
                      <div className="price_li_icon">
                        <i className="fa-solid fa-check me-2"></i>
                      </div>
                      <div className="price_li_p">
                        <p className="price_li_p1">Unlimited Support</p>
                      </div>
                    </div>
                  </li>
                  <li className="price_li1">
                    <div className="price_li_flex d-flex">
                      <div className="price_li_icon">
                        <i className="fa-solid fa-check me-2"></i>
                      </div>
                      <div className="price_li_p">
                        <p className="price_li_p1">5GB Server Space</p>
                      </div>
                    </div>
                  </li>
                  <li className="price_li1">
                    <div className="price_li_flex d-flex">
                      <div className="price_li_icon">
                        <i className="fa-solid fa-check me-2"></i>
                      </div>
                      <div className="price_li_p">
                        <p className="price_li_p1">2 Users per Project</p>
                      </div>
                    </div>
                  </li>
                  <li className="price_li1">
                    <div className="price_li_flex d-flex">
                      <div className="price_li_icon">
                        <i className="fa-solid fa-xmark me-3"></i>
                      </div>
                      <div className="price_li_p">
                        <p className="price_li_p2">Email Integration</p>
                      </div>
                    </div>
                  </li>
                  <li className="price_li1">
                    <div className="price_li_flex d-flex">
                      <div className="price_li_icon">
                        <i className="fa-solid fa-xmark me-3"></i>
                      </div>
                      <div className="price_li_p">
                        <p className="price_li_p2">Unlimited Download</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <a href="javascript:void(0)" className="price_">
                  <div className="btn rounded-pill price_btn mt-4">
                    CHOOSE PLAN
                  </div>
                </a>
                <div className="price_whitebox">1</div>
              </div>
              <div className="col-3 price_card p-5">
                <p className="price_p1">ADVANCED</p>
                <p className="price_p2 m-0 p-0">$50</p>
                <p className="price_p3">PER MONTH</p>
                <ul className="m-0 p-0 price_ul">
                  <li className="price_li1">
                    <div className="price_li_flex d-flex">
                      <div className="price_li_icon">
                        <i className="fa-solid fa-check me-2"></i>
                      </div>
                      <div className="price_li_p">
                        <p className="price_li_p1">Unlimited Support</p>
                      </div>
                    </div>
                  </li>
                  <li className="price_li1">
                    <div className="price_li_flex d-flex">
                      <div className="price_li_icon">
                        <i className="fa-solid fa-check me-2"></i>
                      </div>
                      <div className="price_li_p">
                        <p className="price_li_p1">5GB Server Space</p>
                      </div>
                    </div>
                  </li>
                  <li className="price_li1">
                    <div className="price_li_flex d-flex">
                      <div className="price_li_icon">
                        <i className="fa-solid fa-check me-2"></i>
                      </div>
                      <div className="price_li_p">
                        <p className="price_li_p1">2 Users per Project</p>
                      </div>
                    </div>
                  </li>
                  <li className="price_li1">
                    <div className="price_li_flex d-flex">
                      <div className="price_li_icon">
                        <i className="fa-solid fa-check me-2"></i>
                      </div>
                      <div className="price_li_p">
                        <p className="price_li_p2">Email Integration</p>
                      </div>
                    </div>
                  </li>
                  <li className="price_li1">
                    <div className="price_li_flex d-flex">
                      <div className="price_li_icon">
                        <i className="fa-solid fa-xmark me-3"></i>
                      </div>
                      <div className="price_li_p">
                        <p className="price_li_p2">Unlimited Download</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <a href="javascript:void(0)" className="price_">
                  <div className="btn rounded-pill price_btn mt-4">
                    CHOOSE PLAN
                  </div>
                </a>
                <div className="price_whitebox">2</div>
              </div>
              <div className="col-3 price_card p-5">
                <p className="price_p1">EXPERT</p>
                <p className="price_p2 m-0 p-0">$75</p>
                <p className="price_p3">PER MONTH</p>
                <ul className="m-0 p-0 price_ul">
                  <li className="price_li1">
                    <div className="price_li_flex d-flex">
                      <div className="price_li_icon">
                        <i className="fa-solid fa-check me-2"></i>
                      </div>
                      <div className="price_li_p">
                        <p className="price_li_p1">Unlimited Support</p>
                      </div>
                    </div>
                  </li>
                  <li className="price_li1">
                    <div className="price_li_flex d-flex">
                      <div className="price_li_icon">
                        <i className="fa-solid fa-check me-2"></i>
                      </div>
                      <div className="price_li_p">
                        <p className="price_li_p1">5GB Server Space</p>
                      </div>
                    </div>
                  </li>
                  <li className="price_li1">
                    <div className="price_li_flex d-flex">
                      <div className="price_li_icon">
                        <i className="fa-solid fa-check me-2"></i>
                      </div>
                      <div className="price_li_p">
                        <p className="price_li_p1">2 Users per Project</p>
                      </div>
                    </div>
                  </li>
                  <li className="price_li1">
                    <div className="price_li_flex d-flex">
                      <div className="price_li_icon">
                        <i className="fa-solid fa-check me-2"></i>
                      </div>
                      <div className="price_li_p">
                        <p className="price_li_p2">Email Integration</p>
                      </div>
                    </div>
                  </li>
                  <li className="price_li1">
                    <div className="price_li_flex d-flex">
                      <div className="price_li_icon">
                        <i className="fa-solid fa-check me-2"></i>
                      </div>
                      <div className="price_li_p">
                        <p className="price_li_p2">Unlimited Download</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <a href="javascript:void(0)" className="price_">
                  <div className="btn rounded-pill price_btn mt-4">
                    CHOOSE PLAN
                  </div>
                </a>
                <div className="price_whitebox">3</div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec_team" id="asec_team">
          <div className="crossbox d-flex align-items-center">
            <div className="cross1 d-flex justify-content-center align-items-center ">
              <h3 className="crossh3">TEAM</h3>
            </div>
          </div>
          <div className="container">
            <div className="team1">
              <img src=" ./IMAGES/about_item_01.jpg" alt="team1" />
            </div>
            <div className="team2 p-5">
              <div className="team_data_wrap p-5 pb-2">
                <p className="about_p1 p-0 m-0">CEO</p>
                <p className="team_p1 p-0 m-0">Marty Stone</p>
              </div>
              <p className="sec_news_p2 p-5 pt-0">
                Code the energy hidden in matter citizens of distant epochs sun.
                Citizens of distant epochs encyclopaedia galant ctica the ash of
                stellar alchemy Vangelis white dwarf adipisci velit. Nemo enim
                ipsam volupta tem quia voluptas sit aspernatur aut odit aut
                fugit radio telescope quis nostrum exercitatio nem ullam
                corporis suscipit laboriosam quis.
              </p>
            </div>
            <div className="team3 d-flex align-items-center justify-content-center">
              <div className="team_grp_i d-flex justify-content-center">
                <i className="me-4 fa-brands fa-facebook-f"></i>
                <i className="me-4 fa-brands fa-twitter"></i>
                <i className="me-4 fa-brands fa-instagram"></i>
                <i className="me-4 fa-brands fa-vimeo-v"></i>
                <i className="me-4 fa-brands fa-behance"></i>
              </div>
            </div>
            <div className="team4">
              <img src=" ./IMAGES/about_item_02.jpg" alt="team2" />
            </div>
            <div className="team5 p-5">
              <div className="team_data_wrap p-5 pb-2">
                <p className="about_p1 p-0 m-0">DESIGNER</p>
                <p className="team_p1 p-0 m-0">John Williams</p>
              </div>
              <p className="sec_news_p2 p-5 pt-0">
                Code the energy hidden in matter citizens of distant epochs sun.
                Citizens of distant epochs encyclopaedia galant ctica the ash of
                stellar alchemy Vangelis white dwarf adipisci velit. Nemo enim
                ipsam volupta tem quia voluptas sit aspernatur aut odit aut
                fugit radio telescope quis nostrum exercitatio nem ullam
                corporis suscipit laboriosam quis.
              </p>
            </div>
            <div className="team6 d-flex align-items-center justify-content-center">
              <div className="team_grp_i d-flex justify-content-center">
                <i className="me-4 fa-brands fa-facebook-f"></i>
                <i className="me-4 fa-brands fa-twitter"></i>
                <i className="me-4 fa-brands fa-instagram"></i>
                <i className="me-4 fa-brands fa-vimeo-v"></i>
                <i className="me-4 fa-brands fa-behance"></i>
              </div>
            </div>
            <div className="team7">
              <img src=" ./IMAGES/about_item_03.jpg" alt="team3" />
            </div>
            <div className="team8 p-5">
              <div className="team_data_wrap p-5 pb-2">
                <p className="about_p1 p-0 m-0">DEVELOPER</p>
                <p className="team_p1 p-0 m-0">Vanessa Doe</p>
              </div>
              <p className="sec_news_p2 p-5 pt-0">
                Code the energy hidden in matter citizens of distant epochs sun.
                Citizens of distant epochs encyclopaedia galant ctica the ash of
                stellar alchemy Vangelis white dwarf adipisci velit. Nemo enim
                ipsam volupta tem quia voluptas sit aspernatur aut odit aut
                fugit radio telescope quis nostrum exercitatio nem ullam
                corporis suscipit laboriosam quis.
              </p>
            </div>
            <div className="team9 d-flex align-items-center justify-content-center">
              <div className="team_grp_i d-flex justify-content-center">
                <i className="me-4 fa-brands fa-facebook-f"></i>
                <i className="me-4 fa-brands fa-twitter"></i>
                <i className="me-4 fa-brands fa-instagram"></i>
                <i className="me-4 fa-brands fa-vimeo-v"></i>
                <i className="me-4 fa-brands fa-behance"></i>
              </div>
            </div>
          </div>
        </section>
        <section className="sec_skills commonsec" id="asec_skills">
          <div className="crossbox d-flex align-items-center">
            <div className="cross1 d-flex justify-content-center align-items-center ">
              <h3 className="crossh3">SKILLS</h3>
            </div>
          </div>
          <div className="container">
            <div className="row d-flex align-items-center mt-5">
              <div className="col-6">
                <p className="price_p3">OUR NUMBERS</p>
                <p className="skills_p1">check our skills</p>
                <p className="sec_news_p2 mwidth_skill">
                  Code the energy hidden in matter citizens of distant epochs
                  from which we spring drake equation perga inconspicuous
                  motespatch clean designed code and energy matter.
                </p>
                <a href="javascript:void(0)">
                  <div className="commonbutton btn rounded-pill mt-4">
                    LEARN MORE
                  </div>
                </a>
              </div>
              <div className="col-6">
                <ul className="skill_main_ul">
                  <li className="skill_main_li">
                    <div className="row">
                      <div className="col-3">
                        <p className="skill_main_li_p1">75%</p>
                      </div>
                      <div className="col-9">
                        <p className="skill_main_li_p2">Creativity</p>
                        <div className="main_line">
                          <div className="fill_line line_1"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="skill_main_li">
                    <div className="row">
                      <div className="col-3">
                        <p className="skill_main_li_p1">45%</p>
                      </div>
                      <div className="col-9">
                        <p className="skill_main_li_p2">Cooking</p>
                        <div className="main_line">
                          <div className="fill_line line_2"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="skill_main_li">
                    <div className="row">
                      <div className="col-3">
                        <p className="skill_main_li_p1">90%</p>
                      </div>
                      <div className="col-9">
                        <p className="skill_main_li_p2">PhP</p>
                        <div className="main_line">
                          <div className="fill_line line_3"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="skill_main_li">
                    <div className="row">
                      <div className="col-3">
                        <p className="skill_main_li_p1">65%</p>
                      </div>
                      <div className="col-9">
                        <p className="skill_main_li_p2">Marketing</p>
                        <div className="main_line">
                          <div className="fill_line line_4"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="skill_main_li">
                    <div className="row">
                      <div className="col-3">
                        <p className="skill_main_li_p1">85%</p>
                      </div>
                      <div className="col-9">
                        <p className="skill_main_li_p2">Design</p>
                        <div className="main_line">
                          <div className="fill_line line_5"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="sec_milestone commonsec" id="asec_milestone">
          <div className="crossbox d-flex align-items-center">
            <div className="cross1 d-flex justify-content-center align-items-center ">
              <h3 className="crossh3">MILESTONES</h3>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <ul className="milestone_ul">
                  <li className="milestone_li">
                    <div className="milestone_li_main d-flex ">
                      <div className="col-3 me-5 d-flex justify-content-end">
                        <p className="milestone_p1">135</p>
                      </div>
                      <div className="col-9 mt-4">
                        <p className="milestone_p2">
                          Terabytes of files uploaded
                        </p>
                        <p className="milestone_p3">
                          Nulla ac laoreet est, a mollis nibh. Aenean eget
                          auctor velit quis pharetra.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="milestone_li">
                    <div className="milestone_li_main d-flex ">
                      <div className="col-3 me-5 d-flex justify-content-end">
                        <p className="milestone_p1">74</p>
                      </div>
                      <div className="col-9 mt-4">
                        <p className="milestone_p2">
                          Cups of coffee drinked per week
                        </p>
                        <p className="milestone_p3">
                          Nulla ac laoreet est, a mollis nibh. Aenean eget
                          auctor velit quis pharetra.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="milestone_ul">
                  <li className="milestone_li">
                    <div className="milestone_li_main d-flex ">
                      <div className="col-3 me-5 d-flex justify-content-end">
                        <p className="milestone_p1">67K</p>
                      </div>
                      <div className="col-9 mt-4">
                        <p className="milestone_p2">Lines of CSS code wrote</p>
                        <p className="milestone_p3">
                          Nulla ac laoreet est, a mollis nibh. Aenean eget
                          auctor velit quis pharetra.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="milestone_li">
                    <div className="milestone_li_main d-flex ">
                      <div className="col-3 me-5 d-flex justify-content-end">
                        <p className="milestone_p1">389</p>
                      </div>
                      <div className="col-9 mt-4">
                        <p className="milestone_p2">
                          Happy clients served this year
                        </p>
                        <p className="milestone_p3">
                          Nulla ac laoreet est, a mollis nibh. Aenean eget
                          auctor velit quis pharetra.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="sec_contact" id="asec_contact">
          <div className="crossbox d-flex align-items-center">
            <div className="cross1 d-flex justify-content-center align-items-center ">
              <h3 className="crossh3">CONTACT</h3>
            </div>
          </div>
          <div className="container">
            <div className="row mb-5 d-flex align-items-center">
              <div className="col-6">
                <p className="price_p3">CONTACT US</p>
                <p className="skills_p1">Lets start Working</p>
                <p className="sec_news_p2 mwidth_skill mb-5">
                  Because they are hard, because that goal will serve to
                  organize and measure the best of our energies and skills,
                  because that challenge is one that we are willing to accept
                  one we are.
                </p>
                <div className="contant_grp_i">
                  <a href="javascript:void(0)" className="a_contact_">
                    <i className="me-4 fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="javascript:void(0)" className="a_contact_">
                    <i className="me-4 fa-brands fa-twitter"></i>
                  </a>
                  <a href="javascript:void(0)" className="a_contact_">
                    <i className="me-4 fa-brands fa-instagram"></i>
                  </a>
                  <a href="javascript:void(0)" className="a_contact_">
                    <i className="me-4 fa-brands fa-vimeo-v"></i>
                  </a>
                  <a href="javascript:void(0)" className="a_contact_">
                    <i className="me-4 fa-brands fa-behance"></i>
                  </a>
                </div>
              </div>
              <div className="col-6">
                <form className="pt-5">
                  <input className="mb-4" type="text" placeholder="Name" />
                  <input className="mb-4" type="email" placeholder="Email" />
                  <input className="mb-4" type="text" placeholder="Subject" />
                  <textarea placeholder="Message" cols="30" rows="7"></textarea>
                  <a href="javascript:void(0)">
                    <div className="d-flex justify-content-center">
                      <div className="commonbutton btn rounded-pill mt-5 contant_btn">
                        SEND
                      </div>
                    </div>
                  </a>
                </form>
              </div>
            </div>
          </div>

          <div className="map d-flex justify-content-center mt-5">
            <div className="map_out">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2748992369866!2d-75.30011758509407!3d40.75597814286177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c469a1d71b8953%3A0x4fe85e80f58eaf4!2sKurt%20Dr%2C%20Eastlawn%20Gardens%2C%20PA%2018064!5e0!3m2!1sen!2sus!4v1676822799932!5m2!1sen!2sus"></iframe>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="d-flex justify-content-around pt-5 mb-4">
          <div className="footer_img">
            <img src=" ./IMAGES/logo.png" alt="" />
          </div>
        </div>
        <div className="d-flex justify-content-around mb-4">
          <div className="mb-2 vertical_line"></div>
        </div>
        <div className="d-flex justify-content-around mb-4">
          <a href="javascript:void(0)">
            <p className="footer_p1">hello@cocobasic.com</p>
          </a>
        </div>
        <div className="d-flex justify-content-around">
          <div className="vertical_line"></div>
        </div>
        <div className="d-flex justify-content-around mb-4">
          <div className="mb-2 horizontal_line"></div>
        </div>
        <div className="d-flex justify-content-around mb-4">
          <div className="footer_iconmain">
            <a href="javascript:void(0)">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="javascript:void(0)">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="javascript:void(0)">
              <i className="fa-brands fa-behance"></i>
            </a>
            <a href="javascript:void(0)">
              <i className="fa-brands fa-dribbble"></i>
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <p className="footer_p2">
            &copy; 2022 Seppo HTML Template by{" "}
            <span className="footer_span">CocoBasic</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Main;
