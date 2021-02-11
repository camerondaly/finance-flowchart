/* 

import React from 'react';
import ReactDOM from 'react-dom';
import ReactFlow from 'react-flow-renderer';
import phases from './overviewNodes.js';

const FlowChart = () => <ReactFlow elements={phases} />;

ReactDOM.render(
    <FlowChart />,
    document.getElementById('root')
)

*/

import React from 'react';
import ReactDOM from 'react-dom';
import ReactFlow, {
    MiniMap,
} from 'react-flow-renderer';
import './index.css';
import nodes from './Nodes.js';
import 'react-flow-renderer/dist/style.css';

const graphStyles = { width: '100%', height: '1000px' };

const FlowChart = () =>    <ReactFlow 
                            elements={nodes}
                            style={graphStyles} 
                            nodesDraggable={false}>
                            <MiniMap/>
                        </ReactFlow>

ReactDOM.render(
    <FlowChart />,
    document.getElementById('root')
);

