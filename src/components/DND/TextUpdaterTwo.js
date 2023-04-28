import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import './Text-Updater-Two.css'
import TextField from '@mui/material/TextField';


const handleStyle = { left: 10 };

function TextUpdaterTwo({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value)
  }, []);

  return (
    <div className="text-updater-node-two">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      {/* <Handle type="target" position={Position.Right} isConnectable={isConnectable}/> */}
      <div>
         <TextField id="outlined-basic" label="Enter Text" variant="outlined" size='small'  onChange={onChange}
                      name="title" />
      </div>
      <Handle type="source" position={Position.Bottom}  isConnectable={isConnectable} />
      {/* <Handle type="source" position={Position.Left} isConnectable={isConnectable}/> */}
    </div>
  );
}

export default TextUpdaterTwo;
// className="nodrag"