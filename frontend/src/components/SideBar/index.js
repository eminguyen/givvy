import {
  MenuOutlined
} from '@ant-design/icons';

import { Carousel, Progress } from 'antd';
import Card from '../Card';

import React from 'react';

import './style.scss';

const settings = {
  arrows: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  centerMode: true,
  slidesToShow: 1,
  centerPadding: '0'
};

const SideBar= (props) => {
  const left = props.sideBarVis ? '0' : '-30vw';

  return (
    <div className="side-bar" style={{left: left}}>
      <div className="bar-1">
        <MenuOutlined onClick={() => {props.toggleSideBar(false)}}/>
      </div>
      <div className="bar-2">
        <h1>Recommended Center</h1>
        <Carousel {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
      <div className="bar-3">
        <h1>Resources Needed</h1>
        <Progress percent={30} strokeColor="linear-gradient(90deg, #A643F4 0%, rgba(249, 89, 166, 0.9) 100%)" strokeWidth={20}/>
        <div className="cards">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="side-button">Confirm Donation</div>
      </div>
    </div>
  );
};

export default SideBar;