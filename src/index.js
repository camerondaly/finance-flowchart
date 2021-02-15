import React from 'react';
import ReactDOM from 'react-dom';
import ReactFlow, {
    MiniMap,
} from 'react-flow-renderer';
import './index.css';
import nodes from './Nodes.js';
import 'react-flow-renderer/dist/style.css';

const graphStyles = { width: '100%', height: '1000px' };

const FlowChart = () => <ReactFlow 
                            elements={nodes}
                            style={graphStyles} 
                            nodesDraggable={true}>
                            <MiniMap/>
                        </ReactFlow>

ReactDOM.render(
    <FlowChart />,
    document.getElementById('root')
);

