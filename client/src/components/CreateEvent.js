import React, {useState} from 'react';
import './CreateEvent.css'
import '../App.css';

import { connect } from 'react-redux';
import { getEvent } from '../actions/eventActions';

function CreateEvent(props) {
    console.log(props);
    const obj = props.event.events;
    console.log(obj);

    const  [input, setInput] = useState(    
    {
        title: obj[0].title,
        date: '',
        time: '',
        locationlink: '',
        description: ''
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(input);
    }

    return (
        <div className='create-container'>
            <h2>ADD NEW EVENT</h2>
            <form>
                <div className='form-group'>
                    <input onChange={handleChange} name="title" value={input.title} className="form-control" placeholder={useState.title}></input>
                </div>

                <div className='form-group'>
                    <input onChange={handleChange} name="date" value={input.date} className="form-control" placeholder="date"></input>
                </div>

                <div className='form-group'>
                    <input onChange={handleChange} name="time" value={input.time} clasmesName="form-control" placeholder="time"></input>
                </div>

                <div className='form-group'>
                    <input onChange={handleChange} name="locationlink" value={input.locationlink} className="form-control" placeholder="location/link"></input>
                </div>

                <div className='form-group'>
                    <textarea onChange={handleChange} name="description" value={input.description} className="form-control" placeholder="description"></textarea>
                </div>

                <button onClick={handleClick}>SUBMIT</button>
            </form>
        </div>
    )
}


const mapStateToProps = (state) => ({
    event: state.event
})

export default connect (mapStateToProps, {getEvent} )(CreateEvent)


/*

    console.log(props);
    const obj = props.event.events;
    console.log(obj);

    const  [input, setInput] = useState(    
    {
        title: obj[0].title,
        date: '',
        time: '',
        locationlink: '',
        description: ''
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(input);
    }

    return (
        <div className='create-container'>
            <h2>ADD NEW EVENT</h2>
            <form>
                <div className='form-group'>
                    <input onChange={handleChange} name="title" value={input.title} className="form-control" placeholder={useState.title}></input>
                </div>

                <div className='form-group'>
                    <input onChange={handleChange} name="date" value={input.date} className="form-control" placeholder="date"></input>
                </div>

                <div className='form-group'>
                    <input onChange={handleChange} name="time" value={input.time} clasmesName="form-control" placeholder="time"></input>
                </div>

                <div className='form-group'>
                    <input onChange={handleChange} name="locationlink" value={input.locationlink} className="form-control" placeholder="location/link"></input>
                </div>

                <div className='form-group'>
                    <textarea onChange={handleChange} name="description" value={input.description} className="form-control" placeholder="description"></textarea>
                </div>

                <button onClick={handleClick}>SUBMIT</button>
            </form>
        </div>
    )
    */