import { 
  FaTwitter, 
  FaInstagram, 
  FaFacebookF, 
  FaPhoneAlt, 
  FaHeart } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

import Aos from "aos";
import 'aos/dist/aos.css';
Aos.init();

const Footer = () => {

  return (
    <div 
      data-aos="fade-up"
      data-aos-duration="2000"
      className="h-[60vh] px-20 py-12 bg-slate-100/50 mt-20">
        <div className="flex items-start justify-around ">
          <div className="w-[35%]">
            <h3 className="text-2xl font-semibold mb-4">About</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className="flex items-center gap-4 mt-8">
                <span className="w-7 h-7 rounded-full bg-pink-600 grid place-items-center text-white"><FaTwitter /></span>
                <span className="w-7 h-7 rounded-full bg-pink-600 grid place-items-center text-white"><FaInstagram /></span>
                <span className="w-7 h-7 rounded-full bg-pink-600 grid place-items-center text-white"><FaFacebookF /></span>
            </div>
          </div>
          <div className="w-1/5">
            <h3 className="text-2xl font-semibold mb-4">Pages</h3>
            <ul className="w-1/5">
              <li className="duration-200 hover:translate-x-1 hover:text-pink-500 cursor-pointer">Blog</li>
              <li className="duration-200 hover:translate-x-1 hover:text-pink-500 cursor-pointer">About</li>
              <li className="duration-200 hover:translate-x-1 hover:text-pink-500 cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="w-1/5">
            <h3 className="text-2xl font-semibold mb-4">Resources</h3>
            <ul className="w-1/5">
              <li className="duration-200 hover:translate-x-1 hover:text-pink-500 cursor-pointer">Blog</li>
              <li className="duration-200 hover:translate-x-1 hover:text-pink-500 cursor-pointer">About</li>
              <li className="duration-200 hover:translate-x-1 hover:text-pink-500 cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="w-[40%]">
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <ul>
              <li className="flex items-center gap-4"><span><MdOutlineAlternateEmail /></span><span>info@untree.co</span></li>
              <li className="flex items-center gap-4"><span><FaPhoneAlt/></span><span>+1 222 212 3819</span></li>
              <li className="flex items-center gap-4"><span><FaMapLocationDot /></span><span>43 Raymouth Rd. Baltemoer, London 3910</span></li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between mt-20 pt-12">
          <h3 className="flex items-center gap-2">Copyright ©2023 All rights reserved | This template is made with <span className="text-pink-600"><FaHeart /></span> by Colorlib</h3>
          <h3 className="flex gap-4">
            <span className="cursor-pointer duration-200 hover:underline hover:text-pink-500">Terms</span>
            <span className="cursor-pointer duration-200 hover:underline hover:text-pink-500">Privacy</span>
          </h3>
        </div>
    </div>
  )
}

export default Footer