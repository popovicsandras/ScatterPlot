import React from 'react';
import ReactDOM from 'react-dom';
import { ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter } from 'recharts';
import 'whatwg-fetch';

React;

export function scatterPlotClient(container) {
    
    fetch('/data')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {

            const data = json;
            
            ReactDOM.render(
                <ScatterChart width={1000} height={500} margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                    <XAxis dataKey="x" name="stature" unit="cm" />
                    <YAxis dataKey="y" name="weight" unit="kg" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    <Scatter name="A school" data={data} fill="#8884d8" />
                </ScatterChart>,
                container
            )
        })
        .catch(function(ex) {
            console.log('parsing failed', ex)
        })
}

