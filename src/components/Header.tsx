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
    {url: "/stories", title: "Stories"},
  ]

  return (
    <div className="
      h-1/2 bg-zinc-800 
      flex justify-center 
      text-neutral-300 font-light"
    >
      <div className="flex flex-row h-full w-10/12 items-center gap-4">
        <Logo />
        {urls.map(
          url => 
            <Link 
              to={url.url} 
              key={url.url}
              className="hover:text-zinc-200"
            >
              {url.title}
            </Link>
        )}
      </div>
    </div>
  )
}

export default Header