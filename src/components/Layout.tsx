import * as React from 'react'
import Navbar from './Navbar';
import Categories from './Categories';

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export const Layout: React.FC<LayoutProps> = (props) => {
  
  return (
    <div>
      <Navbar />
      <br />
      <Categories />
      <br />
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default Layout