import React, { useState, useCallback } from 'react';
import 'reactflow/dist/style.css';
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
  MarkerType,
} from 'reactflow';
import {BiLogOut} from 'react-icons/bi';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {Link} from 'react-router-dom'
import ConnectionLine from '../flowchart/ConnectionLine';
import CustomEdge from './CustomEdge'
import DownloadButton from './DownloadButton';
import './image.css'
import './mindmapping.css';
import {name} from '../login_signup/Register'






// NODES
const initialNodes = [
  { id: '1',
  sourcePosition: 'right',
  targetPosition: 'left',
  type:"custom",
  
  data: { label: 'Start' },
  position: {
    x: Math.random() * 500,
    y: Math.random() * 500
  },
  style: {
    background: "#F55353",
    color: "black",
    border: "2px solid pink",
    width: 180
  
  }},
];








// EDGES
const initialEdges = [{ 
    id: '1', 
    type: 'default'
    
    
 } ];



const defaultEdgeOptions = {
  animated: true,
  type: 'bezier',
  style: {stroke: '#43919B'},
  strokeWidth: '5',
  width:'5',


  markerStart:{
    type: MarkerType.ArrowClosed,
    color:'#247881',
    width:'20'
   
   
  },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color:'#247881'
  },
};



  const edgeTypes = {
    custom: CustomEdge,
  };




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
        sourcePosition: 'right',
        targetPosition: 'left',
        data:{label: `${name}`},
        position:{
          x: Math.random() * 500,
          y: Math.random() * 500
        },

        style: {
          background: "#B983FF ",
          color: "black",
          border: "2px solid #D09CFA",
          width: 180
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
    <div className='mapping_parent_div'>
    <div className="wrapper" id="download-image" style={{ width: '100%', height: '100vh' }}>
    <DownloadButton/> 
     
      <ReactFlow
        defaultNodes={initialNodes}
        defaultEdges={initialEdges}
        nodes={nodes}
        edges={edges}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        connectionLineStyle={ConnectionLine}
        connectionLineComponent={ConnectionLine}
        defaultEdgeOptions={defaultEdgeOptions}
        fitView
      >
       
        <Controls />
        <MiniMap 
                nodeColor={n=>{
                    if(n.type === 'custom') return '#F55353 ';

                    return '#B983FF '
                      }} style={minimapStyle} zoomable pannable />
                      
        <Background variant= "dots" gap={30} size={1} color="black"/>
      </ReactFlow>


      <div className='avatar_child_div'> 
       <Stack direction="row" spacing={2}>
          <Avatar {...stringAvatar('Chaitanya Panchal')} style={{ width: 55, height: 55 }}/>  
          {/* for dynamic Name `${Name} */}
        </Stack>
      </div>
      

    
        <div className="mapping_child_div"> 
            <span>
            <TextField id="outline" label="Enter Text" variant="outlined" size='small' className='m-2' onChange={e => setName(e.target.value)}
                      name="title" />

            <Button className = "m-2" style={{backgroundColor: "#58549E ", color: "white"}} variant="contained" type="button" size='medium'
                      onClick={addNode} >Add Node</Button>
            </span>    
        </div>
        

        <div className='mapping_exitlogo'>
          <Tooltip title="Go To Dashboard"> 
            <Link exact to = "/Dashboard"> 
            <IconButton color="primary" href="#contained-buttons" className='button_logout' style={{backgroundColor: "#58549E", color: "black", width:40, height:43, borderRadius:4}}>
              <BiLogOut style={{width:45, height:30, color: 'white'}} />
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