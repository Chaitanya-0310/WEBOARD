import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  applyNodeChanges,
  applyEdgeChanges,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';
import Sidebar from './Sidebar';
import './dnd.css';
import './indexstyle.css';
import { MiniMap, Background } from 'reactflow';
import './Theme.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextUpdaterNode from './TextUpdaterNode.js';
import './text-updater-node.css';
import TextUpdaterTwo from './TextUpdaterTwo';
import'./Text-Updater-Two.css'
import { Avatar,Stack } from '@mui/material';
import {BiLogOut} from 'react-icons/bi';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {Link} from 'react-router-dom'



const initialNodes = [
  {
    id: '1',
    type: 'textUpdater',
    data: { label: 'input node' },
    position: { x: 250, y: 5 },
  },
];

const minimapStyle = {
  height: 120,
  };

  

let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);


  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  
  // const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

 // AVATAR
 function stringToColor(string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}


function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}



  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      
     
     
      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });


      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  
  const nodeTypes = { textUpdater: TextUpdaterNode, textUpdateTwo: TextUpdaterTwo};

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper} style={{width: '100%', height: '100vh'}}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
          >
          <MiniMap 
                nodeColor={n=>{
                    if(n.type === 'input') return 'red';
                    
                    return 'blue'
                      }} style={minimapStyle} zoomable pannable />

         <Background variant="dots" gap={12} size={1} color="#888"/>
          
        <Controls />
        
        </ReactFlow>

        
      <div className='dnd_avatar_child_div'> 
       <Stack direction="row" spacing={2}>
          <Avatar {...stringAvatar('Chaitanya Panchal')} style={{ width: 55, height: 55 }}/>  
          {/* for dynamic Nam `${Name} */}
        </Stack>
      </div>
      

        
        </div>
        <div className="dragnd_child_div">
          <Sidebar />
        </div>

        <div className='dragndrop_exitlogo'>
          <Tooltip title="Go To Dashboard"> 
            <Link exact to = "/Dashboard"> 
            <IconButton color="primary" href="#contained-buttons" className='button_logout' style={{backgroundColor: "#E46D5F", color: "black", width:40, height:43, borderRadius:4}}>
              <BiLogOut style={{width:45, height:30, color: 'black'}} />
            </IconButton>
           </Link>
          </Tooltip>
        </div>








      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;
