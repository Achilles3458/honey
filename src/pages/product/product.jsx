import React, { useState } from 'react';
import Toolbar from '../../Components/toolbar';
import { MapInteractionCSS } from 'react-map-interaction';
import Canvas from '../../Components/canvas/canvas';

const Product = () => {
  const [value, setValue] = useState({
    scale: 1,
    translation: { x: 0, y: 0 },
  });

  return (
    <div className='relative flex items-center w-full h-full'>
      <MapInteractionCSS
        value={value}
        onChange={(newValue) => setValue(newValue)}
        disableZoom={true}
        disablePan={true}
      >
        <Canvas />
      </MapInteractionCSS>
      <Toolbar />
    </div>
  );
};

export default Product;
