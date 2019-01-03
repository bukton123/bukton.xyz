import React from 'react'
import Head from 'next/head'

// import
import MainScript from '../lib/main'
import Header from '../components/Header'
import Intro from '../components/Intro'
import WhatIdo from '../components/WhatIdo'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import ScrollTop from '../components/App/ScrollTop'

// style
import '../styles/styles.scss'

class Bukton extends React.Component {
  static getInitialProps (ctx) {
    return {}
  }

  componentDidMount () {
    MainScript()
  }

  render () {
    const data = {
      author: {
        name: 'Buk Ton'
      },
      title: 'bukton.xyz',
      description: 'bukton.xyz knowledge sharing',
      keyword: 'bukton,blog,knowledge,technology,dev,devloper',
      website: 'https://www.bukton.xyz/',
      img: 'https://www.bukton.xyz/static/img/bukton-log.png'
    }
    return (
      <div>
        <Head>
          {/* <!-- Title--> */}
          <title>{ data.title }</title>

          {/* <!-- Favicon--> */}
          <link rel="icon" href="/static/img/logo.png" type="image/png" />
          <link ref="manifest" href="/static/manifest.json" />

          {/* <!-- Meta --> */}
          <meta charset="UTF-8" />
          <meta name="author" content={ data.author.name } />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name='description' content={ data.description } />
          <meta name='keywords' content={ data.keyword } />
          <link rel="canonical" href={ data.website } />
          <meta property="og:locale" content="th_TH" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={ data.title } />
          <meta property="og:description" content={ data.description } />
          <meta property="og:url" content={ data.website } />
          <meta property="og:site_name" content={ data.title } />
          <meta property="og:image" content={ data.img } />
          <meta property="og:image:secure_url" content={ data.img } />
          <meta property="og:image:width" content="620" />
          <meta property="og:image:height" content="372" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content={ data.description } />
          <meta name="twitter:title" content={ data.title } />
          <meta name="twitter:image" content={ data.img } />

          {/* <!-- style & script --> */}
          <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet"/>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"/>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-131386587-1" />
        </Head>
        
        {/* <!-- Content --> */}
        <Header />
        <Intro />
        <Blog />
        <WhatIdo />
        <Footer />
        <ScrollTop />
      </div>
    )
  }
}

export default Bukton