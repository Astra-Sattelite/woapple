import * as React from 'react'
import Navbar from './Navbar';
import Categories from './Categories';

export default function Layout({ children }) {
  

  return (
    <div>
      <Navbar />
      <br />
      <Categories />
      <br />
      <div>
        {children}
      </div>
    </div>
  )
}
