import React from 'react';
import TextUpdaterNode from './TextUpdaterNode.js';
import TextUpdaterTwo from './TextUpdaterTwo.js';
import './text-updater-node.css'
import { useMemo } from 'react';
import { Button } from '@mui/material';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const nodeTypes =useMemo( ()=> ({ textUpdater: TextUpdaterNode, textUpdateTwo: TextUpdaterTwo }), []);

  return (
    <aside>
      <Button className="dndnode input" onDragStart={(event)=> onDragStart(event, 'textUpdater')} variant="contained" draggable >Input</Button>
      
      <Button className="dndnode" onDragStart={(event) => onDragStart(event, 'textUpdateTwo')} variant='contained' draggable>Default</Button>
    
      <Button className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} variant='contained' draggable>Output</Button>

    </aside>
  );
};
