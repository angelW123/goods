import React, { Component } from 'react'
import { HotCateWrap } from './StyleCookbook'
import { Grid } from 'antd-mobile';

const data1 = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

export default class HotCate extends Component {
  render() {
    return (
      <HotCateWrap>
        <header>热门推荐</header>
        <Grid data={data1}
          columnNum={3}
          hasLine={false}
          renderItem={dataItem => (
            <div class="item" style={{ padding: '12.5px' }}>
              <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
              <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                <span>I am title..</span>
              </div>
            </div>
          )}
        />
      </HotCateWrap>
    )
  }
}
