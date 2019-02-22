import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/about-us.jpg'
import pic02 from '../assets/images/lamp_stack.png'
import pic03 from '../assets/images/mern_stack.png'
import pic04 from '../assets/images/jamstack.png'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Gatsby Starter - Photon";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>About Us</h2>
                            </header>
                            <p> Zero Mile EduTech was initially started in 2014. We generally works for foreign countries. We provide better solutions to our clients for their business goal.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Our Services</h2>
                            </header>
                            <ul>
                                <li>SoftWare Developer</li>
                                <li>Web Apps Developer</li>
                                <li>Mobile App Developer</li>
                                <li>Software Consultant</li>
                                <li>Software Trainings</li>
                                <li>Social Media Marketing</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Technologies stack we use</h2>
                            </header>
                            <p></p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>LAMP/LEMP</h3>
                            <p>LEMP is a variation of the ubiquitous LAMP stack used for developing and deploying web applications.</p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>MEAN/MERN</h3>
                            <p>A MERN is merely an acronym standing for MongoDB, Express.js, React, and Node.js. The kicker? The entire thing is written in Javascript.</p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>JAM</h3>
                            <p>JAMstack stands for JavaScript, APIs, and Markup. The term was coined by Mathias Biilmann to describe a modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.</p>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Contact Us</h2>
                        </header>
                        <ul className="ul">
                            <li><strong>Name:</strong> Rakesh Tembhurne</li>
                            <li><strong>Email:</strong> rakesh@zeromileedutech.com</li>
                            <li><strong>Phone:</strong> 7020138038</li>
                            <li><strong>Address:</strong> Flat No. 202, Sukhkarta Apartment, Suyog Nagar, Near Narendra Nagar Fire Station, Ring Road, Nagpur, 440015</li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;