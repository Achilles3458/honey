import Hexagon from '../svg/hexagon';
import React from 'react';
import { useDrag } from 'react-dnd';

const Cell = ({ row, col, id, title, content, onMove }) => {
  const getPosition = (row, col) => {
    let x = 0;
    let y = 0;

    if (row % 2 === 1) {
      x = (row - 1) * 139 + 138 + 500;
      y = (col - 1) * 160 + 80 + 500;
    } else if (row % 2 === -1) {
      x = row * 160 + 500 + 21;
      y = (col - 1) * 160 + 80 + 500;
    } else {
      x = row * 139 + 500;
      y = col * 160 + 500;
    }
    return { x, y };
  };

  const [{ isDragging }, drag] = useDrag({
    type: 'hexagon',
    item: { id, row, col },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        const { x, y } = dropResult;
        onMove(item.id, x, y);
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      className='absolute flex justify-center items-center cursor-pointer'
      style={{ top: getPosition(row, col).y, left: getPosition(row, col).x }}
    >
      <Hexagon color={'#FBCC43'} />
      <div className='absolute top-[40px] w-[115px] h-[20px] flex justify-center items-center text-center'>
        <label className='text-[16px] font-bold text-black'>{id}</label>
      </div>
      <div className='max-w-[150px] max-h-[64px] absolute flex justify-center items-center text-center'>
        <label className='text-[12px] text-black'>
          {getPosition(row, col).x},{getPosition(row, col).y}
        </label>
      </div>
    </div>
  );
};

export default Cell;
