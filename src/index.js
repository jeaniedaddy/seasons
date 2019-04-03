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
    render(){
        navigator.geolocation.getCurrentPosition(
            (location)=> console.log(location),
            (err)=> console.log(err)
        );
        return <div>latitude:1 </div>

    }
};

ReactDOM.render(<App />, document.querySelector('#root'));