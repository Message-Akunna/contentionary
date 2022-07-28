import React, { Fragment } from 'react';
// component resources
// 
import Header from './Header';
import Footer from './Footer';

function HomeLayout({ children }) {
  return (
    <Fragment>
        <header className="header">
            <Header/>
        </header>
        <main className="page-wrapper">
            {children}
        </main>
        <Footer/>
    </Fragment>
  );
};

export default HomeLayout;
