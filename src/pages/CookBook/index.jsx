import React, { Component } from 'react'
import Header from './Header'
import Swipper from './Swipper'
import Search from './Search'
import HotCate from './HotCate'

export default class CookBook extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Swipper/>
        <Search/>
        <HotCate/>
      </div>
    )
  }
}
