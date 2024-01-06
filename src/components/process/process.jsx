import React, { useEffect, useState } from "react";
import ProcessCard from "./process-card";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from './../../UI-FORM/button';

const Process = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-[100vh] bg-slate-100/50 p-32">
      <div className="grid grid-cols-2 items-start justify-start">
        <h1 
          data-aos="fade-right"
          data-aos-duration="2000"
          className="flex items-center gap-8"
        >
          <p className="w-12 h-1 bg-pink-500"></p> 
          <span className="text-[55px] font-bold">Our Process</span>
        </h1>
        <div 
          data-aos="fade-left"
          data-aos-duration="2000"
          className="flex flex-col gap-8"
        >
          <p className="text-slate-500">
            <span className="text-neutral-800 font-semibold">
              Separated they live in Bookmarksgrove
            </span> 
            right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
          <Button 
            type='button' 
            className={'bg-pink-500 text-white h-12 w-36 hover:bg-pink-400'} 
            children={'Learn More'}
          />
        </div>
      </div>
      <div 
        data-aos = "fade-up"
        data-aos-duration="3000"
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8 py-32">
        {data.map(item => (
          <ProcessCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Process;
