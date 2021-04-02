import React from 'react';
import '../../App.css';
import './OurOfficers.css';
import Footer from '../Footer';
import OfficerPic from '../OfficerPic';
import pic1 from '../../images/board.jpg';
import pic2 from '../../images/bowling.jpg';
import pic3 from '../../images/check.jpg';
import pic4 from '../../images/decorating.jpg';
import pic5 from '../../images/event.jpg';
import pic6 from '../../images/group.jpg';
import pic7 from '../../images/pottery.jpg';
import pic8 from '../../images/service.jpg';
import pic9 from '../../images/study.jpg';

var caption1 = "Hey pre-dents! My name is Grace Ansley and I’m a 4th year from Orlando, Florida! I’m double majoring in Microbiology and Nutritional Sciences (aka the best of both worlds!) I’m super excited to see you all over Zoom until we can get back to The Communicore 🤩 Tune in September 8th for a good time!";
var caption2 = "Hey everyone! My name is Gaby Valladares and I am your Pre-Dental Society Vice President. I have been involved with PDS since my freshman year and I have loved every second of it! The opportunities that PDS has given me as a pre-dent are uncountable; learning about the best resources for the DAT, the application process and how to get involved to service opportunities and I’ve even learned how to make some pretty cool earrings! I was born in Miami, FL, so of course one of my favorite things to do outside of school is to go to the beach to relax and unwind. If you have any questions about PDS or anything pre-dent related, don’t hesitate to reach out!";
var caption3 = "I am a fourth-year Biology major and Women’s Studies minor. I was born and raised in Miami, FL, but I did live in Brooklyn, New York during my senior year of high school. It’s been my dream to become a Dentist since I was in first grade, but I didn’t really fall in love with the profession until I came to the University of Florida and began exploring different opportunities and learning about health sciences, along with disparities. PDS has been a huge source of guidance throughout my journey at UF, and I’ve met some incredible people in this organization that have aided me as well. ";
var caption4 = "Hey everyone, my name is Bosco Cheung and I’m your PDS treasurer this year! As treasurer, I’ll be handling your dues, PDS merch, and overall anything money-related. I’ve been with PDS since my freshman year and I love the volunteering and dental opportunities our organization provides. I come from Coral Springs, Florida and I’m a senior studying Biology with a minor in Sociology. I can’t wait to see you all virtually and (hopefully) physically this school year!";
var caption5 = "Hi my name is Ariel Johnson and I am your internal service chair for this year! I am a senior studying Nutritional Sciences and Health Disparities in Society. My family currently lives in Orlando but I was born and raised in Texas and also lived in Maryland for a bit. As your internal service chair, I will hold events and connect you with other organizations that aim to help eliminate health disparities. I can’t wait for this year!";
var caption6 = "Hi! My name is Dounia Yazji, and I’m a fourth year Nutritional Sciences major and Health Disparities in Society minor. I’m from Palm City, a small town in South Florida! When I’m not studying hard or working on dental school applications, I love spending time with friends and family, going to the beach, and playing the piano. I’ve loved being a part of the close-knit PDS family for the past two years, and I’m beyond excited to be your External Service Chair this year as we continue to serve our community in different ways and help spread the importance of oral health!";
var caption7 = "Hi my name is Molly Mines. I am the social chair coordinator for this upcoming year. I am from Lakeland, Florida. I am a sophomore majoring in nutritional science and minoring in disabilities in society. In my free time I like to go to the beach and play sports. I am looking forward to working with you guys this semester!";
var caption8 = "Hi, I’m Gracyn Lindborg. I am a junior nutritional sciences major, minoring in disabilities in society from Orlando, Florida. I absolutely love my dogs and Mexican food. I have a passion for those with disabilities and as a dentist dream of having a special needs dental practice.";
var caption9 = "Hi everyone, my name is Alice Chan. I am currently a 3rd year majoring in nutritional sciences from Melbourne, Fl. In my free time, I like to practice photography, learn new things, and thrift flip. As a historian, I look forward to capturing everyone’s smiling faces this year, either virtually and hopefully in person.";

export default function OurOfficers () {
    return (
        <>
        <br></br>
        <h1 class='our-officers'>MEET OUR OFFICERS</h1>
        <div class ="grid-container">
            <OfficerPic description = {caption1} photo = {pic1} />
            <OfficerPic description = {caption2} photo = {pic2} />
            <OfficerPic description = {caption3} photo = {pic3} />
            <OfficerPic description = {caption4} photo = {pic4} />
            <OfficerPic description = {caption5} photo = {pic5} />
            <OfficerPic description = {caption6} photo = {pic6} />
            <OfficerPic description = {caption7} photo = {pic7} />
            <OfficerPic description = {caption8} photo = {pic8} />
            <OfficerPic description = {caption9} photo = {pic9} />
            </div>
        <Footer />
        </>
        )
}