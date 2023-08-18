import Laptop from '../assets/laptop.jpeg';
import { ANALYTICS_INFO } from '../utils/constants.js';

const Analytics = () => {
  const { HEADER, TITLE, INFO } = ANALYTICS_INFO;

  return (
    <div className='w-full bg-white py-16 px-4' id='about-section'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>{HEADER}</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>{TITLE}</h1>
          <p>
            {INFO}
          </p>
          <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;