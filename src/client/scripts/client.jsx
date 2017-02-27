import React from 'react';
import ReactDOM from 'react-dom';
import ScatterPlotController from './ScatterPlotController';
import 'whatwg-fetch';
    
export function scatterPlotClient(container) {
    ReactDOM.render( <ScatterPlotController />, container );
};

