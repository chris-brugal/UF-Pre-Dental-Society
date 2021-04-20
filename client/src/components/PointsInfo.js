import React from 'react';
import './PointsInfo.css';
import '../App.css';

function PointsInfo() {
    return (
        <div className='points-container'>
            <h2>CHECK YOUR CURRENT STANDING</h2>
            <a target="_blank" href="https://docs.google.com/spreadsheets/d/1_jwRPZ-_ZSGZ7dAlBpuXyryosULBxh-TRhZ7myGrweE/edit?usp=sharing">OPEN IN NEW TAB</a>
            <br></br>
            <iframe title= "google sheet" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSYN2197RbLwpHNI__K5OrIxboO19AcawP-Fez1K2NHqwo6GJfgtnPJ9l7CD3BlfEt2J34zqarqp2NL/pubhtml?widget=true&amp;headers=false" width="420" height="500"></iframe>
            <br></br>
            <br></br>
            <h2>ATTENDANCE POINTS FORM</h2>
            <a target="_blank" href="https://forms.gle/8LT7ZLDp21UZCqUp6">OPEN IN NEW TAB</a>
            <br></br>
            <iframe title="google form" src="https://docs.google.com/forms/d/e/1FAIpQLScGiyAWGI3jtybbFCVT71T2Pe8p5voiy4HrKFMpb4raz4fnSg/viewform?embedded=true" width="430" height="1150" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    )
}

export default PointsInfo;