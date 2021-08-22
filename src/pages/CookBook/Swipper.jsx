import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import { SwipperWrap } from './StyleCookbook'

export default class Swipper extends Component {
  render() {
    return (
      <SwipperWrap>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          <img src="https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png"/>
        </Carousel>
      </SwipperWrap>
    )
  }
}
