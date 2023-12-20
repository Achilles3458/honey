import React, { useState } from 'react';
import Cell from '../cell/index';
import { useDrop } from 'react-dnd';

const Dnd = () => {
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

  const [cells, setCells] = useState(fakeData);

  const moveCell = (id, row, col) => {
    if (checkDrop(row, col))
      setCells((prevCells) => {
        const cellIndex = prevCells.findIndex((hex) => hex.id === id);
        // Only update if the hexagon is found
        if (cellIndex === -1) {
          return prevCells; // No change to the state.
        }

        const cell = prevCells[cellIndex];
        // Only update if left or top has changed
        if (cell.row === row && cell.top === row) {
          return prevCells; // No change to the state.
        }

        const newHexagons = [...prevCells];
        newHexagons[cellIndex] = { ...cell, row, col };

        return newHexagons;
      });
  };

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

  const getRowCol = (x, y) => {
    let rownum = 0;
    let colnum = 0;

    rownum = Math.floor(x / 160) + 1;
    if (rownum % 2 === 1 || rownum % 2 === -1) {
      colnum = Math.floor((y + 80) / 160 + 0.5);
    } else {
      colnum = Math.floor(y / 160 + 0.5);
    }

    return { row: rownum, col: colnum };
  };

  const checkDrop = (row, col) => {
    console.log(row, col);
    if (cells.findIndex((hex) => hex.row === row && hex.col === col) !== -1)
      return false;
    else if (
      (cells.findIndex((hex) => hex.row === row && hex.col === col - 1) !==
        -1 ||
        cells.findIndex((hex) => hex.row === row + 1 && hex.col === col) !==
          -1 ||
        cells.findIndex((hex) => hex.row === row + 1 && hex.col === col + 1) !==
          -1 ||
        cells.findIndex((hex) => hex.row === row && hex.col === col + 1) !==
          -1 ||
        cells.findIndex((hex) => hex.row === row - 1 && hex.col === col + 1) !==
          -1 ||
        cells.findIndex((hex) => hex.row === row - 1 && hex.col === col - 1) !==
          -1) &&
      row % 2 === 0
    )
      return true;
    // else if (
    //   (cells.findIndex((hex) => hex.row === row && hex.col === col - 1) !==
    //     -1 ||
    //     cells.findIndex((hex) => hex.row === row + 1 && hex.col === col - 1) !==
    //       -1 ||
    //     cells.findIndex((hex) => hex.row === row + 1 && hex.col === col) !==
    //       -1 ||
    //     cells.findIndex((hex) => hex.row === row && hex.col === col + 1) !==
    //       -1 ||
    //     cells.findIndex((hex) => hex.row === row - 1 && hex.col === col) !==
    //       -1 ||
    //     cells.findIndex((hex) => hex.row === row - 1 && hex.col === col - 1) !==
    //       -1) &&
    //   (row % 2 === 1 || row % 2 === -1)
    // )
    //   return true;

    return false;
    // const cellIndex = cells.findIndex(
    //   (hex) =>
    //     (hex.row !== row && hex.col !== col) ||
    //     (hex.row === row && hex.col === col - 1) ||
    //     (hex.row === row + 1 && hex.col === col) ||
    //     (hex.row === row + 1 && hex.col === col + 1) ||
    //     (hex.row === row && hex.col === col + 1) ||
    //     (hex.row === row - 1 && hex.col === col + 1) ||
    //     (hex.row === row - 1 && hex.col === col)
    // );
    // console.log(cellIndex);
    // return cellIndex !== -1;
  };

  const [, drop] = useDrop({
    accept: 'cell',
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(getPosition(item.row, item.col).x + delta.x);
      const top = Math.round(getPosition(item.row, item.col).y + delta.y);
      moveCell(item.id, getRowCol(left, top).row, getRowCol(left, top).col);
      return undefined;
    },
  });

  return (
    <div className='relative flex items-center w-full h-full'>
      <div className='h-[100vh] w-[100vw]' ref={drop}>
        {cells.map((data) => (
          <Cell
            row={data.row}
            col={data.col}
            id={data.id}
            title={data.title}
            content={data.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Dnd;
