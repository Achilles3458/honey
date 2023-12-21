import React, { useState, useCallback } from 'react';
import Toolbar from '../../Components/toolbar';
import Canvas from '../../Components/canvas/canvas';

const Product = () => {
  const [isAvailableZoom, setIsAavailableZoom] = useState(false);
  const [mouseClickPos, setMouseClickPos] = useState({ x: 0, y: 0 });
  const [value, setValue] = useState({
    scale: 50,
    translation: { x: -200, y: -500 },
    isDragging: isAvailableZoom,
  });

  const handleMouseDown = (e) => {
    if (isAvailableZoom) {
      const { screenX, screenY } = e.nativeEvent;
      setMouseClickPos({ x: screenX, y: screenY });
      setValue({ ...value, isDragging: true });
    }
  };

  const handleMouseMove = useCallback(
    (event) => {
      if (value.isDragging) {
        const deltaX = event.screenX - mouseClickPos.x;
        const deltaY = event.screenY - mouseClickPos.y;
        setValue({
          ...value,
          translation: {
            x: value.translation.x + deltaX,
            y: value.translation.y + deltaY,
          },
        });
      }
    },
    [value.isDragging]
  );

  const handleMouseUp = () => {
    if (isAvailableZoom) {
      setValue({ ...value, isDragging: false });
    }
  };

  return (
    <>
      <div
        className='relative flex items-center w-full h-full'
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ cursor: isAvailableZoom ? 'move' : 'default' }}
      >
        <Canvas value={value} />
      </div>
      <Toolbar
        isAvailableZoom={isAvailableZoom}
        setIsAavailableZoom={setIsAavailableZoom}
        value={value}
        setValue={setValue}
      />
    </>
  );
};

export default Product;
