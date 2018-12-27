import React from 'react'
import Head from 'next/head'

// import
import MainScript from '../lib/main'

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
          <link rel="icon" href="" type="image/png" />
          
          {/* <!-- Meta --> */}
          <meta charset="UTF-8" />
          <meta name="author" content="bukton.xyz" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet"/>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-131386587-1"></script>
        </Head>
        <div>Welcome to bukton.xyz!</div>
      </div>
    )
  }
}

export default Bukton