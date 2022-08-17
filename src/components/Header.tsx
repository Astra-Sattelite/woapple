import * as React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

type Url = {
  url: string,
  title: string
}

const Logo = () => {
  return (
    <StaticImage
      loading="eager"
      src="../../static/logo.svg"
      alt="../../static/logo.svg"
      objectFit="contain"
      width={50}
    />
  )
}

const Header = () => {

  const urls: Url[] = [
    {url: "/", title: "Home"},
    {url: "/posts/", title: "Posts"},
  ]

  return (
    <div className="h-1/2 bg-gray-700 flex justify-center">
      <div className="flex flex-row h-full w-10/12 items-center gap-4">
        <Logo />
        {urls.map(
          url => 
            <Link to={url.url} key={url.url}>
              {url.title}
            </Link>
        )}
      </div>
    </div>
  )
}

export default Header