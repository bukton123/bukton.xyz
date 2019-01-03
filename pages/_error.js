import React from 'react'

// import
import MainLayout from '../components/layout'

class ErrorPasge extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }
  render () {
    return (
      <div className='error-page'>
        <div className='columns'>
          <div className='column logo-center image'>
            <img src='/static/img/bukton512.png' className='err-logo' />
          </div>
        </div>
        <div className='columns'>
          <div className='column has-text-centered'>
            <h1 className='err-code'>404</h1>
            <p>Page Not Found</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MainLayout(ErrorPasge)