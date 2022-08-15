import * as React from 'react'
import { Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import "../styles/layout/header.css"

const Logo = () => {
  return (
    <div className="layout-hdr-logo" />
  )
}

const HeaderDropDown = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  return (
    <>
      {!isOpen
        ? <div
            className="layout-hdr-dropdown-closed"
            onClick={() => setIsOpen(true)}
          />
        : <div className="layout-hdr-dropdown-opened">
            <div
              className="layout-hdr-dropdown-opened-icon"
              onClick={() => {setIsOpen(false), console.log(isOpen)}}
            />
          </div>
      }
    </>
  )
}

export const Header = () => {

  return (
    <div className="flex justify-center h-full layout-hdr">
      <div className="flex flex-row layout-hdr-content">
        <HeaderDropDown />
        <Logo />
        <div className="layout-hdr-blank" />
      </div>
    </div>
  )
}

export default Header