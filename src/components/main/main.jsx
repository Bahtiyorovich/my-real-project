import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Main = () => {
  return (
    <div className="h-[88vh]">
      <h1 
        data-aos="fade-up"
        data-aos-duration="2000"
        className="
        w-[85%] 
        leading-[95px] 
        text-[80px] 
        text-slate-800 
        pl-[112px] 
        py-[110px] 
        font-[800] 
        tracking-wide"
      >
        We are web agency based in Los Angeles, CA
      </h1>

      <div 
        data-aos="fade-up"
        data-aos-duration="3000"
        className="flex items-center justify-around mt-20 py-4">
        <p className="w-1/3">
          <span className="text-slate-800 font-semibold ">Far far away, behind the word mountains</span>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </p>

          <ul className="grid grid-cols-2 leading-8 w-1/3 text-pink-500 underline">
            <li>
              <a href="">Lorem ipsum</a>
            </li>
            <li>
              <a href="">Lorem ipsum</a>
            </li>
            <li>
              <a href="">Lorem ipsum</a>
            </li>
            <li>
              <a href="">Lorem ipsum</a>
            </li>
            <li>
              <a href="">Lorem ipsum</a>
            </li>
            <li>
              <a href="">Lorem ipsum</a>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Main