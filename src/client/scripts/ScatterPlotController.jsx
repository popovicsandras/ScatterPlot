import React from 'react';
import DataStore from './DataStore';
import ScatterPlotChart from './ScatterPlotChart';

export default class ScatterPlotController extends React.Component {
    
    constructor(props) {
        super(props);
        const DataStoreFactory = props.DataStore || DataStore;
        
        this.dataStore = DataStoreFactory();
        this.state = { data: [], loading: false };
    }

    componentWillMount() {
        this.setState({ loading: true });
    }

    componentDidMount() {
        this.dataStore.fetch()
            .then(this.onDataStoreFetch.bind(this))
            .catch(this.onDataStoreFetch.bind(this, [])); 
    }
    
    onDataStoreFetch(data) {
        this.setState({ data: data, loading: false });
    }
    
    render() {
        return <ScatterPlotChart data={this.state.data} loading={this.state.loading} />;
    }
};