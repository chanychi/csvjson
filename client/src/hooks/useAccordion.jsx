import { useState } from 'react';

const useAccordion = (initialIndex = null) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const isExpanded = (index) => activeIndex === index;

  return { activeIndex, handleAccordionClick, isExpanded };
};

export default useAccordion;
