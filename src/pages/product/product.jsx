import React, { useState } from 'react';
import Cell from '../../Components/cell/index';
import Toolbar from '../../Components/toolbar';
import { MapInteractionCSS } from 'react-map-interaction';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Product = () => {
  const [value, setValue] = useState({
    scale: 1,
    translation: { x: 0, y: 0 },
  });
  const fakeData = [
    {
      id: -2,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 0,
      col: 0,
    },
    {
      id: -1,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 0,
      col: -1,
    },
    {
      id: -5,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -1,
      col: -1,
    },
    {
      id: -7,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -1,
      col: 1,
    },
    {
      id: 0,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 0,
      col: 0,
    },
    {
      id: 1,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 0,
      col: 1,
    },
    {
      id: -4,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -1,
      col: 0,
    },
    {
      id: 2,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 1,
      col: 0,
    },
    {
      id: 3,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 6,
      col: 1,
    },
    {
      id: 4,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 3,
      col: 1,
    },
    {
      id: 6,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 4,
      col: 2,
    },
    {
      id: 7,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 1,
      col: 1,
    },
    {
      id: 8,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 2,
      col: 3,
    },
    {
      id: 11,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 1,
      col: 3,
    },
    {
      id: 12,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 3,
      col: 3,
    },
    {
      id: 15,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 0,
      col: 3,
    },
    {
      id: 16,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 0,
      col: 3,
    },
    {
      id: 18,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 2,
      col: 1,
    },
    {
      id: 15,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 2,
      col: 0,
    },
    {
      id: -15,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -2,
      col: 0,
    },
    {
      id: -16,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -4,
      col: 0,
    },
    {
      id: -17,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -2,
      col: 1,
    },
    {
      id: 23,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -1,
      col: -2,
    },
    {
      id: 25,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -2,
      col: -1,
    },
    {
      id: 27,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 1,
      col: 2,
    },
    {
      id: 24,
      title: 'Hello',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 5,
      col: 2,
    },
  ];
  return (
    <div className='relative flex items-center w-full h-full'>
      <MapInteractionCSS
        value={value}
        onChange={(newValue) => setValue(newValue)}
        disableZoom={true}
        disablePan={true}
      >
        <div className='h-[100vh] w-[100vw]'>
          <DndProvider backend={HTML5Backend}>
            {fakeData.map((data) => {
              return (
                <Cell
                  row={data.row}
                  col={data.col}
                  id={data.id}
                  title={data.title}
                  content={data.content}
                />
              );
            })}
          </DndProvider>
        </div>
      </MapInteractionCSS>
      <Toolbar />
    </div>
  );
};

export default Product;
