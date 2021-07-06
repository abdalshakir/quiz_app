import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Result() {
    const percentage = 0;
    return (
        <div style={{ backgroundColor: '#242a40', color: '#ffffff' }} className="container col-md-8 p-5">
            <div className="col-md-3 m-auto pb-5">
                <h1>Your Result</h1>
            </div>
            <div className="col-md-3 m-auto">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />;
            </div>
        </div>
    )
}

export default Result;
