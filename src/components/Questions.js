import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Questions() {
    const state = useSelector(state => state)
    const [ind, setInd] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedValue, setSelectedValue] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [end, setEnd] = useState(true);
    const percentage = score;

    function checkAns() {
        let correctValue = state.questions[ind].correctAnswer;
        if (selectedValue === correctValue) {
            setScore(score + 10)
        }
        if (state.questions.length === ind + 1) {
            setShowResult(true);
            setEnd(false)
        } else {
            setInd(ind + 1)
        }if (selectedValue === "") {
            alert("Please Select Answer");
        }
    }
    return (
        <>
        {end ? <div className="container col-md-8">
            <div style={{ backgroundColor: "#73a89d", color: "#ffffff" }} className="container rounded shadow fs-2">
                <p>Question <span>{ind + 1}</span> of {state.questions.length}</p>
            </div>
            <div style={{ height: "400px", backgroundColor: "#242a40", }} className="container rounded shadow">
                <div style={{ color: "#ffffff" }} className="questions rounded p-3">
                    <h2>{state.questions[ind].question}</h2>
                </div>
                <div className="container">
                    <div className="row">
                        {state.questions[ind].options.map((e, i) => {
                            return (
                                <div key={i} >
                                    <button onClick={() => setSelectedValue(e)} className="options btn w-100 fs-4 my-3">{e}</button>                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="d-grid gap-2 col-2 mx-auto pt-2 rounded">
                <button onClick={() => checkAns()} className="next btn btn-primary shadow" type="button">Next</button>
            </div>
        </div> : null}
        {showResult ? <div style={{ backgroundColor: '#242a40', color: '#ffffff' }} className="container col-md-8 p-5">
            <div className="col-md-3 m-auto pb-5">
                <h1>Your Result</h1>
            </div>
            <div className="col-md-3 m-auto">
            <CircularProgressbar value={percentage} text={`${percentage}%`} />;
            </div>
        </div> : null}
        </>
    )
}
export default Questions;