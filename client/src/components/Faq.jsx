import { ACCORDION_ITEMS } from '../utils/constants.js';
import  useAccordion  from '../hooks/useAccordion.jsx';

const FAQs = () => {
  const { handleAccordionClick, isExpanded} = useAccordion();

  return (
    <div className='w-full py-16 text-white px-4' id='FAQ'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Frequently Asked Questions
          </h1>
          <div id="accordion-collapse" data-accordion="collapse" className="mt-4 w-11/12">
            {ACCORDION_ITEMS.map((item, index) => (
              <div
                key={index}
                className="rounded-t-sm border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800"
              >
                <h2 id={`accordion-collapse-heading-${index}`}>
                  <button
                    type="button"
                    className={`flex items-center justify-between w-full p-5 font-medium text-left text-black border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-black
                    ${isExpanded(index) ? 'bg-[#00df9a] text-primary' : 'bg-[#00df9a] text-black'}`}
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
      </div>
    </div>
  );
};

export default FAQs;