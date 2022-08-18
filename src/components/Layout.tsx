import * as React from 'react'
import Header from './Header';
import Categories from './Categories';

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<LayoutProps> = (props) => {

  return (
    <div className="w-full h-full min-h-full flex-col bg-slate-50">
      <div className="h-28">
        <Header />
        <Categories />
      </div>
      <div className="flex w-full flex-col gap-6 items-center pb-4">
        {props.children}
      </div>
    </div>
  )
}

export default Layout