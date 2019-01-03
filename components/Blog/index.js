import React from 'react'

// import 
import BlogCard from './BlogCard'
import BlogFound from './Found'

export default () => {
  return (
    <section className="section-space">
     <div className="container is-fluid">
        <div className="columns">
          <div className="column has-text-centered image">
            <h2 className="section-title"><strong>Blog</strong> </h2>
          </div>
        </div>
        <div className="columns">
          <div className="column has-text-centered image">
            {/* <div className='column'>
              <BlogCard />
            </div> */}
            <div className='column'>
              <BlogFound />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}