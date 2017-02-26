import React from 'react';
import ReactDOM from 'react-dom';
import ScatterPlotController from './ScatterPlotController';
    
export function scatterPlotClient(container) {
    ReactDOM.render( <ScatterPlotController />, container );
};

