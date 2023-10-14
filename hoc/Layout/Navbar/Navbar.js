import React from 'react';
import classes from './Navbar.module.css';
import { useRouter } from 'next/router';

import Logo from '@/components/Logo/Logo';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();
  const logoclickedhandler = () => {
    // // reroute to home page:
    router.push('/');
  };
  return (
    <div className={classes.Backdrop}>
      <div className={classes.Navbar}>
        <div className={classes.LogoWrapper}>
          <Logo clicked={logoclickedhandler} />
        </div>
        <div className={classes.NavItems}>
          <ul className={classes.NavLinks}>
            <li className={classes.NavLink}>
              <Link href='/projects'>ML Projects</Link>
            </li>
            <li className={classes.NavLink}>
              <Link href='/'>Others</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
