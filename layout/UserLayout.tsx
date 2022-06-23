import React from 'react';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const UserLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-[calc(100vh-6rem)] bg-background">{children}</main>
      <Footer />
    </>
  );
};

export default UserLayout;
