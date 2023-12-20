import React, { useState } from 'react';
import Cell from '../../Components/cell/index';
import Toolbar from '../../Components/toolbar';
import { MapInteractionCSS } from 'react-map-interaction';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Container from '../../Components/dnd';

const Product = () => {
  const [value, setValue] = useState({
    scale: 1,
    translation: { x: 0, y: 0 },
  });
  const fakeData = [
    {
      id: -1,
      title: '0, -1',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 0,
      col: -1,
    },
    {
      id: -5,
      title: '-1, -1',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -1,
      col: -1,
    },
    {
      id: -7,
      title: '-1, 1',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -1,
      col: 1,
    },
    {
      id: 0,
      title: '0, 0',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 0,
      col: 0,
    },
    {
      id: 1,
      title: '0, 1',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 0,
      col: 1,
    },
    {
      id: -4,
      title: '-1, 0',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -1,
      col: 0,
    },
    {
      id: 2,
      title: '1, 0',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 1,
      col: 0,
    },
    {
      id: 3,
      title: '6, 1',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 6,
      col: 1,
    },
    {
      id: 4,
      title: '3, 1',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 3,
      col: 1,
    },
    {
      id: 6,
      title: '4, 2',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 4,
      col: 2,
    },
    {
      id: 7,
      title: '1, 1',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 1,
      col: 1,
    },
    {
      id: 8,
      title: '2, 3',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 2,
      col: 3,
    },
    {
      id: 11,
      title: '1, 3',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 1,
      col: 3,
    },
    {
      id: 12,
      title: '3, 3',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 3,
      col: 3,
    },
    {
      id: 15,
      title: '0, 3',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 0,
      col: 3,
    },
    {
      id: 16,
      title: '0, 2',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 0,
      col: 2,
    },
    {
      id: 18,
      title: '2, 1',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 2,
      col: 1,
    },
    {
      id: 15,
      title: '2, 0',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 2,
      col: 0,
    },
    {
      id: -15,
      title: '-2, 0',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -2,
      col: 0,
    },
    {
      id: -16,
      title: '-4, 0',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -4,
      col: 0,
    },
    {
      id: -17,
      title: '-2, 1',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -2,
      col: 1,
    },
    {
      id: 23,
      title: '-1, -2',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -1,
      col: -2,
    },
    {
      id: 25,
      title: '-2, -1',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -2,
      col: -1,
    },
    {
      id: 27,
      title: '1, 2',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 1,
      col: 2,
    },
    {
      id: 24,
      title: '5, 2',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 5,
      col: 2,
    },
    {
      id: 30,
      title: '-3, -3',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -3,
      col: 0,
    },
    {
      id: 31,
      title: '-5, -3',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -5,
      col: 0,
    },
    {
      id: 43,
      title: '-5, -3',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -4,
      col: 1,
    },
    {
      id: 41,
      title: '-5, -3',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 1,
      col: -1,
    },
    {
      id: 51,
      title: '-2, -3',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 0,
      col: -2,
    },
    {
      id: 53,
      title: '-2, -3',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -1,
      col: 2,
    },
    {
      id: 55,
      title: '2, -1',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 2,
      col: -1,
    },
  ];
  return (
    <div className='relative flex items-center w-full h-full'>
      {/* <MapInteractionCSS
        value={value}
        onChange={(newValue) => setValue(newValue)}
        disableZoom={false}
        disablePan={false}
      > */}
      {/* <div className='h-[100vh] w-[100vw]'>
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
      </div> */}
      {/* </MapInteractionCSS> */}
      <DndProvider backend={HTML5Backend}>
        <Container />
      </DndProvider>
      <Toolbar />
    </div>
  );
};

export default Product;
