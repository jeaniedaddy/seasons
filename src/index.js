import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

//functional component
// const App = () => {
//     navigator.geolocation.getCurrentPosition(
//         (location)=> console.log(location),
//         (err)=> console.log(err)
//     );
//     return (
//         <SeasonDisplay>
//             <div>Hi there!</div>
//         </SeasonDisplay>
//     );
// };

//class component
class App extends React.Component {
    constructor(props){
        super(props);

        // THIS IS THE ONLY TIME we do direct assignment
        // to this.state
        this.state = { lat: null , errMessage: null};

        navigator.geolocation.getCurrentPosition(
            (position)=> {
                console.log(position);
                this.setState({ lat: position.coords.latitude});

                // we did not!!
                //this.state.lat = position.coords.latitude; 
            },
            (err)=> {
                this.setState({ errMessage: err.message});
            }
        );
    }

    // React requirement
    render(){
        
        if(!this.state.lat && this.state.errMessage){
            return <div>Error: {this.state.errMessage}</div>
        }

        if(this.state.lat && !this.state.errMessage){
            return <div>latitude: {this.state.lat} </div>
        }

        return <div>Loading!</div>
        
    }
};

ReactDOM.render(<App />, document.querySelector('#root'));