import * as React from 'react'
import Header from './Header';
import Categories from './Categories';
import "../styles/layout/header.css"

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export const Layout: React.FC<LayoutProps> = (props) => {

  return (
    <div className="w-full h-full min-h-full flex-col">
      <div className="h-28 border-b-2">
        <Header />
        <Categories />
      </div>
      <div className="flex w-full flex-col gap-6 items-center mt-5">
        {props.children}
      </div>
    </div>
  )
}

export default Layout