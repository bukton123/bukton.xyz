import React from 'react'

export default () => {

  return (
    <section className="intro-hero">
      <div className="container is-fluid">
        <div className="columns">
          <div className="column has-text-centered image">
            <img src="/static/img/bukton.jpg" className='is-rounded intro-img' />
            <h2 className="hero-title">Hello Guys, I’m <strong>Buk Ton</strong> </h2>
            <p className='hero-tagline'> I am a Developer </p>
          </div>
          <div className="intro-particle">
            <img src="/static/img/intro-bg-shape.png" />
          </div>
        </div>
      </div>
    </section>
  )
}