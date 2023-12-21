import React, { useState } from 'react';
import Move from '../svg/move';
import Search from '../svg/search';
import NewCell from '../svg/newcell';
import Zoomin from '../svg/zoomin';
import Zoomout from '../svg/zoomout';
import AppleSlider from '../slider';

const Toolbar = ({ isAvailableZoom, setIsAavailableZoom, value, setValue }) => {
  const [color, setColor] = useState({
    moveColor: '#5D6C87',
    searchColor: '#5D6C87',
    newcellColor: '#5D6C87',
    zoominColor: '#5D6C87',
    zoomoutColor: '#5D6C87',
  });

  const handleMove = () => {
    setIsAavailableZoom(!isAvailableZoom);
    if (!isAvailableZoom) {
      setColor({ ...color, moveColor: '#007AFF' });
    } else {
      setColor({ ...color, moveColor: '#5D6C87' });
    }
  };

  const handleZoomIn = () => {
    if (value.scale < 100) setValue({ ...value, scale: value.scale - 1 });
  };
  const handleZoomOut = () => {
    if (value.scale > 1) setValue({ ...value, scale: value.scale + 1 });
  };

  return (
    <>
      <div className='fixed bottom-[150px] left-[calc(50vw-200px)] w-[400px] h-[50px] px-[16px]'>
        <AppleSlider value={value} setValue={setValue} />
      </div>
      <div className='fixed bottom-[120px] left-[calc(50vw-200px)] w-[400px] h-[50px] bg-white shadow-[-1px_15px_20px_5px_rgba(0,0,0,0.2)] rounded-[15px]'>
        <div className='flex flex-row items-center justify-center w-full h-full'>
          <div className='cursor-pointer' onClick={handleMove}>
            <Move color={color.moveColor} />
          </div>
          <div className='cursor-pointer'>
            <Search color={color.searchColor} />
          </div>
          <div className='cursor-pointer'>
            <NewCell color={color.newcellColor} />
          </div>
          <div className='cursor-pointer' onClick={handleZoomIn}>
            <Zoomin color={color.zoominColor} />
          </div>
          <div className='cursor-pointer' onClick={handleZoomOut}>
            <Zoomout color={color.zoomoutColor} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
