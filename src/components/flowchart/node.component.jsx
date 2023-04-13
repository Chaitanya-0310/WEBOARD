import React, { useState, useCallback } from 'react';
import 'reactflow/dist/style.css';
import ConnectionLine from './ConnectionLine.js';
import './flowchart.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,

} from 'reactflow';
import {BiLogOut} from 'react-icons/bi';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {Link} from 'react-router-dom'




// NODES
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'Start' }, type: 'input', style: {
    background: "#27E1C1",
    color: "#666",
    border: "1px solid #000000",
    width: 180
  }},
];

// EDGES
const initialEdges = [{ id: '1', source: ' ', target: ' ', type: 'smoothstep' } ];


// MINIMAP
const minimapStyle = {
  height: 120,
  };

  const onLoad = (reactFlowInstance) =>  {
    reactFlowInstance.fitView();
}

const MindNode=()=> {
  const [nodes, setNodes, onNodesChange] = useState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [name, setName] = useState("");
  
  // FIRST NODE
  const addNode = () => {
    setNodes(e=>e.concat({
        id:(e.length+1).toString(),
        data:{label: `${name}`},
        position: {x: 50, y: 50},

        style: {
          background: "#A5D7E8",
          color: "white",
          border: "1px solid #000000",
          width: 180
        }
    }))
  }
  
// SECOND NODE
  const addNodeTwo = () => {
    setNodes(e=>e.concat({
        id:(e.length+1).toString(),
        data:{label: `${name}`},
        position: {x: 50, y: 50},
           
        style: {
          background: "#B2A4FF",
          color: "#333",
          border: "1px solid #000000",
          width: 180,
          
        }
    }))
  }

  // AVATAR
  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
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



//  CONNECT EDGES
  const onConnect = (params) => setEdges(e => addEdge(params,e), [setEdges]);

  return (
    <>
    <div className='parent_div'>
    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow
        defaultNodes={initialNodes}
        defaultEdges={initialEdges}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionLineStyle={{stroke: "#ddd", strokeWidth: 2}}
        
        connectionLineComponent={ConnectionLine}
        snapToGrid = {true}
        snapGrid={[16,16]}
      >
       
        <Controls />
        <MiniMap 
                nodeColor={n=>{
                    if(n.type === 'input') return 'red';
                    
                    return 'blue'
                      }} style={minimapStyle} zoomable pannable />
        <Background variant="dots" gap={12} size={1} color="#888"/>
      </ReactFlow>

      <div className='avatar_child_div'>
       <Stack direction="row" spacing={2}>
          <Avatar {...stringAvatar('Chaitanya Panchal')} style={{ width: 55, height: 55 }}/>  
          {/* for dynamic Nam `${Name} */}
        </Stack>
      </div>
      
     
        <div className="child_div"> 
            <span>
            <TextField id="outlined-basic" label="Enter Text" variant="outlined" size='small' className='m-2' onChange={e => setName(e.target.value)}
                      name="title" />

            <Button className = "m-2" style={{backgroundColor: "#E46D5F", color: "black"}} variant="contained" type="button" size='medium'
                      onClick={addNode} >Add Node</Button>
            </span>

            <span>
            <TextField id="outlined-basic" label="Enter Text" variant="outlined" size='small' className='m-2' onChange={e => setName(e.target.value)}
                      name="title" />

            <Button className = "m-2" style={{backgroundColor: "#E46D5F", color: "black"}}  variant="contained" type="button" size='medium'
                      onClick={addNodeTwo} >Add Node</Button>
            </span>

              
        </div>
        

        <div className='exitlogo'>
        <Tooltip title="Go To Dashboard"> 
        <Link exact to = "/Dashboard"> <IconButton color="primary" href="#contained-buttons" className='button_logout' style={{backgroundColor: "#E46D5F", color: "black", width:40, height:40, borderRadius:4}}>
          <BiLogOut style={{width:45, height:30, color: 'black'}} />
        </IconButton>
        </Link>
        </Tooltip>
        </div>
          
        
      
      </div>
    </div>
    </>
   
  );
}

export default MindNode;