import React, { Component } from 'react'
import { SearchWrap } from './StyleCookbook'
import { Icon } from 'antd-mobile';

export default class Search extends Component {
  render() {
    return (
      <SearchWrap>
        <Icon type="search" size='md' />
        搜索美食
      </SearchWrap>
    )
  }
}
