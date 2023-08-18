import Laptop from '../assets/laptop.jpeg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id='about-section'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>MOCK DATA DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Centrally</h1>
          <p>
          In the realm of web development, employing data that accurately mirrors the product holds paramount significance. Occasionally, this data does not arrive pre-formatted in a manner that aligns seamlessly with the preferences of frontend developers. Our goal is to eliminate these obstacles, thereby enhancing productivity and streamlining the development process.
          </p>
          <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;