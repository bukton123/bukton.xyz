import React from 'react'
import Head from 'next/head'

// import
import MainScript from '../lib/main'
import Header from '../components/Header'
import Intro from '../components/Intro'
import WhatIdo from '../components/WhatIdo'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

// style
import '../styles/styles.scss'

class Bukton extends React.Component {
  static getInitialProps (ctx) {
    return {ddd: 'sss'}
  }

  componentDidMount () {
    MainScript()
  }
  render () {
    return (
      <div>
        <Head>
          {/* <!-- Title--> */}
          <title>bukton.xyz</title>

          {/* <!-- Favicon--> */}
          <link rel="icon" href="/static/img/logo.png" type="image/png" />
          
          {/* <!-- Meta --> */}
          <meta charset="UTF-8" />
          <meta name="author" content="bukton.xyz" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
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
      </div>
    )
  }
}

export default Bukton