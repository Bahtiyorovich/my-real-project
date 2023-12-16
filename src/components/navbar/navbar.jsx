import { FaFacebookSquare,  FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import './navbar.css'
import { Logo } from "../../assets";


const Navbar = () => {
  return (
    <section>
      <header>
        <article>
          <FaFacebookSquare  className="header-icon"/>
          <FaLinkedinIn  className="header-icon"/>
          <FaTwitter  className="header-icon"/>
          <FaGithub  className="header-icon"/>
        </article>
        <article>
          <MdEmail className="header-icon"/>
          <span id="head-email__text"> example@gmail.com</span>
        </article>
      </header>
      <nav className="navbar">
        <img src={Logo} alt="react logo" width={'70px'} height={'70px'} className="animate__logo"/>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Faq</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </nav>
    </section>
  )
}

// npm i react-icons

export default Navbar