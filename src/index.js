import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    
    state = { lat: null , errMessage: null};

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            (position)=> this.setState({ lat: position.coords.latitude}),
            (err)=> this.setState({ errMessage: err.message})
        );
    }

    renderBody(){
        if(!this.state.lat && this.state.errMessage){
            return <div>Error: {this.state.errMessage}</div>;
        }

        if(this.state.lat && !this.state.errMessage){
            return <SeasonDisplay lat={this.state.lat}> </SeasonDisplay>;
        }

        return <Spinner message="Please accept location request" /> ;
    }
    // React requirement
    render(){
        return (
            <div>
                {this.renderBody()}
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('#root'));
