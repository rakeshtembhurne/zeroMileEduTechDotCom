import React from 'react'
import logo from '../assets/images/logo.png'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span><img src={logo} alt="" /></span>
                    <h1><strong>Zero Mile EduTech</strong></h1>
                    <p>Web and Mobile Application Development Company</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
