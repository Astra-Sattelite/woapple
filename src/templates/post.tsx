import * as React from 'react'
import Layout from '../components/Layout';
import { PageProps } from 'gatsby';
import { DatoCmsPost } from '../Types';
import { formatDate } from '../Utils';
import SEOPost from '../components/SEOPost';

const Outliner = () => {
  return (
    <div className="w-full mt-5 border-zinc-500 border-b-2" />
  )
}

const ShortDescr = (props: {shortdescr: string}) => {

  return (
    <div className="mt-5 text-2xl">
      {props.shortdescr}
    </div>
  )

}

const Title = (props: {title: string}) => {

  return (
    <div className="w-full text-5xl font-bold break-words">
      {props.title}
    </div>
  )
}

const ThemeAndDate = (props: {theme: string, date: Date}) => {

  const date  = formatDate(props.date)
  const theme = props.theme.toLocaleUpperCase()

  return(
    <div
      className="
        w-full h-12
        text-left flex 
        flex-col text-zinc-500
        text-sm
      "
    >
      <p className="text-sm font-medium">{theme}</p>
      <p className="">{date}</p>
    </div>
  )
}


const TemplatePost = (props: PageProps<{}, DatoCmsPost>) => {

  const date = new Date(props.pageContext.img.createdAt)
  
  const html = props.pageContext.descriptionNode.childMarkdownRemark.html

  return (
    <Layout>
      <div className="w-screen h-screen bg-white flex justify-center pb-10">
        <div className="w-3/6 h-full mt-14">
          <SEOPost seoMetaTags={props.pageContext.seoMetaTags} />
          <ThemeAndDate theme={props.pageContext.theme} date={date}/>
          <Title title={props.pageContext.title}/>
          <ShortDescr shortdescr={props.pageContext.shortdescr}/>
          <Outliner/>
          <div dangerouslySetInnerHTML={{ __html: html }} className="mt-5"/>
        </div>
      </div>
    </Layout>
  )
}

export default TemplatePost