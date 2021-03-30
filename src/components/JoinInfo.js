import React from 'react';
import './JoinInfo.css';
import '../App.css';

function JoinInfo() {
    return (
        <div className ='join-container'>
            <section className="member">
                <h1>JOIN US!</h1>
                <h2>ACTIVE MEMBER REQUIREMENTS</h2>
                <p>
                Attend at least 2 Pre-Dental Society Meetings<br/>
                Participate in at least 2 service events<br/>
                Participate in at least 1 social event<br/>
                Participate in at least 1 fundraising event<br/>
                Pay dues
                </p>
            </section>
            <section className="distinction">
                <h2>MEMBER WITH DISTINCTION REQUIREMENTS</h2>
                <p>
                Attend 3 Pre-Dental Society Meetings<br/>
                Participate in at least 3 service events<br/>
                Participate in at least 2 social events<br/>
                Participate in at least 2 fundraising events<br/>
                Pay dues
                </p>
            </section>
            <section className="dues">
                <h2>MEMBERSHIP DUES</h2>
                <p>
                All members (new and returning) pay $10 for dues.<br/>
                This covers costs for socials, services, webinars, and more.<br/>
                If you are not able to fulfill dues, please email us at pdspresident@gmail.com.
                </p>
            </section>
            <section className="leadership">
                <h2>LEADERSHIP POSITIONS</h2>
                <p>
                At the end of each year, we hold elections for a year-long position on our Executive Board. Positions on the board are as follows:<br/>
                President<br/>
                Vice President<br/>
                Secretary<br/>
                Treasurer<br/>
                Historian/Webmaster<br/>
                Public Relations Chair (Internal Affairs)<br/>
                Public Relations Chair (External Affairs)<br/>
                Service Chair<br/>
                Social Chair<br/>
                Fundraising Chair<br/>
                You may run for up to three of these positions if you have met the "active" member requirements (see membership tab) by the time of elections. It has been shown that usually, the most active members are the students that are elected.<br/> 
                In addition to our elected officers, a number of appointed positions are awarded each semester.
                </p>
            </section>
        </div>
        
    )
}

export default JoinInfo;