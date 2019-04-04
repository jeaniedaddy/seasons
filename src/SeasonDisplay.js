import React from 'react';

const getSeason = (lat, month) => {
    if (month > 3 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props)=> {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'summer' ? 'it is pretty hot' : 'it is chilly'; 
    const icon = season === 'summer' ? 'sun' : 'snowflake'; 
    return (
        <div>
            <i className={`huge ${icon} icon`}></i>
            <h1>{text}</h1>
            <i className={`huge ${icon} icon`}></i>
        </div>
    );
};

export default SeasonDisplay; 