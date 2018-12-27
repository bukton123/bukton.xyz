import React from 'react'

export default () => {
  return (
    <a href='https://blog.bukton.xyz'>
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">John Smith</p>
              <p class="subtitle is-6 text-author">@bukton <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></p>
              <p class="subtitle is-6 text-card "> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}