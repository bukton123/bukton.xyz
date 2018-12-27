import React from 'react'

// import 
import Card from './Card'

export default () => {
  return (
    <section className="section-space">
     <div className="container is-fluid">
        <div className="columns">
          <div className="column has-text-centered image">
            <h2 className="section-title"><strong>What I Do</strong> </h2>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-centered image">
            <div className='column'>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}