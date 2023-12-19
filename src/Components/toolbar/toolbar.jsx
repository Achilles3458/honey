import React, { useState } from 'react';
import Move from '../svg/move';
import Search from '../svg/search';
import NewCell from '../svg/newcell';
import Zoomin from '../svg/zoomin';
import Zoomout from '../svg/zoomout';

const Toolbar = () => {
  const [color, setColor] = useState({
    moveColor: '#5D6C87',
    searchColor1: '#5D6C87',
    newcellColor1: '#5D6C87',
    zoominColor: '#5D6C87',
    zoomoutColor: '#5D6C87',
  });

  return (
    <div className='fixed bottom-[150px] left-[calc(50vw-200px)] w-[400px] h-[50px] bg-white shadow-[-1px_15px_20px_5px_rgba(213,213,213,1)] rounded-[20px]'>
      <div className='flex flex-row items-center justify-center w-full h-full'>
        <Move
          color={color.moveColor}
          onClick={() => setColor({ ...color, moveColor: '#007AFF' })}
        />
        <Search color={color.searchColor1} />
        <NewCell color={color.newcellColor1} />
        <Zoomin color={color.zoominColor} />
        <Zoomout color={color.zoomoutColor} />
      </div>
    </div>
  );
};

export default Toolbar;
