import React from 'react';
import { default as NextLink } from 'next/link';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isExternal?: boolean;
}

const Link: React.FC<LinkProps> = ({
  isExternal,
  href,
  children,
  ...props
}) => (
  <NextLink href={href}>
    <a
      {...props}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className="bg-green-400 px-1 rounded"
    >
      {children}
    </a>
  </NextLink>
);

export default Link;
