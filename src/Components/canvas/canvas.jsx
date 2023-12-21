import React, { useState, useRef } from 'react';
import { Stage, Layer, Path, Group, Text } from 'react-konva';

const Canvas = () => {
  const initX = 960;
  const initY = 514;
  const cellWidth = 140;
  const cellHeight = 160;

  const getPosition = (row, col) => {
    let x = 0;
    let y = 0;

    if (row % 2 === 1 || row % 2 === -1) {
      x = row * cellWidth + initX;
      y = col * cellHeight - 80 + initY;
    } else {
      x = row * cellWidth + initX;
      y = col * cellHeight + initY;
    }
    return { x, y };
  };

  const getRowCol = (x, y) => {
    let rownum = 0;
    let colnum = 0;

    rownum = Math.floor((x - initX) / cellWidth + 0.5);
    if (rownum % 2 === 1 || rownum % 2 === -1) {
      colnum = Math.floor((y + 80 - initY) / cellHeight + 0.5);
    } else {
      colnum = Math.floor((y - initY) / cellHeight + 0.5);
    }

    return { row: rownum, col: colnum };
  };

  const checkDrop = (row, col) => {
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
    else if (
      (cells.findIndex((hex) => hex.row === row && hex.col === col - 1) !==
        -1 ||
        cells.findIndex((hex) => hex.row === row + 1 && hex.col === col - 1) !==
          -1 ||
        cells.findIndex((hex) => hex.row === row + 1 && hex.col === col) !==
          -1 ||
        cells.findIndex((hex) => hex.row === row && hex.col === col + 1) !==
          -1 ||
        cells.findIndex((hex) => hex.row === row - 1 && hex.col === col) !==
          -1 ||
        cells.findIndex((hex) => hex.row === row - 1 && hex.col === col - 1) !==
          -1) &&
      (row % 2 === 1 || row % 2 === -1)
    )
      return true;

    return false;
  };

  const fakeData = [
    {
      id: -1,
      title: 'Note1',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 0,
      col: -1,
      x: getPosition(0, -1).x,
      y: getPosition(0, -1).y,
    },
    {
      id: -2,
      title: 'Note 1',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -1,
      col: -1,
      x: getPosition(-1, -1).x,
      y: getPosition(-1, -1).y,
    },
    {
      id: -3,
      title: '-1, 1',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -1,
      col: 1,
      x: getPosition(-1, 1).x,
      y: getPosition(-1, 1).y,
    },
    {
      id: 0,
      title: '0, 0',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 0,
      col: 0,
      x: getPosition(0, 0).x,
      y: getPosition(0, 0).y,
    },
    {
      id: 4,
      title: '0, 1',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 0,
      col: 1,
      x: getPosition(0, 1).x,
      y: getPosition(0, 1).y,
    },
    {
      id: -5,
      title: '-1, 0',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -1,
      col: 0,
      x: getPosition(-1, 0).x,
      y: getPosition(-1, 0).y,
    },
    {
      id: 6,
      title: '1, 0',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 1,
      col: 0,
      x: getPosition(1, 0).x,
      y: getPosition(1, 0).y,
    },
    {
      id: 7,
      title: '6, 1',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 6,
      col: 1,
      x: getPosition(6, 1).x,
      y: getPosition(6, 1).y,
    },
    {
      id: 8,
      title: '3, 1',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 3,
      col: 1,
      x: getPosition(3, 1).x,
      y: getPosition(3, 1).y,
    },
    {
      id: 9,
      title: '4, 2',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 4,
      col: 2,
      x: getPosition(4, 2).x,
      y: getPosition(4, 2).y,
    },
    {
      id: 10,
      title: '1, 1',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 1,
      col: 1,
      x: getPosition(1, 1).x,
      y: getPosition(1, 1).y,
    },
    {
      id: 11,
      title: '2, 3',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 2,
      col: 3,
      x: getPosition(2, 3).x,
      y: getPosition(2, 3).y,
    },
    {
      id: 12,
      title: '1, 3',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 1,
      col: 3,
      x: getPosition(1, 3).x,
      y: getPosition(1, 3).y,
    },
    {
      id: 13,
      title: '3, 3',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 3,
      col: 3,
      x: getPosition(3, 3).x,
      y: getPosition(3, 3).y,
    },
    {
      id: 14,
      title: '0, 3',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 0,
      col: 3,
      x: getPosition(0, 3).x,
      y: getPosition(0, 3).y,
    },
    {
      id: 15,
      title: '0, 2',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 0,
      col: 2,
      x: getPosition(0, 2).x,
      y: getPosition(0, 2).y,
    },
    {
      id: 16,
      title: '2, 1',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 2,
      col: 1,
      x: getPosition(2, 1).x,
      y: getPosition(2, 1).y,
    },
    {
      id: 17,
      title: '2, 0',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: 2,
      col: 0,
      x: getPosition(2, 0).x,
      y: getPosition(2, 0).y,
    },
    {
      id: -18,
      title: '-2, 0',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -2,
      col: 0,
      x: getPosition(-2, 0).x,
      y: getPosition(-2, 0).y,
    },
    {
      id: -19,
      title: '-4, 0',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -4,
      col: 0,
      x: getPosition(-4, 0).x,
      y: getPosition(-4, 0).y,
    },
    {
      id: -20,
      title: '-2, 1',
      content:
        'Discover the latest fashion trends in our store. Shop the new collection ...',
      row: -2,
      col: 1,
      x: getPosition(-2, 1).x,
      y: getPosition(-2, 1).y,
    },
  ];

  const [cells, setCells] = useState(fakeData);
  const layerRef = useRef(null);

  const handleDragEnd = (e) => {
    const id = e.target.id();
    const row = getRowCol(e.target.position().x, e.target.position().y).row;
    const col = getRowCol(e.target.position().x, e.target.position().y).col;

    setCells((prevCells) => {
      const cellIndex = prevCells.findIndex((hex) => hex.id === id);
      if (cellIndex === -1) {
        return prevCells;
      }
      const cell = prevCells[cellIndex];
      const newHexagons = [...prevCells];
      if (!checkDrop(row, col)) {
        newHexagons[cellIndex] = {
          ...cell,
          row: cell.row,
          col: cell.col,
          x: getPosition(cell.row, cell.col).x,
          y: getPosition(cell.row, cell.col).y,
        };
        return newHexagons;
      }
      if (cell.row === row && cell.col === col) {
        newHexagons[cellIndex] = {
          ...cell,
          row: row,
          col: col,
          x: getPosition(row, col).x,
          y: getPosition(row, col).y,
        };
        return newHexagons;
      }

      newHexagons[cellIndex] = {
        ...cell,
        row: row,
        col: col,
        x: getPosition(row, col).x,
        y: getPosition(row, col).y,
      };
      return newHexagons;
    });
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer ref={layerRef} scaleX={2} scaleY={2} x={-500} y={-500}>
        {cells.map((cell, index) => {
          return (
            <Group
              key={index}
              id={cell.id}
              x={cell.x}
              y={cell.y}
              draggable
              onDragEnd={handleDragEnd}
              _useStrictMode={true}
              scaleX={1}
              scaleY={1}
              // width={140}
            >
              <Path
                data='M22.4641 92.5C20.3205 88.7872 20.3205 84.2128 22.4641 80.5L58.2859 18.4548C60.4295 14.742 64.391 12.4548 68.6782 12.4548L140.322 12.4548C144.609 12.4548 148.571 14.742 150.714 18.4548L186.536 80.5C188.679 84.2128 188.679 88.7872 186.536 92.5L150.714 154.545C148.571 158.258 144.609 160.545 140.322 160.545L68.6782 160.545C64.391 160.545 60.4295 158.258 58.2859 154.545L22.4641 92.5Z'
                fill='#FBCC43'
                shadowColor='black'
                shadowBlur={20}
                shadowOpacity={0.5}
                shadowOffsetX={0}
                shadowOffsetY={10}
                numPoints={5}
              />
              <Text
                text={cell.title}
                width={115}
                x={48}
                y={40}
                fontSize={16}
                fill='black'
                align='center'
                fontStyle='bold'
                letterSpacing={1}
              />
              <Text
                text={cell.content}
                width={125}
                x={42}
                y={70}
                fontSize={12}
                fill='black'
                align='center'
                lineHeight={1.2}
              />
            </Group>
          );
        })}
      </Layer>
    </Stage>
  );
};

export default Canvas;
