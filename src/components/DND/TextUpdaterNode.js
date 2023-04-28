import { useCallback, useMemo } from 'react';
import { Handle, Position } from 'reactflow';
import { TextField } from '@mui/material';


const handleStyle = { left: 10 };


function TextUpdaterNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
  
  return (
    <div className="text-updater-node">
      <Handle type="target, source" position={Position.Left} isConnectable={isConnectable} />
    <div>
         <TextField id="outlined-basic" label="Enter Text" variant="outlined" size='small'  className="nodrag" onChange={onChange}
                      name="title" />
      </div>
        <Handle type="source, target"  position={Position.Right} id="b" isConnectable={isConnectable}/>
    </div>
  );
}

export default TextUpdaterNode;
