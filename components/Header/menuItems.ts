import {
  CodeIcon,
  IdentificationIcon,
  MailIcon,
  PencilAltIcon,
  StarIcon,
  UsersIcon
} from '@heroicons/react/outline';
import React from 'react';

interface MenuItem {
  name: string;
  url: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

export const menuItems: MenuItem[] = [
  {
    name: 'About',
    url: '#about',
    Icon: IdentificationIcon
  },
  {
    name: 'Software Development',
    url: '#software',
    Icon: CodeIcon
  },
  {
    name: 'Mentorship',
    url: '#mentorship',
    Icon: UsersIcon
  },
  {
    name: 'Open Source',
    url: '#opensource',
    Icon: StarIcon
  },
  {
    name: 'Writing',
    url: '#writing',
    Icon: PencilAltIcon
  },
  {
    name: 'Contact',
    url: '#contact',
    Icon: MailIcon
  }
];

export const socialMedia = [
  {
    icon: 'github',
    url: 'https://github.com/luisaugusto'
  },
  {
    icon: 'twitter',
    url: 'https://twitter.com/ItsLuisAugusto'
  },
  {
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/luisbaugusto/'
  }
];
