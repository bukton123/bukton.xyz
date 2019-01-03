import React from 'react'

// import
import MainLayout from '../components/layout'
import Intro from '../components/Intro'
import WhatIdo from '../components/WhatIdo'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import ScrollTop from '../components/App/ScrollTop'

class Bukton extends React.Component {
  static getInitialProps (ctx) {
    return {}
  }

  render () {
    
    return (
      <div>
        <Intro />
        <Blog />
        <WhatIdo />
        <Footer />
        <ScrollTop />
      </div>
    )
  }
}

export default MainLayout(Bukton)