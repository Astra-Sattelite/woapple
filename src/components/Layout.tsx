import * as React from 'react'
import Header from './Header';
import Categories from './Categories';
import "../styles/layout/header.css"

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<LayoutProps> = (props) => {

  return (
    <div className="w-full h-full min-h-full flex-col">
      <div className="h-1/6 border-b-2 border-white">
        <Header />
        {/* <Categories /> */}
      </div>
      <div className="flex justify-center items-center w-full h-5/6">
        {props.children}
      </div>
    </div>
  )
}

const LayoutMemo = React.memo(Layout)

export default LayoutMemo