import React from 'react'
import classname from 'classname'

export default class ScrollTop extends React.Component {
  state = {
    scrollHeigth: 0,
    hidden: true
  }

  componentDidMount () {
    this.setScroll()
    window.onscroll = this.onScroll
  }

  setScroll = () => {
    this.setState({ scrollHeigth: (document.documentElement.scrollHeight || document.body.scrollHeight) * 20 / 100 })
  }

  onScroll = () => {
    const scrollCurrent = document.documentElement.scrollTop || document.body.scrollTop
    if (scrollCurrent > this.state.scrollHeigth && this.state.hidden) {
      this.setState({ hidden: false })
    } else if (scrollCurrent < this.state.scrollHeigth && !this.state.hidden) {
      this.setState({ hidden: true })
    }
  }

  scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  render () {
    return (
      <div className={classname('scroll-top', { 'active': !this.state.hidden })} >
        <button onClick={this.scrollTop} className='button is-primary' >SCROLL TO TOP</button>
      </div>
    )
  }
} 