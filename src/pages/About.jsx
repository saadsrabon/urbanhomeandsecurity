import React from 'react';
import leftSmallImage from '../assets/handsome-guard-in-black-uniform-looking-at-camera-2022-12-16-18-11-22-utc-1.jpg';
import rightBigImage from '../assets/rear-view-of-guard-in-black-uniform-with-earphone-2022-12-16-20-49-11-utc-1.jpg'

const About = () => {
  return (
    // main section 
    <div className='container mx-auto p-4'>
      {/* left section */}
      <div>
        <h1 className='font-roboto font-semibold'>About Us</h1>
        <h1 className='text-5xl font-semibold font-monst'>Discover Our <br /> Security Legacy</h1>
        <p className='font-roboto text-[#777777]'>Pharetra neque feugiat commodo vitae viverra id in <br /> risus in ut urna lacinia.</p>
        <button className='font-oswald bg-black text-white text-2xl tracking-wider  px-8 py-3 text-center rounded-xl hover:bg-[#D7263D] '>Learn More</button>
        {/* left bottom 1 */}
        <div>
          <div>
            <p className='bg-[#00A3FF] font-roboto text-white rounded-2xl w-6 px-2'>01</p>
            <h1>100%</h1>
            <p>Satisfied Clients</p>
          </div>
          <div>
            <p>02</p>
            <h1>200%</h1>
            <p>Total Awards</p>
          </div>
        </div>
        {/* left bottom 2 */}
        <div>
          <img src={leftSmallImage} alt="" />
        </div>

      </div>
      {/* right section  */}
      <div>
        {/* right big image */}
        <div>
          <img src={rightBigImage} alt="" />
        </div>
        {/* right text */}
        <div>
          <h1>Customer-Centric Approach</h1>
          <p>Auctor neque feugiat ornare rhoncus. Odio sed porta in nibh dui. Orci hac blandit. </p>
        </div>
      </div>
    </div>
  );
};

export default About;
