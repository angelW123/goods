import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';

import Huo from 'assets/images/huo.png'
import HuoActive from 'assets/images/huoActive.png'
import kind from 'assets/images/kind.png'
import kindActive from 'assets/images/kindActive.png'

export default class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: true,
    };
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#666"
          tintColor="#666"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="美食大全"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${Huo}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${HuoActive}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}

            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${kind}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${kindActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="分类"
            key="Koubei"

            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${Huo}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${HuoActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="美食地图"
            key="Friend"

            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: `${kind}` }}
            selectedIcon={{ uri: `${kindActive}` }}
            title="更多"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
