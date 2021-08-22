import React, { Component } from 'react'
import { HotCateWrap } from './StyleCookbook'
import { Grid } from 'antd-mobile';

import { get } from '../../utils/http'

const data1 = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

export default class HotCate extends Component {
  state = {
    hotList: []
  }
  async componentDidMount(){
    let result = await get({
      url: '/api/hotcate'
    })
    const data = result.map((val)=>({
      icon: val.img,
      text: val.title
    }))
    this.setState({
      hotList: data
    })
  }
  render() {
    return (
      <HotCateWrap>
        <header>热门推荐</header>
        <Grid data={this.state.hotList}
          columnNum={3}
          hasLine={false}
          renderItem={dataItem => (
            <div className="item" style={{ padding: '12.5px' }}>
              <img src={dataItem.icon} alt="" />
                <span>{dataItem.text}</span>
            </div>
          )}
        />
      </HotCateWrap>
    )
  }
}
