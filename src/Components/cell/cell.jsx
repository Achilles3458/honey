import Hexagon from '../svg/hexagon';
import React from 'react';
import { useDrag } from 'react-dnd';

const Cell = ({ row, col, id, title, content, onMove }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'cell',
    item: { id, row, col, title, content },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const getPosition = (row, col) => {
    let x = 0;
    let y = 0;

    if (row % 2 === 1 || row % 2 === -1) {
      x = row * 140;
      y = col * 160 - 80;
    } else {
      x = row * 140;
      y = col * 160;
    }
    return { x, y };
  };

  return (
    <div
      className='absolute flex justify-center items-center cursor-pointer'
      style={{ top: getPosition(row, col).y, left: getPosition(row, col).x }}
      ref={drag}
    >
      <Hexagon color={'#FBCC43'} />
      <div className='absolute top-[40px] w-[115px] h-[20px] flex justify-center items-center text-center'>
        <label className='text-[16px] font-bold text-black'>{id}</label>
      </div>
      <div className='max-w-[150px] max-h-[64px] absolute flex justify-center items-center text-center'>
        <label className='text-[16px] text-black'>
          {row},{col}
        </label>
      </div>
    </div>
  );
};

export default Cell;
