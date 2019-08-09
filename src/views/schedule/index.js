import React, {Component} from 'react';
import './index.css';
import ScheduleForm from '../../Components/scheduleForm';

class Schedule extends Component  {

  saveEvent = async(e) => {
    e.preventDefault();

    let title = e.target.elements.title.value;
    let day = e.target.elements.day.value;
    let month = e.target.elements.month.value;
    let year = e.target.elements.year.value;
    let notes = e.target.elements.notes.value;

    let URL = 'https://evening-mesa-16164.herokuapp.com/api/save';

    //we add an object to accept header when we use header.
    let response = await fetch(URL, {
      "method": "POST",
      "headers": {
      "Content-Type": "application/json", //not sure why we have to include this.
      "year": year,
      "title": title,
      "month": month,
      "day": day,
      "notes": notes,
      }
    });

    let data = await response.json();

    console.log(data);

    if (data.success) {
      alert(`${data.success}`);
    } else if (data.error){
      alert(`${data.error}`);
    } else {
      alert('try again');
    }
  }
  render () {
    return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1> Schedule an Event</h1>
            <ScheduleForm saveEvent={this.saveEvent}/>
        </div>
      </div>
    </div>
    );
  }
}

export default Schedule;
