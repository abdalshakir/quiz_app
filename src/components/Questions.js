import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

function Questions() {
    const state = useSelector(state => state)
    const [questions, setQuestions] = useState(state);
    const [ind, setInd] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedValue, setSelectedValue] = useState("");
    const [showResult, setShowResult] = useState(false);

    function checkAns() {
        let correctValue = questions.questions[ind].correctAnswer;
        if (selectedValue == correctValue) {
            setScore(score + 1)
        }
        if (questions.questions.length == ind + 1) {
            setShowResult(true)
        } else {
            setInd(ind + 1)
        }
    }
    return (
        <div className="container col-md-8">
            <div style={{ backgroundColor: "#73a89d", color: "#ffffff" }} className="container rounded shadow fs-2">
                <p>Question <span>{ind + 1}</span> of {questions.questions.length}</p>
            </div>
            <div style={{ height: "400px", backgroundColor: "#242a40", }} className="container rounded shadow">
                <div style={{ color: "#ffffff" }} className="questions rounded p-3">
                    <h2>{questions.questions[ind].question}</h2>
                </div>
                <div className="container">
                    <div className="row">
                        {questions.questions[ind].options.map((e, i) => {
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
        </div>
    )
}
export default Questions;