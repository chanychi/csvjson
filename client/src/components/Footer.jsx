import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import { FOOTER_CATEGORY } from '../utils/constants.js';

const Footer = () => {
  const { SOLUTIONS, SUPPORT, COMPANY, LEGAL, DESC } = FOOTER_CATEGORY;

  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>CSVJSON.</h1>
        <p className='py-4'>{DESC}</p>
        <div className='flex justify-start gap-3 md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-gray-400'>Solutions</h6>
          <ul>
            {SOLUTIONS.map((category) => (
              <li className='py-2 text-sm' key={category}>{category}</li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Support</h6>
          <ul>
            {SUPPORT.map((category) => (
              <li className='py-2 text-sm' key={category}>{category}</li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Company</h6>
          <ul>
            {COMPANY.map((category) => (
              <li className='py-2 text-sm' key={category}>{category}</li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul>
            {LEGAL.map((category) => (
              <li className='py-2 text-sm' key={category}>{category}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;