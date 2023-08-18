import Typed from 'react-typed';
import { useNavigate } from 'react-router-dom';
import Analytics from './Analytics.jsx'
import FAQS from './Faq.jsx'

const Hero = () => {
  const nav = useNavigate();

  const handleNavClick = (path) => {
    nav(path)
  }

  return (
    <>
      <div className='text-white'>
        <div className='max-w-[800px] mt-[-196px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#00df9a]'>
            UNLEASH POSSIBILITIES
          </h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
              Transforming
            </p>
            <Typed
              className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
              strings={['JSON', 'CSV']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className='md:text-2xl text-xl font-bold text-gray-500'>CSVJSON helps you quickly convert popular data formats to the format you need. Data pasted and converted remains local on your computer.</p>
          <div className="flex justify-center gap-4">
            <button
              className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black'
              onClick={() => handleNavClick('/csvjson')}
            >
              CSV to JSON
            </button>
            <button
              className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black'
              onClick={() => handleNavClick('/jsoncsv')}
            >
              JSON to CSV
            </button>
          </div>
        </div>
      </div>
      <Analytics />
      <FAQS />
    </>
  );
};

export default Hero;