import React from 'react'
import Link from 'next/link'

export default () => {
  return (
    <Link href='https://blog.bukton.xyz'>
      <a>
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">John Smith</p>
                <p className="subtitle is-6 text-author">@bukton <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time></p>
                <p className="subtitle is-6 text-card "> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris.
              </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}