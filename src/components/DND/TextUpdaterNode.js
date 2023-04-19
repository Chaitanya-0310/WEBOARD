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
    <div>
         <input id="text" name="text" onChange={onChange} className="nodrag" />
      </div>
        <Handle type="target" position={Position.Right} id="b" isConnectable={isConnectable}/>
    </div>
  );
}

export default TextUpdaterNode;
