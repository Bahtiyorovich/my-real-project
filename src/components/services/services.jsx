import Button from "../../UI-FORM/button"
import { Img1 } from "../../assets"

const Services = () => {
  return (
    <div className="min-h-[100vh] bg-slate-100/50 p-32">
      <div className="grid grid-cols-2 items-start justify-start">
        <h1 className="flex items-center gap-8">
          <p className="w-12 h-1 bg-pink-500"></p> 
          <span className="text-[55px] font-bold">Services</span>
        </h1>
        <div className="flex flex-col gap-8">
          <p className="text-slate-500">
            <span className="text-neutral-800 font-semibold">
              Separated they live in Bookmarksgrove
            </span> 
            right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
          <Button 
            type='button' 
            className={'bg-pink-500 text-white h-12 w-36 hover:bg-pink-400'} 
            children={'Get In Touch'}
            />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 py-32">
        <div className="w-[450px]">
          <div className="w-[450px] h-[300px] duration-300 hover:shadow-3xl hover:cursor-pointer">
            <img src={Img1} alt="design" 
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-xl my-4 text-pink-500 underline">Graphic Design</h2>
          <p>
          Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="w-[450px]">
          <div className="w-[450px] h-[300px] duration-300 hover:shadow-3xl hover:cursor-pointer">
            <img src={Img1} alt="design" 
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-xl my-4 text-pink-500 underline">Graphic Design</h2>
          <p>
          Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services