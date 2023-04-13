import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footermain = () => {
  return (
    <div className='bg-[#050038]'>
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white'>
      <div>
        <h1 className='w-full text-3xl font-bold text-white font-mono tracking-widest'>WeBoard</h1>
        <p className='py-4 font-mono text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6 cursor-pointer'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-semibold   text-white'>Solutions</h6>
        <ul className = 'text-white font-mono font-normal'>
            <li className='py-2 text-sm hover:text-[#ffd02f]'>Analytics</li>
            <li className='py-2 text-sm hover:text-[#ffd02f]'>Marketing</li>
            <li className='py-2 text-sm hover:text-[#ffd02f]'>Commerce</li>
            <li className='py-2 text-sm hover:text-[#ffd02f]'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-semibold   text-white font-mono'>Support</h6>
        <ul  className='text-white font-mono font-normal'>
            <li className='py-2 text-sm hover:text-[#ffd02f]'>Pricing</li>
            <li className='py-2 text-sm hover:text-[#ffd02f]'>Documentation</li>
            <li className='py-2 text-sm hover:text-[#ffd02f]'>Guides</li>
            <li className='py-2 text-sm hover:text-[#ffd02f]'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-semibold   text-white'>Company</h6>
        <ul className = 'text-white font-mono font-normal'>
            <li className='py-2 text-sm hover:text-[#ffd02f]'>About</li>
            <li className='py-2 text-sm hover:text-[#ffd02f]'>Blog</li>
            <li className='py-2 text-sm hover:text-[#ffd02f]'>Jobs</li>
            <li className='py-2 text-sm hover:text-[#ffd02f]'>Press</li>
            <li className='py-2 text-sm hover:text-[#ffd02f]'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-semibold   text-white'>Legal</h6>
        <ul className = 'text-white font-mono font-normal' >
            <li className='py-2 text-sm hover:text-[#ffd02f]'>Claim</li>
            <li className='py-2 text-sm hover:text-[#ffd02f]'>Policy</li>
            <li className='py-2 text-sm hover:text-[#ffd02f]'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
</div>
  );
};

export default Footermain;
