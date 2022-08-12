import * as React from 'react'
import Navbar from './Navbar';
// import Categories from './Categories';

export default function Layout({ children }: any) {
  

  return (
    <div>
      <Navbar />
      <br />
      {/* <Categories /> */}
      <br />
      <div>
        {children}
      </div>
    </div>
  )
}
