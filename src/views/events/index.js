import React, {Component} from 'react';
import './index.css';
import EventsForm from '../../Components/eventsForm';
import EventsTable from '../../Components/eventsTable';



class Events extends Component  {
  constructor() {
    super();

    this.state = {
      'events': []
    }
  }
  getEvents = async(e) => {
    e.preventDefault();

    let day = e.target.elements.day.value;
    let month = e.target.elements.month.value;
    let year = e.target.elements.year.value;

    let URL = 'https://evening-mesa-16164.herokuapp.com/api/retrieve';

    let response = await fetch(URL, {
      'method':'GET',
      'headers': {
      "Content-Type": "application/json",
      'day': day,
      'month': month,
      'year': year
      }
    });

    let data = await response.json();

    console.log(data);

    if (data.success.events) {
      //store only events into variable
      let events = data.success.events;

      console.log(events);
      //sort by month then by day
      events.sort(function(a, b) {
        return a.month - b.month
      });

      events.sort(function(a, b) {
        return a.day - b.day
      });

      this.setState({ events });
    } else {
      alert('No events')
    }
  }

  deleteEvent = async(id) => {
    console.log(id);
    if (!window.confirm('Are you sure you want to delete this event?'))
    {
      let URL = 'https://evening-mesa-16164.herokuapp.com/api/delete';

      let response = await fetch(URL, {
        'method':'DELETE',
        'headers': {
        "Content-Type": "application/json",
        'event_id': id
        }
      });
      let data = await response.json();

      if (data.success) {
        let events = this.state.events;

        for (let i in events) {
          if (events[i].event_id == id) {
            events.splice(i, 1);
            break;
          }
        }

        this.setState({ events });
        alert('Successfully deleted the event.');
      } else {
        alert('Sorry, but we could not delete the event. You are forced to go.')
      }
    }
  }
  render () {
    return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Get Events</h1>
          <EventsForm getEvents={this.getEvents}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <EventsTable events={this.state.events} deleteEvent={this.deleteEvent}/>
              {/* TODO: Add event table*/}
        </div>
      </div>
    </div>
    );
  }
}

export default Events;
