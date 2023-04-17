import { useCallback, useMemo } from 'react';
import { Handle, Position } from 'reactflow';


const handleStyle = { left: 10 };


function TextUpdaterNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
  
  return (
    <div className="text-updater-node">
      <Handle type="source" position={Position.Left} isConnectable={isConnectable} />
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} style={handleStyle}/>
     <div>
         <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div>
      <Handle type="target" position={Position.Right} id="b" isConnectable={isConnectable}/>
      <Handle type="source" position={Position.Bottom} id="c" isConnectable={isConnectable} style={handleStyle} />
    </div>
  );
}

export default TextUpdaterNode;
