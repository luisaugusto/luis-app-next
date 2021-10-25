import React, { useState } from 'react';
import { menuItems, socialMedia } from './menuItems';
import MenuToggle from './MenuToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <>
      <div
        className={[
          'fixed w-screen h-screen bg-gradient-to-tr from-transparent to-green-900 transition-opacity top-0 left-0 z-20 duration-700',
          isMenuOpen ? 'opacity-100' : 'opacity-0'
        ].join(' ')}
      />
      <header className="sticky top-0 w-full p-8 z-30 flex-col flex items-end gap-4">
        <MenuToggle isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <nav className="relative text-white">
          <ul
            className={[
              'flex flex-col absolute right-0 top-0 transition-all duration-500',
              isMenuOpen
                ? 'gap-4 opacity-100 pointer-events-auto'
                : 'gap-8 opacity-0 pointer-events-none'
            ].join(' ')}
          >
            {menuItems.map(({ name, url, Icon }) => (
              <li key={url} className="flex justify-end group">
                <a
                  href={url}
                  className="flex items-center justify-end text-right gap-4 w-max"
                  onClick={toggleMenu}
                >
                  {name}
                  <div className="rounded-full border-white border-2 p-2 group-hover:text-green-900 group-hover:bg-white transition-colors">
                    <Icon className="w-6 flex-shrink-0" />
                  </div>
                </a>
              </li>
            ))}
            <li className="flex justify-end gap-4">
              {socialMedia.map(({ url, icon }) => (
                <a href={url} key={icon} target="_blank" rel="noreferrer">
                  <i
                    className={`fab fa-${icon} text-2xl rounded-full border-white border-2 p-2 hover:text-green-900 hover:bg-white transition-colors text-center`}
                    style={{ width: '44px' }}
                    aria-label={icon}
                  />
                </a>
              ))}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
