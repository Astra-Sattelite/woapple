import * as React from 'react'
import Layout from '../components/Layout';

// export default function GenericPost(props: any) {

//   // const image = getImage(props.pageContext.img)!

//   return (
//     <Layout>
//       <div>
//         {/* This is: {props.pageContext.title}
//         <br />
//         <GatsbyImage image={image} alt={props.pageContext.img} /> */}
//         {/* <br /> */}
//         {JSON.stringify(props)}
//       </div>
//     </Layout>
//   )
// }


export default function NotFound() {
  return (
    <Layout>
      <div>
        <img src="../../static/404.jpg" alt="../../static/404.jpg" />
        <h2>404</h2>
        <p>Page existence is a lie</p>
      </div>
    </Layout>
  )
}
