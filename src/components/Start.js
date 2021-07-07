import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Questions from './Questions';

function Start() {
    const state = useSelector(state => state)
    const [start, setStart] = useState(false);
    const [end, setEnd] = useState(true)
    return (
        <>
        {end ? <div className="container col-md-8">
            <div style={{ backgroundColor: "#73a89d", color: "#ffffff" }} className="container rounded shadow fs-2">
                <p>Javascript Quiz</p>
            </div>
            <div style={{ height: "400px", backgroundColor: "#242a40", }} className="container rounded shadow">
                <div style={{ color: "#ffffff" }} className="questions rounded p-3">
                    <h3>Total Questions : {state.questions.length}</h3>
                    <h3>Passing Marks : </h3>
                </div>
            </div>
            <div className="d-grid gap-2 col-2 mx-auto pt-2 rounded">
                <button onClick={() => {setStart(true);setEnd(false)}} className="next btn btn-primary shadow" type="button">Start Quiz</button>
            </div>
        </div> : null}
        {start ? <Questions /> : null}
        </>
    )
}
export default Start;