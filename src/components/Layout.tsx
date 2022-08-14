import * as React from 'react'
import Navbar from './Navbar';
import Categories from './Categories';

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export const Layout: React.FC<LayoutProps> = (props) => {
  
  return (
    <div className="w-full h-full flex-col">
      <div className="w-full h-1/6 border-b-2 border-white">
        <Navbar />
        <Categories />
      </div>
      <div className="flex justify-center items-center w-full h-5/6">
        {props.children}
      </div>
    </div>
  )
}

export default Layout