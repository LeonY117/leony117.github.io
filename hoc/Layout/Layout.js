import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
