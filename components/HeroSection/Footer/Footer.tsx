import React, { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline';

const Footer: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsHidden(false), 1500);
  }, []);

  return (
    <footer
      id="hero-footer"
      className={[
        'sticky bottom-0 w-full p-8 z-10 flex justify-between items-center transition-transform duration-700',
        isHidden ? 'translate-y-full' : 'translate-y-0'
      ].join(' ')}
    >
      <h2 className="text-2xl font-light mono">Software Engineer</h2>
      <a href="#" className="animate-bounce">
        <ChevronDownIcon className="w-16" />
      </a>
    </footer>
  );
};

export default Footer;
