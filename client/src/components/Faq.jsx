import { useState } from 'react'

const accordionItems = [
  {
    title: 'Where is my data being stored?',
    content: [
      'Rest assured, all the data you work with on csvjson stays right on your computer. Whether you\'re pasting or converting, your data never leaves your local environment. This applies to uploaded files as well – they remain securely on your device. Your privacy and data security are top priorities for us, and we ensure that your information is never used for any unintended purposes.',
    ],
  },
  {
    title: 'Are there broken paths?',
    content: [
      'At its current stage, the project is relatively small in scope, and certain features have not yet been implemented. However, the core functionality is operational and functional. Please note that some sections like careers, pricing, and documentation do not currently have active links.',
    ],
  },
  {
    title: 'Why are there broken paths?',
    content: [
      'The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.',
      'However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.',
      'Learn more about these technologies:',
      '- Flowbite Pro',
      '- Tailwind UI',
    ],
  },
];

const FAQs = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const isExpanded = (index) => activeIndex === index;

  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Frequently Asked Questions
          </h1>

          <div id="accordion-collapse" data-accordion="collapse" className="mt-4 w-11/12">
      {accordionItems.map((item, index) => (
        <div
          key={index}
          className="rounded-t-sm border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800"
        >
          <h2 id={`accordion-collapse-heading-${index}`}>
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium text-left text-black border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-black
              ${
                isExpanded(index) ? 'bg-[#00df9a] text-primary' : 'bg-[#00df9a] text-black'
              }`}
              data-accordion-target={`#accordion-collapse-body-${index}`}
              aria-expanded={isExpanded(index)}
              aria-controls={`accordion-collapse-body-${index}`}
              onClick={() => handleAccordionClick(index)}
            >
              <span>{item.title}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 rotate-${isExpanded(index) ? '0' : '180'} shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${index}`}
            className={`${isExpanded(index) ? '' : 'hidden'}`}
            aria-labelledby={`accordion-collapse-heading-${index}`}
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
              {item.content.map((paragraph, i) => (
                <p key={i} className="mb-2 text-white">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>



        </div>
        <div className='my-28'>
          <div className='flex flex-col sm:flex-row items-center justify-content w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;