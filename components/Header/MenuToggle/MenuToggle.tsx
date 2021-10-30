import React, { useEffect } from 'react';
import { interpolate } from 'polymorph-js';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

interface MenuToggleProps {
  isMenuOpen: boolean;
  toggleMenu(): void;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ isMenuOpen, toggleMenu }) => {
  useEffect(() => {
    const paths = ['#menu-icon path', '#x-icon path'];
    const interpolator = interpolate(isMenuOpen ? paths : paths.reverse());

    const visiblePath = document.querySelector('#visible-icon path');

    if (visiblePath.getAttribute('d') === interpolator(1)) return;

    const animate = (step: number = 0) => {
      const newStep = 1 / 40 + step;

      const path = interpolator(newStep <= 1 ? newStep : 1);
      visiblePath.setAttribute('d', path);

      if (newStep >= 1) return;

      setTimeout(() => {
        animate(newStep);
      }, 1);
    };

    animate();
  }, [isMenuOpen]);

  return (
    <button
      type="button"
      onClick={toggleMenu}
      aria-label="Toggle Menu"
      className={[
        'rounded-full border-2 p-2 transition-all pointer-events-auto',
        isMenuOpen ? 'bg-transparent border-white' : 'bg-green-200 border-black'
      ].join(' ')}
    >
      <MenuIcon
        className={[
          'w-12 transition-colors',
          isMenuOpen ? 'text-white' : 'text-black'
        ].join(' ')}
        id="visible-icon"
      />
      <MenuIcon className="hidden" id="menu-icon" />
      <XIcon className="hidden" id="x-icon" />
    </button>
  );
};

export default MenuToggle;
