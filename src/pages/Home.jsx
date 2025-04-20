import React from 'react';
import About from './About';

const Home = () => {
  return (
    <>
    <section className='container mx-auto px-4 max-h-[1000px]'>
      <div
        className="relative rounded-2xl bg-cover   flex items-center"
        style={{
          backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)"
        }}
      >
        {/* Dark overlay with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 rounded-2xl"></div>

        {/* Content */}
        <div className="relative z-10 px-8 lg:px-16 text-white p-30">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building trust and delivering protection—<br />
              <span className="text-[#D7263D]">Urban Security</span>, your partner in safety and service.
            </h1>
            <p className="mb-8 text-lg opacity-90">
              To provide disciplined, dependable, and professional security services that protect lives, property, and peace of mind across Houston and beyond.
            </p>
            <button className="btn bg-[#D7263D] px-8 py-3 text-lg ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
    <About />
    </>
  );
};

export default Home;
