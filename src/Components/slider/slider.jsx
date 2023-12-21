import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';
import styled from 'styled-components';

const AppleLikeSlider = styled(Slider)`
  .rc-slider-handle {
    border: none;
    width: 26px;
    height: 26px;
    margin-left: 0px;
    margin-top: -12px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.3), -1px 2px 2px rgba(0, 0, 0, 0.3),
      0px -1px 2px rgba(0, 0, 0, 0.3);
    border-radius: 100%;
    opacity: 1;
    cursor: pointer;
    &:focus,
    &:hover {
      box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2),
        -1px 2px 2px rgba(0, 0, 0, 0.2), 0px -1px 2px rgba(0, 0, 0, 0.2);
    }
  }

  .rc-slider-track {
    background-color: rgba(0, 122, 255, 1);
    height: 4px;
    border-radius: 1px;
  }

  .rc-slider-rail {
    background-color: rgba(120, 120, 128, 0.16);
    height: 4px;
    border-radius: 1px;
  }

  .rc-slider-dot {
    display: none;
  }
`;

const AppleSlider = ({ value, setValue }) => {
  const handleChange = (e) => {
    setValue(e);
    setValue({ ...value, scale: e });
  };

  return (
    <AppleLikeSlider
      min={0}
      max={100}
      step={1}
      value={value.scale}
      onChange={handleChange}
    />
  );
};

export default AppleSlider;
